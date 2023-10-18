import React, { useState, useEffect } from "react";

function FetchData(props) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(props.url, { signal });
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        const data = await response.text();
        let currentText = "";
        const writeText = async () => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          if (currentText.length < data.length + 1) {
            setLoading(false);
            setText(currentText);
            currentText += data[currentText.length];
            writeText();
          } else {
            setLoading(false);
          }
        };
        writeText();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    return () => controller.abort();
  }, [props.url]);

  return <div>{loading ? <p>Loading...</p> : <p>{text}</p>}</div>;
}

export default FetchData;

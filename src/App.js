import "./styles.css";
import FetchData from "./FetchData";
const App = () => {
  const url =
    "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/756e6b";

  return (
    <div>
      <h1>Fetched Flag</h1>
      <FetchData url={url} />
    </div>
  );
};

export default App;
// this is the script I use to find flag
// const iElements = document.querySelectorAll('code div span i');
// let resultString = "";
// iElements.forEach(iElement => {
//   const iValue = iElement.getAttribute('value');
//   resultString += iValue;
// });
// console.log(resultString);

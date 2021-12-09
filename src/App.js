import "./styles.css";

export default function App() {
<<<<<<< CodeSandbox
  let elements = [];
  let people = [
    ["Victor", "Lymar"],
    ["Traci", "S"]
  ];
  //let firstName = person[0]
  //let lastName = person[1]
  function displayPerson(first, last) {
=======
  function createObject(first, last, school, gradYear, color) {
    return {
      first: first,
      last: last,
      school: school,
      gradYear: gradYear,
      color: color
    };
>>>>>>> GitHub
    return <span> {(first, last)} </span>;
  }
<<<<<<< CodeSandbox
  for (let person of people) {
    let first = person[0];
    let last = person[1];
    elements.push(displayPerson(first, last));
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div> {elements} </div>
    </div>
  );
}
function createObject(first, last, school, gradYear, color) {
  return {
    first: first,
    last: last,
    school: school,
    gradYear: gradYear,
    color: color
  };
=======
  let classRoster = [
    createObject("Victor", "Lymar", "LaunchDarkly", "1923", "green"),
    createObject("Traci", "S", "Launch", "2022", "purple"),
    createObject("Ida", "Voong", "Oakland Tech", "2022", "blue"),
    createObject("Ana", "Rivera", "CSU Eastbay", "2021", "green"),
    createObject("Aidan", "Fuller", "Oakland Tech", "2022", "red"),
    createObject("kyle", "Wan", "Oakland Tech", "2023", "yea"),
    createObject("Enjun", "Li", "JOCHS", "2022", "black"),
    createObject("Luis", "Garcia", "CSU Eastbay", "2025", "black"),
    createObject("Amanda", "Yu", "Oakland Tech", "2022", "blue"),
    createObject("Yifei", "Du", "Balboa", "2022", "black"),
    createObject("Hector", "Del Valle", "JOCHS", "2022", "gray")
  ];
  //Im lost
  console.log(createObject("Ana", "Rivera", "Darkly", "2021", "green"));

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
>>>>>>> GitHub
  );
}
<<<<<<< CodeSandbox
let classRoster = [
=======

>>>>>>> GitHub
  createObject("Victor", "Lymar", "LaunchDarkly", "1923", "green"),
  createObject("Traci", "S", "Launch", "2022", "purple"),
  createObject("Ida", "Voong", "Oakland Tech", "2022", "blue"),
  createObject("Ana", "Rivera", "CSU Eastbay", "2021", "green"),
  createObject("Aidan", "Fuller", "Oakland Tech", "2022", "red"),
  createObject("kyle", "Wan", "Oakland Tech", "2023", "yea"),
  createObject("Enjun", "Li", "JOCHS", "2022", "black"),
  createObject("Luis", "Garcia", "CSU Eastbay", "2025", "black"),
  createObject("Amanda", "Yu", "Oakland Tech", "2022", "blue"),
  createObject("Yifei", "Du", "Balboa", "2022", "black"),
  createObject("Hector", "Del Valle", "JOCHS", "2022", "gray")
];

console.log(createObject("Ana", "Rivera", "Darkly", "2021", "green"));
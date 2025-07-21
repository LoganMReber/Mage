import './App.css';

const wizard = {
  "name":"Caster",
  "age":1,
  "mana":1,
  "skills":{
    "casting":1,
    "forming":2,
    "meditation":3
  }
  
}

function App() {
  return (
    <div className="App">
      <div className="WizStatBlock">
        <h1>{wizard.name}, Age: {wizard.age}</h1>
        {Object.keys(wizard.skills).map((element,i)=>{
          return (<h3 key={i}>{element} : {wizard.skills[element]}</h3>);
        })}
      </div>
    </div>
  );
}

export default App;

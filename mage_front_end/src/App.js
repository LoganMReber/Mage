import {useState} from "react";
import StatScreen from "./components/StatScreen";
import SpellsScreen from "./components/SpellsScreen";
import ItemsScreen from "./components/ItemsScreen";
import MapScreen from "./components/MapScreen";
import JournalScreen from "./components/JournalScreen";


const App = () => {

  const [windowMode,setWindowMode] = useState(1);

  const selectWindow = id => {
    setWindowMode(id);
  }
  const displayMainWindow = index => {
    switch(index){
      case 1:
        return (<StatScreen/>);
      case 2:
        return (<SpellsScreen/>);
      case 3:
        return (<ItemsScreen/>);
      case 4:
        return (<MapScreen/>);
      case 5:
        return (<JournalScreen/>);
      default:
        return (<div>Invalid Window Mode</div>);
    }
  }
  return (
    <div className="App">
      <div id="Main-Window">
        <menu className="tabs">
          <button className="tab" onClick={()=>selectWindow(1)}>Character</button>
          <button className="tab" onClick={()=>selectWindow(2)}>Spells</button>
          <button className="tab" onClick={()=>selectWindow(3)}>Items</button>
          <button className="tab" onClick={()=>selectWindow(4)}>Map</button>
          <button className="tab" onClick={()=>selectWindow(5)}>Journal</button>
        </menu>
        {displayMainWindow(windowMode)}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import * as MWView from "./MainWindowViews/exports";

const MainWindow = () => {
  const [windowMode, setWindowMode] = useState("Character");
  const selectWindow = (id) => {
    setWindowMode(id);
  };
  const displayMainWindow = (index) => {
    switch (index) {
      case "Character":
        return <MWView.Character />;
      case "Spells":
        return <MWView.Spells />;
      case "Items":
        return <MWView.Items />;
      case "Map":
        return <MWView.Map />;
      case "Journal":
        return <MWView.Journal />;
      default:
        return <div>Invalid Window Mode</div>;
    }
  };
  return (
    <div className="Main-Window">
      <menu className="tabs">
        <div className="tab" onClick={() => selectWindow("Character")}>
          Character
        </div>
        <div className="tab" onClick={() => selectWindow("Spells")}>
          Spells
        </div>
        <div className="tab" onClick={() => selectWindow("Items")}>
          Items
        </div>
        <div className="tab" onClick={() => selectWindow("Map")}>
          Map
        </div>
        <div className="tab" onClick={() => selectWindow("Journal")}>
          Journal
        </div>
      </menu>
      {displayMainWindow(windowMode)}
    </div>
  );
};

export default MainWindow;

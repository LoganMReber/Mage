import { useSelector } from "react-redux";

const CharacterView = () => {
  const mageStats = useSelector((state) => state.MageStats);

  return (
    <div className="Character-View">
      <div className="full-name">
        {mageStats.titles.equipped[0]}
        {mageStats.titles.equipped[1]}
        {mageStats.name}
        {mageStats.titles.equipped[2]}
        {mageStats.titles.equipped[3]}
      </div>
      <div className="bio-row">
        <div className="age">Age: {mageStats.age}</div>
        <div className="rank">Rank: {mageStats.rank}</div>
      </div>
      <div className="rep-row">
        <div className="goodness">Goodness: {mageStats.reputation.good}</div>
        <div className="fame">Fame: {mageStats.reputation.fame}</div>
        <div className="lawfulness">Lawfulness: {mageStats.reputation.law}</div>
      </div>
    </div>
  );
};

export default CharacterView;

const StatScreen = () => {

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

    return (
        <div className="Stat-Screen">
            <h1>{wizard.name}, Age: {wizard.age}</h1>
            {Object.keys(wizard.skills).map((element,i)=>{
                return (<h3 key={i}>{element} : {wizard.skills[element]}</h3>);
            })}
        </div>
    )
 
}

export default StatScreen;
import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(res => res.json())
      .then(data => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (id) => {
    setArmy(army.filter(bot => bot.id !== id));
  };

  const dischargeBot = (id) => {
    fetch(`http://localhost:3000/bots/${id}`, {
      method: "DELETE",
    }).then(() => {
      setArmy(army.filter(bot => bot.id !== id));
      setBots(bots.filter(bot => bot.id !== id));
    });
  };

  return (
    <div className="App">
      <BotArmy army={army} onRelease={releaseBot} onDischarge={dischargeBot} />
      <BotCollection bots={bots} onAdd={addToArmy} />
    </div>
  );
}

export default App;

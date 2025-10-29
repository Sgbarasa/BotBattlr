import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";
import BotSpecs from "./components/BotSpecs";
import SortBar from "./components/SortBar";
import FilterBar from "./components/FilterBar";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((r) => r.json())
      .then(setBots)
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  // Add bot to army (only one per class)
  function enlistBot(bot) {

  const existingBot = army.find((b) => b.bot_class === bot.bot_class);

  if (existingBot) {
    Swal.fire({
      icon: "warning",
      title: "Class Limit Reached!",
      text: `You already have a ${bot.bot_class} bot in your army.`,
      confirmButtonColor: "#ff4757",
    });
    return;
  }

  if (!army.find((b) => b.id === bot.id)) {
    setArmy([...army, bot]);
  }

  setSelectedBot(null);
}

  // Release bot from army
  const releaseBot = (id) => {
    setArmy(army.filter((b) => b.id !== id));
  };

  // Delete bot forever, including the db.json
  const deleteBot = (id) => {
    fetch(`http://localhost:3000/bots/${id}`, { method: "DELETE" }).then(() => {
      setBots(bots.filter((b) => b.id !== id));
      setArmy(army.filter((b) => b.id !== id));
    });
  };

  // Filter logic
  const filteredBots =
    filters.length > 0
      ? bots.filter((bot) => filters.includes(bot.bot_class))
      : bots;

  // Sorting logic
  const sortedBots = [...filteredBots].sort((a, b) => {
    if (sortBy === "health") return b.health - a.health;
    if (sortBy === "damage") return b.damage - a.damage;
    if (sortBy === "armor") return b.armor - a.armor;
    return 0;
  });

  return (
    <div className="App">
      <h1>🔩 Bot Battlr</h1>
      <BotArmy army={army} onRelease={releaseBot} onDelete={deleteBot} />

      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onBack={() => setSelectedBot(null)}
          onEnlist={enlistBot}
        />
      ) : (
        <>
          <FilterBar setFilters={setFilters} />
          <SortBar setSortBy={setSortBy} />
          <BotCollection
            bots={sortedBots}
            onSelect={setSelectedBot}
            onDelete={deleteBot}
          />
        </>
      )}
    </div>
  );
}

export default App;

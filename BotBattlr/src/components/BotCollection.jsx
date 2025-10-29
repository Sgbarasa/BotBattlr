import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onAdd }) {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-grid">
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} handleClick={() => onAdd(bot)} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;

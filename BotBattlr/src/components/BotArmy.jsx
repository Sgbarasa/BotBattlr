import React from "react";
import BotCard from "./BotCard";

function BotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="bot-army">
      <h2> Bot Army</h2>
      <div className="bot-grid">
        {army.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => onRelease(bot.id)}
            handleDischarge={() => onDischarge(bot.id)}
            showDischargeButton
          />
        ))}
      </div>
    </div>
  );
}

export default BotArmy;

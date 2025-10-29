import React from "react";

function BotCard({ bot, handleClick, handleDischarge, showDischargeButton }) {
  const { name, avatar_url, health, damage, armor, bot_class, catchphrase } = bot;

  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p><strong>Class:</strong> {bot_class}</p>
      <p><strong>HP:</strong> {health} | <strong>Damage:</strong> {damage} | <strong>Armor:</strong> {armor}</p>
      <p>{catchphrase}</p>
      {showDischargeButton && (
        <button
          className="discharge-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleDischarge();
          }}
        >
          ❌ Discharge
        </button>
      )}
    </div>
  );
}

export default BotCard;

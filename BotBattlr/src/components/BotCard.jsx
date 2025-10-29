function BotCard({ bot, onClick, onDelete, inArmy, onReleaseClick }) {
  
return (
    <div className="bot-card" onClick={onClick}>
      
      {inArmy && (
        <button
          className="release-btn"
          onClick={(e) => {
            e.stopPropagation();
            onReleaseClick(bot.id);
          }}
        >
          ✖
        </button>
      )}

    <img src={bot.avatar_url} alt={bot.name} />
    
    <div className="bot-info">
        <h3>{bot.name}</h3>
        <p className="catchphrase">{bot.catchphrase}</p>
        <p className="stats">
          ⚔️ {bot.damage} | ❤️ {bot.health} | 🛡️ {bot.armor}
        </p>
        <small>{bot.bot_class}</small>
    </div>
      
    <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(bot.id);
        }}
      >
        🗑️
      </button>

    </div>
  );
}

export default BotCard;

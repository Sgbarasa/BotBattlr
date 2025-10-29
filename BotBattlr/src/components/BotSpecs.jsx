function BotSpecs({ bot, onBack, onEnlist }) {
  return (
    <div className="bot-specs">
      <div className="bot-specs-content">
        <img src={bot.avatar_url} alt={bot.name} className="specs-avatar" />
        <h2>{bot.name}</h2>
        <p className="catchphrase">{bot.catchphrase}</p>
        <p>Class: {bot.bot_class}</p>
        <p>⚔️ Damage: {bot.damage}</p>
        <p>❤️ Health: {bot.health}</p>
        <p>🛡️ Armor: {bot.armor}</p>
        <div className="btns">
          <button onClick={onBack}>⬅️ Back</button>
          <button onClick={() => onEnlist(bot)}>🪖 Enlist</button>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;

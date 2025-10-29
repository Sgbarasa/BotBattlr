import BotCard from "./BotCard";

function BotCollection({ bots, onSelect, onDelete }) {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => onSelect(bot)}
            onDelete={() => onDelete(bot.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;

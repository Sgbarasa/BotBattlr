import BotCard from "./BotCard";

function BotArmy({ army, onRelease, onDelete }) {
  return (
    <div className="your-army">
      <h2>Bot Army</h2>
      <div className="bot-grid">
        {army.length === 0 ? (
          <p><em>No bots enlisted yet.</em></p>
        ) : (
          army.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onClick={() => onRelease(bot.id)}
              onDelete={() => onDelete(bot.id)}
              inArmy={true} // 👈 tells the card it's enlisted
              onReleaseClick={() => onRelease(bot.id)} // for top-right X
            />
          ))
        )}
      </div>
    </div>
  );
}

export default BotArmy;

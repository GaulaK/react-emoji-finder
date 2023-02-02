import emojis from "../assets/datas/emojis.json";

const Line = ({ search }) => {
  const found = [];
  let index = 0;
  while (found.length < 20 && index < emojis.length) {
    if (emojis[index].keywords.includes(search)) {
      found.push(emojis[index]);
    }
    index++;
  }
  return found.map((emoji) => {
    return (
      <div
        key={emoji.title}
        className="line"
        onClick={() => {
          navigator.clipboard.writeText(emoji.symbol);
        }}
      >
        <span>
          {emoji.symbol} {emoji.title}
        </span>
        <span className="click-to-copy">Click to copy !</span>
      </div>
    );
  });
};

export default Line;

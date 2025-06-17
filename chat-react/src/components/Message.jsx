import '../style/App.css';


function Message({ text, from, index }) {
  return (
    <div key={index} className={from === "voce" ? "youMessage" : "message"}>
      <h4>{from === "voce" ? "Você diz:" : "Atendente diz:"}</h4>
      <div className="message">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Message;
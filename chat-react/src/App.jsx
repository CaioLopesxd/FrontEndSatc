import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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

function App() {
  const [messages, setMessages] = useState([
    { from: "atendente", text: "Olá! Como posso ajudar?" },
    { from: "atendente", text: "Tem alguma dúvida sobre nossos serviços?" },
    { from: "voce", text: "Sim, quero saber mais sobre os planos." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { from: "voce", text: input }]);
    setInput("");
  };

  return (
    <>
      <div class="chatBox">
        <div class="chatHead">
          <h2>Atendimento Online</h2>
        </div>

        <div className="chatContent">
          {messages.map((msg, index) => (
            <Message text={msg.text} index={index} from={msg.from} />
          ))}
        </div>
        <div class="chatFooter">
          <input
            id="inputMessage"
            class="input"
            type="text"
            placeholder="Digite Sua mensagem"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button id="sendBtn" onClick={handleSend} class="btn">
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

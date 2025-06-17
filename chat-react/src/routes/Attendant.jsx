import React, { useState } from "react";
import Message from "../components/Message";
import '../style/App.css';
import { Link } from "react-router-dom";

function Attendant() {

    const [messages, setMessages] = useState([
        { from: "atendente", text: "Olá! Como posso ajudar?" },
        { from: "atendente", text: "Tem alguma dúvida sobre nossos serviços?" },
        { from: "voce", text: "Sim, quero saber mais sobre os planos." },
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim() === "") return;
        setMessages([...messages, { from: "atendente", text: input }]);
        setInput("");
    };
    return (<>
        <div className="chatBox">
            <div className="chatHead">
                <h2>Atendimento Online</h2>
            </div>

            <div className="chatContent">
                {messages.map((msg, index) => (
                    <Message text={msg.text} index={index} from={msg.from} />
                ))}
            </div>
            <div className="chatFooter">
                <input
                    id="inputMessage"
                    className="input"
                    type="text"
                    placeholder="Digite Sua mensagem"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button id="sendBtn" onClick={handleSend} className="btn">
                    Enviar
                </button>
            </div>
        </div>
                <div>
                    <Link to="/" className="btn">
                        Voltar para Você
                    </Link>
                </div>
    </>);
}

export default Attendant;
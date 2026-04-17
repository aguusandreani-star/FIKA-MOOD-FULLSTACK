import React, { useState, useRef, useEffect } from 'react';

// Respuestas predefinidas
const botResponses = {
    "hola": "¡Hola! Soy FikaBot, tu asistente virtual. ¿En qué puedo ayudarte hoy? (Prueba con 'horario', 'menu' o 'contacto')",
    "horario": "Nuestro horario de atención es de Lunes a Viernes de 9:00 a 18:00 hs y Sábados de 10:00 a 14:00 hs.",
    "menu": "¡Claro! Nuestro menú se basa en productos orgánicos y sin gluten. Puedes ver nuestras secciones de Recetas y Productos arriba.",
    "contacto": "Puedes encontrarnos en la sección 'Encontranos' o enviar un mensaje en el formulario 'FIKA LOVERS'.",
    "gracias": "¡De nada! Que tengas un excelente día."
};

function ChatBot() {

    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: botResponses.hola, sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = (e) => {

        e.preventDefault();

        const userMessage = input.trim();
        if (userMessage === '') return;

        setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
        setInput('');

        setTimeout(() => {

            const lowerCaseMsg = userMessage.toLowerCase();
            let botReply;

            // 1️⃣ respuestas exactas
            if (botResponses[lowerCaseMsg]) {
                botReply = botResponses[lowerCaseMsg];
            }

            // 2️⃣ PROMPT ENGINEERING (interpretación de intención)
            else if (lowerCaseMsg.includes("cansad")) {
                botReply = "Si estás cansada te recomiendo un Café Fika Especial o una Box Desayuno Fika para recuperar energía 🌿";
            }

            else if (lowerCaseMsg.includes("hambre")) {
                botReply = "Si tienes hambre te recomiendo probar nuestras recetas saludables o una torta casera con café.";
            }

            else if (lowerCaseMsg.includes("recomend")) {
                botReply = "Te recomiendo el Café Fika Especial acompañado de una torta artesanal. Es uno de los favoritos de nuestros clientes.";
            }

            else if (lowerCaseMsg.includes("receta")) {
                botReply = "En nuestra sección de recetas encontrarás opciones saludables y orgánicas ideales para cualquier momento del día.";
            }

            else if (lowerCaseMsg.includes("cafe")) {
                botReply = "Nuestro Café Fika Especial tiene notas de chocolate y avellana. Es perfecto para acompañar nuestras tortas caseras.";
            }

            else {
                botReply = "Lo siento, no entendí tu pregunta. Puedes preguntarme por horario, menú o recomendaciones.";
            }

            setMessages(prev => [...prev, { text: botReply, sender: 'bot' }]);

        }, 600);
    };

    return (
        <>
            <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)} title="Abrir Chat">
                {isOpen ? '✖' : '💬'}
            </button>

            {isOpen && (
                <div className="chat-window">

                    <div className="chat-header">
                        FikaBot Asistente 🌿
                    </div>

                    <div className="chat-body">

                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                <p>{msg.text}</p>
                            </div>
                        ))}

                        <div ref={messagesEndRef} />

                    </div>

                    <form className="chat-input" onSubmit={handleSend}>

                        <input
                            type="text"
                            placeholder="Escribe un mensaje..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />

                        <button type="submit">Enviar</button>

                    </form>

                </div>
            )}
        </>
    );
}

export default ChatBot;
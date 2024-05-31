import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useEffect, useState } from "react";

import {HiveAImodel} from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";
import ReactMarkdown from 'react-markdown';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [messages, setMessages] = useState([]); // Armazena as mensagens do chat
  const [newMessage, setNewMessage] = useState(""); // Controla a entrada de nova mensagem
  const messagesEndRef = useRef(null); // Referência para rolar para a última mensagem

  
  const handleChange = ({ target: { name, value } }) => {
    if (name === 'message') {
        setNewMessage(value);  // Atualiza corretamente newMessage com o valor digitado no textarea
      }
    setForm({ ...form, [name]: value }); 
  };

  const sendMessageToBot = (message) => {
    const API_KEY = import.meta.env.VITE_APP_API_KEY;
    const Url =`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${API_KEY}`;
    const msg = {
        contents: [
          { parts: [{ text: message }] }
        ]
      };

    fetch(Url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(msg)
    })
    .then(response => response.json())
    .then(data => {
      // Aqui você pode obter a mensagem de resposta do bot se necessário
      // E adicionar à interface do usuário como uma nova mensagem recebida
      const botMessage = data.candidates[0].content.parts[0].text;
      receiveMessageFromBot(botMessage);
    })
    .catch(error => console.error('Erro ao enviar mensagem ao bot do Telegram', error));
  };

  const receiveMessageFromBot = (text) => {
    const now = new Date();
    const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages((prevMessages) => [...prevMessages, { from: "bot", text, timestamp }]);
    //scrollToBottom();
  };

  
  // Função para enviar mensagens (simulando envio para uma API e recebendo uma resposta)
  const sendMessage = (text) => {
    const now = new Date();
    const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    // Adiciona a mensagem enviada
    setMessages((prevMessages) => [...prevMessages, { from: "user", text: text, timestamp }]);
    setNewMessage("");
    sendMessageToBot(text);

  };

  // Função para manter a visualização das mensagens sempre na última mensagem
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);  // Dependência para o useEffect
  
  return (
    <section className='relative flex lg:flex-row flex-col ai-max-container'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='subhead-text'>Quer saber mais? Converse com a nossa Assistente I.A., a Hive!</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-5'
        >
            {/* Área do chat */}
      <div className="chatarea">
        <div className="overflow-y-auto" style={{ height: "250px" }}>
          {messages.map((msg, index) => (
            <div key={index} className={`overflow-x-auto text-md flex flex-col ${msg.from === "user" ? "bg-blue-500 text-white p-1 mb-1 ml-10 rounded-lg h-auto max-w-2/3 shadow text-right" : "bg-gray-800 text-white p-1 mt-2 mb-2 rounded-lg max-w-2/3 h-auto mr-10 shadow text-left"}`}>
              <ReactMarkdown>{msg.text}</ReactMarkdown>
              <span className={`timestamp ${msg.from === "user" ? "text-xs opacity-75 px-1" : "text-xs opacity-75 text-right px-1"}`}>{msg.timestamp}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <textarea
              name='message'
              rows='1'
              className='textarea'
              placeholder='Escreve seus pensamentos e dúvidas aqui...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <button onClick={() => sendMessage(newMessage)} className="btn p-2 bg-blue-500 text-white">
            Enviar no Chat
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <HiveAImodel
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={3.0}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;

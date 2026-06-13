"use client";

import { useEffect, useState } from "react";

const API_URL = "https://z08luhsnk8.execute-api.ap-south-1.amazonaws.com/prod";

interface Message {
  messageId: string;
  name: string;
  email: string;
  message: string;
}

export default function MessagesList() {
  const [messages, setMessages] = useState<Message[]>([]);

  const loadMessages = async () => {
    const response = await fetch(`${API_URL}/messages`);

    const data = await response.json();

    setMessages(data);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Contact Messages</h2>

      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.messageId}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <h3 className="font-bold text-xl">{message.name}</h3>

            <p className="text-blue-400 mb-2">{message.email}</p>

            <p className="text-gray-300">{message.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

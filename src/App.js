import React, { useRef } from "react";
import "./App.css";

const templates = [
  {
    name: "Template 1",
    content: "Good morning."
  },
  {
    name: "Template 2",
    content: "Nice to meet you."
    
  },
  {
    name: "Template 3",
    content: "Hello, dear"
    
  },
  {
    name: "Template 4",
    content: "Good luck."
    
  },
  {
    name: "Template 5",
    content: "From David..."
    
  },
  {
    name: "Template 6",
    content: "I am a software engineer."
    
  },
];

const App = () => {
  const messageRef = useRef();

  const handleButtonClick = (template) => {
    messageRef.current.value += '\n' + template;
  };

  const sendEmail = () => {
    messageRef.current.value += '\n \n' + new Date().toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', day: 'numeric', month: 'short', hour12: true });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-2xl mb-4">Message Editor</h1>
      <div className="flex flex-col gap-4 w-full px-2">
        <textarea
          placeholder="Message Content"
          className="p-2 border border-gray-300 rounded mb-4"
          ref={messageRef}
          rows={7}
        />
      </div>
      <h1 className="text-2xl mb-4">Email Reply Templates</h1>
      <div className="grid grid-cols-3 gap-2">
        {templates.map((template, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white py-1 px-2 rounded text-sm"
            onClick={() => handleButtonClick(template.content)}
            title={template.content}
          >
            {template.name}
          </button>
        ))}
      </div>
      <button
        className={`bg-gradient-to-r from-blue-500 to-blue-700 text-white py-1 px-2 rounded text-sm mt-4 w-[100px]`}
        onClick={() => sendEmail()}
      >
        SEND
      </button>
    </div>
  );
};

export default App;

import React, { useState } from 'react';

const templates = [
  'Template 1: Hello, this is a sample template.',
  'Template 2: Hi there, this is another template.',
  // Add more templates as needed
];

const MessageEditor = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setEmailBody(template);
  };

  const handleEmailChange = (e) => {
    setEmailBody(e.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Email Templates</h2>
      <div className="my-2">
        {templates.map((template, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white p-2 m-1 rounded"
            onClick={() => handleTemplateSelect(template)}
          >
            {`Template ${index + 1}`}
          </button>
        ))}
      </div>
      <textarea
        className="w-full h-64 p-2 border rounded"
        value={emailBody}
        onChange={handleEmailChange}
      />
    </div>
  );
};

export default MessageEditor;
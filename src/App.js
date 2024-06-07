import React, { useState, useRef } from "react";
import "./App.css";

const templates = [
  <div>
    <p>
      Hi there,
      <br />
      &#9733;&#9733;&#9733; PHP / MySQL / HTML / CSS / JavaScript Expert
      &#9733;&#9733;&#9733; 7+ Years of Experience &#9733;&#9733;&#9733;
      <br />
      I've read requirements and ready to build modern design &amp; mobile
      responsive website using php.
    </p>
    <p>
      Websites we built with <strong>PHP</strong>:<br />
      &#10004; https://cascadecuts.com/
      <br />
      &#10004; https://evolveautowerks.com/
      <br />
      &#10004; https://www.shruseternity.com/
      <br />
      &#10004; https://cbdstorefortworth.com/
      <br />
      &#10004; http://taylorstitch.com/
      <br />
      &#10004; https://www.huroncapital.com/
    </p>
    <p>
      As the requirements on project are not complete and need discussion so i
      placed tentative bid. To provide you the best quote, let's have a chat!
    </p>
    <p>
      Best Regards,
      <br />
      TechPlus Team
    </p>
  </div>,
  <div>
    <p>
      Hello, there,
      <br />
      &#9733;&#9733;&#9733; React / MongoDB / HTML / CSS / JavaScript Expert
      &#9733;&#9733;&#9733; 7+ Years of Experience &#9733;&#9733;&#9733;
      <br />
      I've read requirements and ready to build modern design &amp; mobile
      responsive website using php.
    </p>
    <p>
      Websites we built with <strong>PHP</strong>:<br />
      &#10004; https://cascadecuts.com/
      <br />
      &#10004; https://evolveautowerks.com/
      <br />
      &#10004; https://www.shruseternity.com/
      <br />
      &#10004; https://cbdstorefortworth.com/
      <br />
      &#10004; http://taylorstitch.com/
      <br />
      &#10004; https://www.huroncapital.com/
    </p>
    <p>
      As the requirements on project are not complete and need discussion so i
      placed tentative bid. To provide you the best quote, let's have a chat!
    </p>
    <p>
      Best Regards,
      <br />
      TechPlus Team
    </p>
  </div>,
  <div>
    <p>
      Hi there,
      <br />
      &#9733;&#9733;&#9733; Blockchain / MySQL / HTML / CSS / JavaScript Expert
      &#9733;&#9733;&#9733; 7+ Years of Experience &#9733;&#9733;&#9733;
      <br />
      I've read requirements and ready to build modern design &amp; mobile
      responsive website using php.
    </p>
    <p>
      Websites we built with <strong>PHP</strong>:<br />
      &#10004; https://cascadecuts.com/
      <br />
      &#10004; https://evolveautowerks.com/
      <br />
      &#10004; https://www.shruseternity.com/
      <br />
      &#10004; https://cbdstorefortworth.com/
      <br />
      &#10004; http://taylorstitch.com/
      <br />
      &#10004; https://www.huroncapital.com/
    </p>
    <p>
      As the requirements on project are not complete and need discussion so i
      placed tentative bid. To provide you the best quote, let's have a chat!
    </p>
    <p>
      Best Regards,
      <br />
      TechPlus Team
    </p>
  </div>,
  <div>
    <p>
      Hi there,
      <br />
      &#9733;&#9733;&#9733; Solana / MySQL / HTML / CSS / JavaScript Expert
      &#9733;&#9733;&#9733; 7+ Years of Experience &#9733;&#9733;&#9733;
      <br />
      I've read requirements and ready to build modern design &amp; mobile
      responsive website using php.
    </p>
    <p>
      Websites we built with <strong>PHP</strong>:<br />
      &#10004; https://cascadecuts.com/
      <br />
      &#10004; https://evolveautowerks.com/
      <br />
      &#10004; https://www.shruseternity.com/
      <br />
      &#10004; https://cbdstorefortworth.com/
      <br />
      &#10004; http://taylorstitch.com/
      <br />
      &#10004; https://www.huroncapital.com/
    </p>
    <p>
      As the requirements on project are not complete and need discussion so i
      placed tentative bid. To provide you the best quote, let's have a chat!
    </p>
    <p>
      Best Regards,
      <br />
      TechPlus Team
    </p>
  </div>,
  <div>
    <p>
      Hi there,
      <br />
      &#9733;&#9733;&#9733; Unity / MySQL / HTML / CSS / JavaScript Expert
      &#9733;&#9733;&#9733; 7+ Years of Experience &#9733;&#9733;&#9733;
      <br />
      I've read requirements and ready to build modern design &amp; mobile
      responsive website using php.
    </p>
    <p>
      Websites we built with <strong>PHP</strong>:<br />
      &#10004; https://cascadecuts.com/
      <br />
      &#10004; https://evolveautowerks.com/
      <br />
      &#10004; https://www.shruseternity.com/
      <br />
      &#10004; https://cbdstorefortworth.com/
      <br />
      &#10004; http://taylorstitch.com/
      <br />
      &#10004; https://www.huroncapital.com/
    </p>
    <p>
      As the requirements on project are not complete and need discussion so i
      placed tentative bid. To provide you the best quote, let's have a chat!
    </p>
    <p>
      Best Regards,
      <br />
      TechPlus Team
    </p>
  </div>,
  <div>
    <p>
      Hi there,
      <br />
      &#9733;&#9733;&#9733; WebScraping / MySQL / HTML / CSS / JavaScript Expert
      &#9733;&#9733;&#9733; 7+ Years of Experience &#9733;&#9733;&#9733;
      <br />
      I've read requirements and ready to build modern design &amp; mobile
      responsive website using php.
    </p>
    <p>
      Websites we built with <strong>PHP</strong>:<br />
      &#10004; https://cascadecuts.com/
      <br />
      &#10004; https://evolveautowerks.com/
      <br />
      &#10004; https://www.shruseternity.com/
      <br />
      &#10004; https://cbdstorefortworth.com/
      <br />
      &#10004; http://taylorstitch.com/
      <br />
      &#10004; https://www.huroncapital.com/
    </p>
    <p>
      As the requirements on project are not complete and need discussion so i
      placed tentative bid. To provide you the best quote, let's have a chat!
    </p>
    <p>
      Best Regards,
      <br />
      TechPlus Team
    </p>
  </div>,
];

const App = () => {
  const messageRef = useRef();
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [time, setTime] = useState(null);

  const handleButtonClick = (template) => {
    // messageRef.current.value += "\n" + template;
    setSelectedTemplate(template);
  };

  const sendEmail = () => {
    setTime(
      "\n\n" +
        new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          day: "numeric",
          month: "short",
          hour12: true,
        })
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      {/* <h1 className="text-2xl mb-4">Message Editor</h1>
      <div className="flex flex-col gap-4 w-full px-2">
        <textarea
          placeholder="Message Content"
          className="p-2 border border-gray-300 rounded mb-4"
          ref={messageRef}
          rows={7}
        />
      </div> */}
      <h1 className="text-2xl mb-4">Template content</h1>

      <div className="px-2 border border-gray-300 h-[500px] overflow-y-auto flex items-center flex-col justify-between p-2">
        {selectedTemplate}
        <br />
        {time && time}
      </div>
      <button
        className={`bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-2 rounded text-sm mt-4 w-[125px] mb-4`}
        onClick={() => sendEmail()}
      >
        SEND
      </button>
      <h1 className="text-2xl mb-4">Email Reply Templates</h1>
      <div className="grid grid-cols-3 gap-2">
        {templates.map((template, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white py-1 px-2 rounded text-sm"
            onClick={() => handleButtonClick(template)}
          >
            Template {index + 1}
          </button>
        ))}
      </div>

    </div>
  );
};

export default App;

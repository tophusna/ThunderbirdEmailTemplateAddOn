// Listen for messages from the React app
window.addEventListener('message', (event) => {
    if (event.data.type === 'INSERT_TEMPLATE') {
      const template = event.data.template;
      // Logic to insert the template into the email body
      insertTemplateIntoEmailBody(template);
    }
  });
  
  const insertTemplateIntoEmailBody = (template) => {
    const emailBody = document.querySelector('div[aria-label="Message Body"]');
    if (emailBody) {
      emailBody.innerHTML += `<p>${template}</p>`;
    } else {
      console.error('Email body element not found');
    }
  };
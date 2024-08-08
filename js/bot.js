function toggleChat() {
    const chatContent = document.querySelector('.chat-content');
    chatContent.style.display = chatContent.style.display === 'block' ? 'none' : 'block';
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    if (message) {
        appendMessage(message, 'user');
        chatInput.value = '';
        botResponse(message);
    }
}

function appendMessage(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('li');
    messageElement.className = `chat-message ${sender}-message`;
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function appendOptionButton(text, callback) {
    const chatOptions = document.getElementById('chatOptions');
    const button = document.createElement('button');
    button.className = 'chat-option-button';
    button.textContent = text;
    button.onclick = callback;
    chatOptions.appendChild(button);
}

function clearOptions() {
    const chatOptions = document.getElementById('chatOptions');
    chatOptions.innerHTML = '';
}

function botResponse(userMessage) {
    let response = "Lo siento, no entiendo tu mensaje.";
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hola')) {
        response = "¡Hola! ¿En qué puedo ayudarte?";
        appendMessage(response, 'bot');
        showOptions(['Ver precios', 'Soporte', 'Contactos']);
    } else if (lowerCaseMessage.includes('precio')) {
        response = "Aquí tienes los precios de nuestras prendas:";
        appendMessage(response, 'bot');
        showPrices();
        showOptions(['Consultar otra cosa', 'Gracias']);
    } else if (lowerCaseMessage.includes('gracias') || lowerCaseMessage.includes('denada')) {
        response = "¡De nada! ¿Necesitas algo más?";
        appendMessage(response, 'bot');
        showOptions(['Consultar otra cosa', 'No, gracias']);
    } else if (lowerCaseMessage.includes('adiós') || lowerCaseMessage.includes('chau')) {
        response = "¡Adiós! Si tienes más dudas, no dudes en contactarte con soporte.";
        appendMessage(response, 'bot');
    } else if (lowerCaseMessage.includes('contacto') || lowerCaseMessage.includes('redes sociales')) {
        response = "Aquí tienes nuestras redes sociales y contactos:";
        appendMessage(response, 'bot');
        showContacts();
        showOptions(['Consultar otra cosa', 'Gracias']);
    } else {
        response = "No estoy seguro de cómo responder a eso. ¿Necesitas algo más o tienes otra pregunta?";
        appendMessage(response, 'bot');
        showOptions(['Sí', 'No']);
    }
}

function showOptions(options) {
    clearOptions();
    options.forEach(option => {
        appendOptionButton(option, () => handleOption(option));
    });
}

function handleOption(option) {
    clearOptions();
    appendMessage(option, 'user');
    botResponse(option);
}

function showPrices() {
    const prices = `
        <table>
            <tr><th>Prenda</th><th>Precio</th></tr>
            <tr><td>Zapatilla</td><td>$100</td></tr>
            <tr><td>Remera</td><td>$50</td></tr>
            <tr><td>Gorra</td><td>$30</td></tr>
            <tr><td>Campera</td><td>$120</td></tr>
            <tr><td>Pantalón largo</td><td>$70</td></tr>
            <tr><td>Pantalón corto</td><td>$40</td></tr>
        </table>
    `;
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('li');
    messageElement.className = 'chat-message bot-message';
    messageElement.innerHTML = prices;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showContacts() {
    const contacts = `
        <div class="link-item">
            <img src="./img/img-ig.ico" alt="Instagram" class="link-icon">
            <a href="https://www.instagram.com/s4muel_r0driguez/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <p>Conéctate con nosotros en Instagram</p>
        </div>
        <div class="link-item">
            <img src="./img/img-whatsapp.ico" alt="Whatsapp" class="link-icon">
            <a href="https://wa.link/oqcnmz" target="_blank" rel="noopener noreferrer">Whatsapp</a>
            <p>Chatea con nosotros en Whatsapp</p>
        </div>
        <div class="link-item">
            <img src="./img/img-niko.ico" alt="Nike" class="link-icon">
            <a href="https://www.nike.com.ar/" target="_blank" rel="noopener noreferrer">Nike Arg - Información oficial</a>
            <p>Visita la página oficial de Nike Argentina</p>
        </div>
        <div class="link-item">
            <img src="./img/img-github.ico" alt="GitHub" class="link-icon">
            <a href="https://github.com/S4muel-Rodriguez" target="_blank" rel="noopener noreferrer">GitHub</a>
            <p>Explora mi perfil en GitHub</p>
        </div>
        <div class="link-item">
            <img src="./img/img-linkedin.ico" alt="LinkedIn" class="link-icon">
            <a href="https://www.linkedin.com/in/samu-rodr%C3%ADguez-77b24325a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <p>Conéctate conmigo en LinkedIn</p>
        </div>
    `;
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('li');
    messageElement.className = 'chat-message bot-message';
    messageElement.innerHTML = contacts;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

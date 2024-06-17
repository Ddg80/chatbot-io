import './index.scss';
import Navbar from './main/index';

function run() {
  const navbar = new Navbar();
  navbar.run();
  navbar.render();
}

run();

document.addEventListener('DOMContentLoaded', () => {
  const messageForm = document.getElementById('message-form') as HTMLFormElement;
  const messageInput = document.getElementById('message-input') as HTMLInputElement;
  const chatBox = document.querySelector('.chat-box') as HTMLDivElement;

  function addMessage(type: string, name: string, text: string, time: string) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;

    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'avatar';
    const avatarImg = document.createElement('img');
    avatarImg.src = type === 'sent' ? 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' : 'assets/images/chatbot.jpg';
    avatarDiv.appendChild(avatarImg);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    const nameDiv = document.createElement('div');
    nameDiv.className = 'name';
    nameDiv.innerText = name;
    const timeDiv = document.createElement('div');
    timeDiv.className = 'time';
    timeDiv.innerText = time;
    const textDiv = document.createElement('div');
    textDiv.className = 'text';
    textDiv.innerText = text;

    contentDiv.appendChild(nameDiv);
    contentDiv.appendChild(timeDiv);
    contentDiv.appendChild(textDiv);

    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(contentDiv);

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const messageText = messageInput.value.trim();
    if (messageText) {
      addMessage('sent', 'Bob', messageText, new Date().toLocaleTimeString());
      messageInput.value = '';
    }
  });
});

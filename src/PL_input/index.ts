import './index.scss';

class Template {
  el: HTMLElement | null;

  constructor() {
    this.el = document.getElementById('app');
  }

  render() {
    return `
      <div class="messages" id="messages">
          <!-- Messages will be displayed here -->
      </div>
      <div class="message-container">
          <input type="text" id="messageInput" class="message-input" placeholder="Envoyer un message">
          <button class="send-button" id="sendButton">Envoyer</button>
      </div>
    `;
  }

  run() {
    this.el!.innerHTML = this.render();
    const messageInput = document.getElementById('messageInput') as HTMLInputElement;
    const sendButton = document.getElementById('sendButton') as HTMLButtonElement;

    messageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.sendMessage();
      }
    });

    sendButton.addEventListener('click', () => {
      this.sendMessage();
    });
  }

  sendMessage() {
    const messageInput = document.getElementById('messageInput') as HTMLInputElement;
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.textContent = messageText;

      document.getElementById('messages')!.appendChild(messageElement);

      messageInput.value = '';
      messageInput.focus();
    }
  }
}

const template = new Template();
template.run();

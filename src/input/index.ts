import MessageSended from '../messageSended';
import MessageReceived from '../messageReceived';

class Input {
  el: HTMLElement | null;

  constructor() {
    this.el = document.getElementById('app');
  }

  render() {
    return `
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
        this.sendMessage((new MessageSended({
          name: 'John2',
          time: '00:08',
          text: messageInput.value
        })).render());
        this.sendMessage((new MessageReceived({
          name: 'John2',
          time: '00:08',
          text: 'Hello, que puis-je pour vous ?'
        })).render());
      }
    });

    sendButton.addEventListener('click', () => {
      this.sendMessage((new MessageSended({
        name: 'John2',
        time: '00:08',
        text: messageInput.value
      })).render());
      this.sendMessage((new MessageReceived({
        name: 'John2',
        time: '00:08',
        text: 'Hello, que puis-je pour vous'
      })).render());
    });
  }

  sendMessage(messageInput: string) {
    document.getElementById('messages')!.insertAdjacentHTML('beforeend', messageInput.trim());
    const input: HTMLInputElement = document.getElementById('messageInput') as HTMLInputElement;
    input.value = '';
  }
}

export default Input;

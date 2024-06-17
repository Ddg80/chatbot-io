import '../index.scss';

const Message = class {
  name:string;

  time:string;

  text:string;

  constructor({
    name,
    time,
    text
  }: {
    name: string;
    time: string;
    text: string;
  }) {
    this.name = name;
    this.time = time;
    this.text = text;
  }

  render() {
    return `
        <div class="message sent">
        <div class="avatar"><img src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar"></div>
        <div class="message-content">
         <div class="name">${this.name}</div>
            <div class="time-received">${this.time}</div>
            <div class="text">${this.text}</div>
        </div>
      </div>
    `;
  }
};

export default Message;

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
        <div class="message received">
            <div class="avatar"><img src="https://plus.unsplash.com/premium_photo-1682024745224-2edf92747598?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhdGJvdHxlbnwwfHwwfHx8MA%3D%3D" alt="Avatar"></div>
            <div class="message-content">
            <div class="name">${this.name}</div>
            <div class="time-send">${this.time}</div>
            <div class="text">${this.text}</div>
            </div>
        </div>
    `;
  }
};

export default Message;

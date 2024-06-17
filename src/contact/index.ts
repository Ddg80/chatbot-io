const ContactRow = class {
  el: HTMLBodyElement | null;

  firstName: string;

  lastName: string;

  pictureUrl: string;

  sentence: string;

  constructor({
    firstName,
    lastName,
    pictureUrl,
    sentence
  }: {
    firstName: string;
    lastName: string;
    pictureUrl: string;
    sentence: string;
  }) {
    this.el = document.querySelector('body');
    this.firstName = firstName;
    this.lastName = lastName;
    this.pictureUrl = pictureUrl;
    this.sentence = sentence;
  }

  render() {
    return `
<div class="row d-flex align-items-center p-2">
  <div class="col-2">
    <img src="${this.pictureUrl}" alt="${this.firstName} ${this.lastName}" class="img-thumbnail rounded-circle">
  </div>
  <div class="col-10">
    <h2>${this.firstName} ${this.lastName}</h2>
    <p>${this.sentence}</p>
  </div>
</div>
    `;
  }

  run() {
    this.el!.innerHTML = this.render();
  }
};

export default ContactRow;

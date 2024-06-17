const ContactRow = class {
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
    this.firstName = firstName;
    this.lastName = lastName;
    this.pictureUrl = pictureUrl;
    this.sentence = sentence;
  }

  render() {
    return `
<div class="row d-flex align-items-center p-2">
  <div class="col-4">
    <img src="${this.pictureUrl}" alt="${this.firstName} ${this.lastName}" class="img-thumbnail rounded-circle">
  </div>
  <div class="col-8">
    <p class="fw-bold">${this.firstName} ${this.lastName}</p>
    <p>${this.sentence}</p>
  </div>
</div>
    `;
  }
};

export default ContactRow;

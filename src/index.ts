import './index.scss';

const Template = class {
  el: HTMLBodyElement | null;

  messageAlert:string;

  constructor() {
    this.el = document.querySelector('body');
    this.messageAlert = 'sdfsdf s dfs dfs d';
  }

  render() {
    return `
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">Navbar</a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Contacts</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    `;
  }

  run() {
    this.el!.innerHTML = this.render();
  }
};

const template = new Template();
template.run();

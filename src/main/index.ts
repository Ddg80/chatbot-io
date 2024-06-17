import ContactRow from '../contact/index';
import MessageReceived from '../messageReceived';
import MessageSended from '../messageSended';
import Input from '../input';

const Navbar = class {
  el: HTMLBodyElement | null;

  input: Input;

  constructor() {
    this.el = document.querySelector('body');
    this.input = new Input();
  }

  render() {
    return `
          <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <a class="navbar-brand" href="#Navbar"> 
                <img src="https://img.icons8.com/?size=100&id=uZrQP6cYos2I&format=png&color=000000" alt="Navbar">
                </a>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="d-flex flex-row">
            <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px; height: 85vh;">
              <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg class="bi me-2" width="40"><use xlink:href="#bootstrap"/></svg>
                <span class="fs-4">ChatBot</span>
              </a>
              <hr>
              <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    ${
  (new ContactRow({
    firstName: 'John',
    lastName: 'Doe',
    pictureUrl: 'https://imgs.search.brave.com/fe0OixSVwxjPX4PUoMR-GnmUH244fPKYM6Y_oS3faTw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni84MzIzLzgzMjMz/MTcucG5nP3NlbXQ9/YWlzX2h5YnJpZA',
    sentence: 'This is a sentence2'
  })).render()
}
                </li>
                <li class="nav-item">
                    ${
  (new ContactRow({
    firstName: 'John2',
    lastName: 'Doe2',
    pictureUrl: 'https://imgs.search.brave.com/fe0OixSVwxjPX4PUoMR-GnmUH244fPKYM6Y_oS3faTw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni84MzIzLzgzMjMz/MTcucG5nP3NlbXQ9/YWlzX2h5YnJpZA',
    sentence: 'This is a sentence2'
  })).render()
}
                </li>
                <li class="nav-item">
                    ${
  (new ContactRow({
    firstName: 'John3',
    lastName: 'Doe3',
    pictureUrl: 'https://imgs.search.brave.com/fe0OixSVwxjPX4PUoMR-GnmUH244fPKYM6Y_oS3faTw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni84MzIzLzgzMjMz/MTcucG5nP3NlbXQ9/YWlzX2h5YnJpZA',
    sentence: 'This is a sentence2'
  })).render()
}
                </li>
              </ul>
              <hr>
              <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                  <strong>mdo</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                  <li><a class="dropdown-item" href="#">New project...</a></li>
                  <li><a class="dropdown-item" href="#">Settings</a></li>
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
              </div>
            </div>
          <div class="m-4 col-8">
         <div class="container h-100">
    <div class="chat-box messages h-100" id="messages">
             ${
  (new MessageReceived({
    name: 'John3',
    time: '23:39',
    text: 'Hello les boys!'
  })).render()
}
             ${
  (new MessageSended({
    name: 'John2',
    time: '00:08',
    text: 'Hello you!'
  })).render()
}

</div>
${this.input.render()}
</div>
          </div>
        </div>
      `;
  }

  run() {
    this.el!.innerHTML = this.render();
    this.input.run();
  }
};

export default Navbar;

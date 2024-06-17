import './index.scss';
import Navbar from './navbar/index';

function run() {
  const navbar = new Navbar();
  navbar.run();
  navbar.render();
}

run();

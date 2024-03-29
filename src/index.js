import { home } from './home';
import { menu } from './menu';
import './styles/navbar.css';


var homeButton = document.querySelector('#Home');
var menuButton = document.querySelector('#Menu');
let content = document.querySelector('.content');

home();

homeButton.addEventListener('click', function() {
  content.innerHTML = '';
  home();
});

menuButton.addEventListener('click', function() {
  content.innerHTML = '';
  menu();
});

//home(); 


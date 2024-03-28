import { home } from './home';
import { menu } from './menu';


var homeButton = document.querySelector('#Home');
var menuButton = document.querySelector('#Menu');
let content = document.querySelector('.content');

home();

// Now you can add event listeners or manipulate these buttons
homeButton.addEventListener('click', function() {
  content.innerHTML = '';
  home();
});

menuButton.addEventListener('click', function() {
  content.innerHTML = '';
  menu();
});

//home(); 

// die idee ist verschiedene module zu schreiben und sie dann mit click event listenener aufzurufen
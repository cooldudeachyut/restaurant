import '../styles/style.css';
import pizza from '../assets/pizza.jpg';
import populateHome from './home.js';
import populateMenu from './menu.js';
import populateContact from './contact.js';

const content = document.getElementById("content");
content.style.background = "url(" + pizza + ") no-repeat center center fixed";
const topbar = document.createElement("div");
topbar.id = "topbar";
const infodiv = document.createElement("div");
infodiv.id = "infodiv";
const bottombar = document.createElement("div");
bottombar.id = "bottombar";
content.append(topbar);
content.append(infodiv);
content.append(bottombar);

let homebtn = document.createElement("button"), menubtn = document.createElement("button"), contactbtn = document.createElement("button");
homebtn.classList.add("tabtn");
menubtn.classList.add("tabtn");
contactbtn.classList.add("tabtn");
topbar.append(homebtn);
topbar.append(menubtn);
topbar.append(contactbtn);

homebtn.innerText = "Home";
menubtn.innerText = "Menu";
contactbtn.innerText = "Contact";

function dePopulate() {
	while (infodiv.firstChild)
		infodiv.removeChild(infodiv.firstChild);
}

homebtn.addEventListener("click", () => {dePopulate(); populateHome(infodiv);});
menubtn.addEventListener("click", () => {dePopulate(); populateMenu(infodiv);});
contactbtn.addEventListener("click", () => {dePopulate(); populateContact(infodiv);});

populateHome(infodiv);
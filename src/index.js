import './style.css';
import pizza from './pizza.jpg';
import populateHome from './home.js';
import populateMenu from './menu.js';
import populateContact from './contact.js';

const content = document.getElementById("content");
content.style.backgroundImage = "url(" + pizza + ")";
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

homebtn.addEventListener("click", () => {dePopulate(); populateHome();});
menubtn.addEventListener("click", () => {dePopulate(); populateMenu();});
contactbtn.addEventListener("click", () => {dePopulate(); populateContact();});
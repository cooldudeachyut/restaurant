import chef from '../assets/chef.png';

export default function populateMenu(appendToThisElement) {
	const headbox = document.createElement("div");
	headbox.classList.add("headbox");

	let head = document.createElement("h1");
	head.classList.add("head");
	head.innerText = "Mulan's Menu";

	const headicon = document.createElement("img");
	headicon.src = chef;
	headicon.classList.add("icon");

	headbox.append(headicon);
	headbox.append(head);


	let homeinfo = document.createElement("div");
	let homeinfo1 = document.createElement("div");
	let homeinfo2 = document.createElement("div");
	homeinfo.classList.add("infobox");
	homeinfo1.classList.add("infobox");
	homeinfo2.classList.add("infobox");

	homeinfo.innerText = "HAHAHAHAHAHHAHA";

	appendToThisElement.append(headbox);
	appendToThisElement.append(homeinfo);
	appendToThisElement.append(homeinfo1);
	appendToThisElement.append(homeinfo2);
}
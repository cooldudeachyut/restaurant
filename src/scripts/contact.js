import chef_icon from '../assets/chef.png';
import chef from '../assets/chefimg.jpg';
import manager from '../assets/manager.jpg';
import waiteress from '../assets/waiteress.jpg';

export default function populateContact(appendToThisElement) {
	function createHeadBox()
	{
		const headbox = document.createElement("div");
		headbox.classList.add("headbox");

		let head = document.createElement("h1");
		head.classList.add("head");
		head.innerText = "Giovanni's Contacts";

		const headicon = document.createElement("img");
		headicon.src = chef_icon;
		headicon.classList.add("icon");

		headbox.append(headicon);
		headbox.append(head);

		return headbox;
	}

	function createContactBox(name_string, title_string, contact_number_string, img_location)
	{
		const contactBox = document.createElement("div");
		contactBox.classList.add("infobox");

		const contactDual = document.createElement("div");
		contactDual.classList.add("dual");
		contactDual.setAttribute("style", "width: 60%;");

		const contactDetails = document.createElement("div");
		let contactName = document.createElement("p");
		contactName.classList.add("infotext");
		contactName.innerText = name_string;

		let contactTitle = document.createElement("p");
		contactTitle.classList.add("infotext");
		contactTitle.innerText = title_string;

		const contactImg = document.createElement("img");
		contactImg.src = img_location;
		contactImg.classList.add("img");

		let contactNumber = document.createElement("p");
		contactNumber.classList.add("infotext");
		contactNumber.innerText = contact_number_string;

		contactDetails.append(contactName);
		contactDetails.append(contactTitle);
		contactDetails.append(contactNumber);
		contactDual.append(contactDetails);
		contactDual.append(contactImg);
		contactBox.append(contactDual);

		return contactBox;
	}

	function createContactsArray()
	{
		const contacts = [];

		contacts.push(createContactBox("Giorno Giovanni", "Manager", "555-111-222", manager));
		contacts.push(createContactBox("Marco Giovanni", "Chef", "555-111-222", chef));
		contacts.push(createContactBox("Lucia Giovanni", "Waiteress", "555-111-222", waiteress));

		return contacts;
	}

	appendToThisElement.append(createHeadBox());

	const contacts = createContactsArray();
	for (let i = 0; i < contacts.length; i++)
		appendToThisElement.append(contacts[i]);
}
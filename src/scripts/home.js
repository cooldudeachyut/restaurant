import chef from '../assets/chef.png';

export default function populateHome(appendToThisElement) {

	function createHeadBox()
	{
		const headbox = document.createElement("div");
		headbox.classList.add("headbox");

		let head = document.createElement("h1");
		head.classList.add("head");
		head.innerText = "Mulan's Pizzeria";

		const headicon = document.createElement("img");
		headicon.src = chef;
		headicon.classList.add("icon");

		headbox.append(headicon);
		headbox.append(head);

		return headbox;
	}

	function createHistoryBox()
	{
		const history = document.createElement("div");
		history.classList.add("infobox");

		let historyInner = document.createElement("p");
		historyInner.innerText = "Mulan's Pizzeria has been providing the best Italian Napolitan pizzas since 1889 with hand-made dough and freshly picked tomatoes to create a blast of flavour and tone that you will never forget!";
		historyInner.classList.add("infotext");
		history.append(historyInner);

		return history;
	}

	function createHoursBox()
	{
		const hours = document.createElement("div");
		hours.classList.add("infobox");

		let hoursHead = document.createElement("h1");
		hoursHead.classList.add("infotext");
		hoursHead.classList.add("infohead");
		hoursHead.innerText = "Hours";
		hours.append(hoursHead);

		const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		for (let i = 0; i < 7; i++)
		{
			let hoursInfo = document.createElement("p");
			hoursInfo.classList.add("infotext");

			if (i != 6 && i != 2)
				hoursInfo.innerText = `${days[i]}: 8:00 - 22:00`;

			else if (i == 2)
				hoursInfo.innerText = `${days[i]}: 10:00 - 20:00`;

			else
				hoursInfo.innerText = `${days[i]}: 10:00 - 00:00`;
		
			hours.append(hoursInfo);
		}

		return hours;
	}

	function createLocationBox()
	{
		const location = document.createElement("div");
		location.classList.add("infobox");

		let locationHead = document.createElement("h1");
		locationHead.classList.add("infotext");
		locationHead.classList.add("infohead");
		locationHead.innerText = "Location";
		location.append(locationHead);

		let locationInfo = document.createElement("p");
		locationInfo.classList.add("infotext");
		locationInfo.innerText = "4098 Margaret Street, Houston, Texas, 77587";
		location.append(locationInfo);

		return location;
	}

	appendToThisElement.append(createHeadBox());
	appendToThisElement.append(createHistoryBox());
	appendToThisElement.append(createHoursBox());
	appendToThisElement.append(createLocationBox());
}
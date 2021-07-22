import chef_icon from '../assets/chef.png';
import aperitivo from '../assets/aperitivo.jpg';
import negroni from '../assets/negroni.jpg';
import tiramisu from '../assets/tiramisu.jpg';
import sbrisolona from '../assets/Sbrisolona.jpeg';
import margherita from '../assets/margherita.jpg';
import quattro_stagioni from '../assets/quattro-stagioni.jpg';
import quattro_formaggi from '../assets/quattro-formaggi.jpg';

export default function populateMenu(appendToThisElement) {
	function createHeadBox()
	{
		const headbox = document.createElement("div");
		headbox.classList.add("headbox");

		let head = document.createElement("h1");
		head.classList.add("head");
		head.innerText = "Giovanni's Menu";

		const headicon = document.createElement("img");
		headicon.src = chef_icon;
		headicon.classList.add("icon");

		headbox.append(headicon);
		headbox.append(head);

		return headbox;
	}

	function createSubHeading(subhead_string)
	{
		let subHeadBox = document.createElement("h2");
		subHeadBox .classList.add("headbox");
		subHeadBox .classList.add("subheadbox");
		subHeadBox .innerHTML = subhead_string;
		
		return subHeadBox;
	}

	function createFoodBox(head_string, info_string, price_string, img_location)
	{
		const foodBox = document.createElement("div");
		foodBox.classList.add("infobox");

		let foodHead = document.createElement("h1");
		foodHead.classList.add("infotext");
		foodHead.classList.add("infohead");
		foodHead.innerText = head_string;
		foodBox.append(foodHead);

		let foodInfo = document.createElement("p");
		foodInfo.classList.add("infotext");
		foodInfo.innerText = info_string;

		const foodDual = document.createElement("div");
		foodDual.classList.add("dual");

		let foodPrice = document.createElement("p");
		foodPrice.classList.add("price");
		foodPrice.innerText = price_string;

		const foodImg = document.createElement("img");
		foodImg.src = img_location;
		foodImg.classList.add("img");

		foodDual.append(foodPrice);
		foodDual.append(foodImg);
		foodBox.append(foodHead);
		foodBox.append(foodInfo);
		foodBox.append(foodDual);

		return foodBox;
	}

	function createBeveragesArray()
	{
		const beverages = [];

		beverages.push(createSubHeading("Beverages"));
		beverages.push(createFoodBox("Aperitivo", "Aperitivo is known to be an excellent drink that prepares the digestive system before one sits down for a delicious Italian dinner. It is a light and dry tonic, which prepares the body’s digestive metabolism better than an overly sweetened cocktail.", "$2", aperitivo));
		beverages.push(createFoodBox("Negroni", "This famous Italian drink has an interesting history. Named after Count Camillo Negroni, a frequent traveller living in Florence in the 1920s.Negroni is made from one part of gin, one part of Campari, and one part of red Vermouth, and garnished with a slice of orange.", "$3", negroni))

		return beverages;
	}

	function createDessertsArray()
	{
		const desserts = [];

		desserts.push(createSubHeading("Desserts"));
		desserts.push(createFoodBox("Tiramisù", "The most famous of all Italian desserts, Tiramisù is a powerful layering of coffee-soaked savoiardi (sponge finger biscuits) and a rich cream made with mascarpone cheese, eggs and sugar, sometimes spiced up with a drop of liqueur.", "$8", tiramisu));
		desserts.push(createFoodBox("Sbrisolona", "The name of this simple yet irresistible cake means ‘crumbly’ and refers to its extreme flakiness. Today, it’s usually made with a mix of corn and white flour, almonds and a generous amount of butter. It’s then enriched with sugar, eggs and lemon zest – resulting in its iconic uneven texture.", "$8", sbrisolona));
		
		return desserts;
	}

	function createPizzaArray()
	{
		const pizza = [];

		pizza.push(createSubHeading("Pizza"));
		pizza.push(createFoodBox("Neapolitan Margherita", "She is quite simply the queen of the table. The Margherita pizza is undoubtedly the favourite pizza of Italian people, with key ingredients being mozzarella de bufala, tomato, oil and basil, combined in a traditional way by Italian pizza makers called pizzaioli.", "$15", margherita));
		pizza.push(createFoodBox("Quattro Formaggi", "You have to be a true cheese lover to appreciate this creamy, delicious and attractive white pizza, whose name means simply ‘Four Cheeses’. The ingredients and type of cheese used are provolone, parmigiano reggiano, mozzarella and gorgonzola.", "$18", quattro_formaggi));
		pizza.push(createFoodBox("Quattro Stagioni", "Quattro Stagioni, meaning ‘Four Seasons’, is a mixture of strong flavours together with mozzarella and tomato. On this pizza you can find cooked ham, mushrooms, artichokes and black olives.", "$20", quattro_stagioni));

		return pizza;
	}
	
	appendToThisElement.append(createHeadBox());

	const beverages = createBeveragesArray();
	for (let i = 0; i < beverages.length; i++)
		appendToThisElement.append(beverages[i]);

	const desserts = createDessertsArray();
	for (let i = 0; i < desserts.length; i++)
		appendToThisElement.append(desserts[i]);

	const pizza = createPizzaArray();
	for (let i = 0; i < pizza.length; i++)
		appendToThisElement.append(pizza[i]);
}
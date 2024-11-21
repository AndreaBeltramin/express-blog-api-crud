//creo un array dove inserisco una lista di almeno 5 post, per ognuno indico titolo,
//contenuto, immagine e tags sotto forma di array di stringhe
const blogPosts = [
	{
		id: 1,
		title: "ciambellone",
		content: "ciambellone fatto in casa",
		img: "./images/ciambellone.jpeg",
		tags: ["cucina", "dolce", "dessert"],
	},
	{
		id: 2,
		title: "cracker di barbabietola",
		content: "cracker di barbabietola fatti in casa",
		img: "./images/cracker_barbabietola.jpeg",
		tags: ["cucina", "antipasto"],
	},
	{
		id: 3,
		title: "pane dolce fritto",
		content: "pane dolce fritto fatto in casa",
		img: "./images/pane_fritto_dolce.jpeg",
		tags: ["cucina", "panificazione", "dolce"],
	},
	{
		id: 4,
		title: "pasta alla barbabietola",
		content: "pasta alla barbabietola fatta in casa",
		img: "./images/pasta_barbabietola.jpeg",
		tags: ["cucina", "pasta", "primo"],
	},
	{
		id: 5,
		title: "torta paesana",
		content: "torta paesana fatta in casa",
		img: "./images/torta_paesana.jpeg",
		tags: ["cucina", "dolce", "dessert"],
	},
];

module.exports = blogPosts;

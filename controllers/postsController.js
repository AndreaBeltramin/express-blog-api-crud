const posts = require("../data/posts");

//index
function index(req, res) {
	//dichiariamo la lista dei post filtrata = alla lista dei post originale
	let filteredPosts = posts;
	//se la richiesta contiene un tag come parametro
	if (req.query.tag) {
		//allora filtriamo la lista dei post
		//e cerchiamo se nella lista dei tags di ogni post è incluso il tag cercato
		filteredPosts = posts.filter((post) => post.tags.includes(req.query.tag));
	}
	//diamo in risposta la lista dei post filtrati come oggetto json
	res.json(filteredPosts);
}

//show
function show(req, res) {
	//recuperiamo l'id dall'URL e lo trasformiamo in un numero
	const id = parseInt(req.params.id);
	//cerchiamo il post con quell'id nella lista dei post
	const post = posts.find((post) => post.id === id);

	//facciamo un controllo se non trovo nessun post con quell'id
	if (!post) {
		//ritorno uno status 404 e un messaggio di errore
		return res.status(404).json({
			error: "Not Found",
			message: "Post non trovato",
		});
	}
	//diamo in risposta il post trovato
	res.json(post);
}

//store
function store(req, res) {
	res.json("Crea un nuovo post");
}

//update
function update(req, res) {
	const id = req.params.id;
	res.json(`Modifica totale del post con id n. ${id}`);
}

//modify
function modify(req, res) {
	const id = req.params.id;
	res.json(`Modifca parziale del post con id n. ${id}`);
}

//destroy
function destroy(req, res) {
	//recuperiamo l'id dall'URL e lo trasformiamo in un numero
	const id = parseInt(req.params.id);
	//cerchiamo il post con quell'id nella lista dei post
	const post = posts.find((post) => post.id === id);

	//facciamo un controllo se non trovo nessun post con quell'id
	if (!post) {
		//ritorno uno status 404 e un messaggio di errore
		return res.status(404).json({
			error: "Not Found",
			message: "Post non trovato",
		});
	}

	//rimuoviamo il post con quell'id dalla lista dei post
	posts.splice(posts.indexOf(post), 1);
	//stampiamo in console la lista dei post aggiornata
	console.log(posts);
	//diamo una risposta con stato 204 e nessun contenuto
	res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };

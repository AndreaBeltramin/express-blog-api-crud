const posts = require("../data/blogPosts");

//index
function index(req, res) {
	//diamo in risposta la lista dei post come oggetto json
	res.json(posts);
}

//show
function show(req, res) {
	//recuperiamo l'id dall'URL e lo trasformiamo in un numero
	const id = parseInt(req.params.id);
	//cerchiamo il post con quell'id nella lista dei post
	const post = posts.find((post) => post.id === id);
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
	//rimuoviamo il post con quell'id dalla lista dei post
	posts.splice(posts.indexOf(post), 1);
	//stampiamo in console la lista dei post aggiornata
	console.log(posts);
	//diamo una risposta con stato 204 e nessun contenuto
	res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };

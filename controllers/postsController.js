const posts = require("../data/blogPosts");

//index
//restituisce un oggetto json con la lista dei post
//e il conteggio partendo da un array
function index(req, res) {
	res.json([blogPosts, "il numero di post è: " + blogPosts.length]);
}

//show
function show(req, res) {
	const id = req.params.id;
	res.json(`Mostra il post con id n. ${id}`);
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
	const id = req.params.id;
	res.json(`Elimina il post con id n. ${id}`);
}

module.exports = { index, show, store, update, modify, destroy };


const {writeFile} = require("fs");
const path = require("path");

const DATA = {
	"user": {
		"name": "John Doe"
	}
};

writeFile(path.resolve(__dirname, "db.json"), JSON.stringify(DATA, null, 2), "utf-8", err => {
	if (err) {
		console.error(err);
	}
});

module.exports = {
	...require("@ngineer/config"),
	index: "index.ts",
	api: {
		path: "/api",
		target: "http://localhost:1337"
	}
};

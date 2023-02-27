const setProject = require("../controllers/project.controller");

module.exports = (app) => {
	app.post("/api/setProject", setProject);
}
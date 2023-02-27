const {setProject, getProjects} = require("../controllers/project.controller");

module.exports = (app) => {
	app.post("/api/setProject", setProject);
	app.get("/api/getProjects", getProjects);
}
const {
	setProject, 
	getProjects,
	updateProject } = require("../controllers/project.controller");

module.exports = (app) => {
	app.post("/api/setProject", setProject);
	app.get("/api/getProjects", getProjects);
	app.put("/api/updateProject/:id", updateProject)
}
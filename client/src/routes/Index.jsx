import { 
	createBrowserRouter, 
	RouterProvider } from "react-router-dom"
import ErrorPage from "../views/ErrorPage.view";
import Home from "../views/Home.view";
import KanbanBoard from "../views/KanbanBoard.view";

const Index = () => {
	const router = createBrowserRouter([
		{
			path:"/",
			element: <Home />,
			errorElement: <ErrorPage />,
			children: [
				{
					path:"/",
					element: <KanbanBoard />		
				}
			]
		}
	])

	return (
		<RouterProvider router={router} />
	);
}

export default Index;
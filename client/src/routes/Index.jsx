import { 
	createBrowserRouter, 
	RouterProvider } from "react-router-dom"
import ErrorPage from "../views/ErrorPage";
import Home from "../views/Home";
import KanbanBoard from "../views/KanbanBoard";

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
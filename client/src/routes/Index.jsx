import { 
	createBrowserRouter, 
	RouterProvider } from "react-router-dom"
import ErrorPage from "../views/ErrorPage";
import Home from "../views/Home";

const Index = () => {
	const router = createBrowserRouter([
		{
			path:"/",
			element: <Home />,
			errorElement: <ErrorPage />
		}
	])

	return (
		<RouterProvider router={router} />
	);
}

export default Index;
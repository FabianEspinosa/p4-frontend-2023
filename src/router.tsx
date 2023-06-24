import { createBrowserRouter, Navigate } from "react-router-dom";
import GuestLayout from "./components/GuestLayout";
import Movies from "./views/Movies";
import NoMovies from "./views/NoMovies";

const router = createBrowserRouter([
    {
        path: "",
        element: <Navigate to="/movies" replace />,
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/movies",
                element: <Movies />,
            },
        ],
    },
    {
        path: "*",
        element: <NoMovies notFound={404} />,
    },


])

export default router;
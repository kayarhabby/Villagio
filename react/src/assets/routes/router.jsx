import {createBrowserRouter} from "react-router-dom";
import Home from "../view/Home.jsx";


const router = createBrowserRouter([
    {
        path : '/',
        element : <Home />
    }
])

export default router;

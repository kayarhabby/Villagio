import {createBrowserRouter} from "react-router-dom";
import Home from "../view/Home.jsx";
import Service from "../view/Service.jsx";
import News from "../view/News.jsx";


const router = createBrowserRouter([

    {
        path : '/',
        element : <Home />
    },
    {
        path : '/service',
        element : <Service />
    },
    {
        path : '/news',
        element : <News />
    }
])

export default router;

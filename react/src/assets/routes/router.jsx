import {createBrowserRouter} from "react-router-dom";
import Home from "../view/Home.jsx";
import Service from "../view/Service.jsx";
import News from "../view/News.jsx";
import Activities from "../view/Activities.jsx";
import AostaValley from "../view/Regions/AostaValley.jsx";
import Lazio from "../view/Regions/Lazio.jsx";
import LeMarche from "../view/Regions/LeMarche.jsx";
import AllVillas from "../view/Regions/AllVillas.jsx";
import FindYourVilla from "../view/Regions/FindYourVilla.jsx";


const router = createBrowserRouter([

    {
        path : '/',
        element : <Home />
    },
    {
        path : '/aostaValley',
        element : <AostaValley />
    },
    {
        path : '/lazio',
        element : <Lazio />
    },
    {
        path : '/leMarche',
        element : <LeMarche />
    },
    {
        path : '/allVillas',
        element : <AllVillas />
    },
    {
        path : '/findYourVilla',
        element : <FindYourVilla />
    },

    {
        path : '/service',
        element : <Service />
    },
    {
        path : '/news',
        element : <News />
    },
    {
        path : '/activities',
        element : <Activities />,
    },
    {
        path : '/CapriBoatTourFromSorrento',
        element : <Service />
    },
    {
        path : '/SightseeingNaples',
        element : <Service />
    },
    {
        path : '/LearnHistory',
        element : <Service />
    },

])

export default router;

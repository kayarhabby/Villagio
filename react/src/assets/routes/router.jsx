import {createBrowserRouter} from "react-router-dom";
import Home from "../view/Home.jsx";
import Service from "../view/Service.jsx";
import Activities from "../view/Activities.jsx";
import AllVillas from "../view/Regions/AllVillas.jsx";
import FindYourVilla from "../view/Regions/FindYourVilla.jsx";
import CapriBoat from "../view/Activities/CapriBoat.jsx";
import LearnHistory from "../view/Activities/LearnHistory.jsx";
import SightseeingNaples from "../view/Activities/SightseeingNaples.jsx";
import WineAndCheeseTour from "../view/Activities/WineAndCheeseTour.jsx";
import TestimonialPage from "../view/Testimoniale/TestimonialPage.jsx";
import VillabookPage from "../view/BookVillas/VillabookPage.jsx";
import VillaDetailsPage from "../view/BookVillas/VillaDetailsPage.jsx";
import Region from "../view/Regions/Region.jsx";


const router = createBrowserRouter([

    {
        path : '/',
        element : <Home />
    },
    {
        path : '/region/:regionId',
        element : <Region />
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
        path : '/activities',
        element : <Activities />,
    },
    {
        path : '/CapriBoatTourFromSorrento',
        element : <CapriBoat />
    },
    {
        path : '/SightseeingNaples',
        element : <SightseeingNaples />
    },
    {
        path : '/LearnHistory',
        element : <LearnHistory />
    },
    {
        path : '/WineAndCheese',
        element : <WineAndCheeseTour />
    },
    {
        path: '/testimonial/:name',
        element: <TestimonialPage />
    },
    {
        path: '/villa/book/:name',
        element: <VillabookPage />
    },
    {
        path: '/villa/details/:name',
        element: <VillaDetailsPage />
    }

])

export default router;

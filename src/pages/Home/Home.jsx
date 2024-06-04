import Benar from "./Baner/Benar";
import ClassRetinCart from "./BistroBoss/Description.jsx";
import CallUs from "./CallUs/CallUs";

import FoddCategory from "./Category/FoddCategory";
import Fichard from "./Ficurd/Fichard";
import Pupoermenu from "./Pupolermenu/OurTeachers.jsx";
import TESTIMONIALS from "./Testimonilias/Testimonials.jsx";

import { Helmet, } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Benar></Benar>
            <FoddCategory></FoddCategory>
           <ClassRetinCart></ClassRetinCart>
            <Pupoermenu></Pupoermenu>
            <CallUs></CallUs>
            <Fichard></Fichard>
            <TESTIMONIALS></TESTIMONIALS>
            
        </div>
    );
  
};

export default Home;

import Marquee from "react-fast-marquee";
import 'swiper/css/pagination';
import 'swiper/css';
import sliad1 from "../../../assets/home/slide1.jpg"
import sliad2 from "../../../assets/home/slide2.jpg"
import sliad3 from "../../../assets/home/slide3.jpg"
import Sectionhedin from '../../../components/Sectionhedin';
const FoddCategory = () => {
    return (

     <section className="mt-10">
        <Sectionhedin
        sabheding={'---From 11:00am to 10:00pm---'}
        heding={'ORDER ONLINE'}
        ></Sectionhedin>
     <Marquee>
  <img src={sliad1} alt="" />
  <img src={sliad2} alt="" />
  <img src={sliad3} alt="" />


</Marquee>

    
     </section>
    );
};

export default FoddCategory;
import Sectionhedin from "../../../components/Sectionhedin";
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'
import Reviw from "./Reviw";

const Testimonials = () => {
    const [Reviws, setReviw] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviw(data));
    }, [])

    return (
        <section className="my-20">
            <Sectionhedin
                sabheding={'---What Our Clients Say---'}
                heding={'ALL  Courses'}
            ></Sectionhedin>
          <div className="grid  lg:grid-cols-3">
          {
                Reviws.map(rivew => <Reviw key={rivew._id} rivew={rivew}></Reviw>)
            }
          </div>
        </section>
    );
};

export default Testimonials;
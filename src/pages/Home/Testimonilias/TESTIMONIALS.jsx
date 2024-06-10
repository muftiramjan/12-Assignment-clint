import Sectionhedin from "../../../components/Sectionhedin";
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'
import Reviw from "./Reviw";

const Testimonials = () => {
    const [Reviws, setReviw] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        fetch('https://12-assinmet-sarver.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                // Sort reviews by enrollment in descending order
                const sortedData = data.sort((a, b) => b.enrollment - a.enrollment);
                setReviw(sortedData);
            });
    }, [])

    const showMore = () => {
        setVisibleCount(Reviws.length);
    }

    return (
        <section className="my-20">
            <Sectionhedin
                sabheding={''}
                heding={'Corsses'}
            ></Sectionhedin>
            <div className="grid lg:grid-cols-3">
                {
                    Reviws.slice(0, visibleCount).map(rivew => <Reviw key={rivew._id} rivew={rivew}></Reviw>)
                }
            </div>
            {visibleCount < Reviws.length && (
                <div className="text-center mt-4">
                    <button onClick={showMore} className="btn btn-outline border-0 border-b-4 border-orange-400">Show More</button>
                </div>
            )}
        </section>
    );
};

export default Testimonials;
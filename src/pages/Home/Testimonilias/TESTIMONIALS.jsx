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
        fetch('http://localhost:5000/reviews')
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
                    <button onClick={showMore} className="bg-blue-500 text-white py-2 px-4 rounded">Show More</button>
                </div>
            )}
        </section>
    );
};

export default Testimonials;
import Sectionhedin from "../../../components/Sectionhedin";
import featured from "../../../assets/home/80.jpg"
import './Feartued.css'
const Fichard = () => {
    return (
        <div className="featurd-item w-full text-white pt-10 my-20 bg-fixed">
            <Sectionhedin
                sabheding={''}
                heding={'Get Your Quality'}
            ></Sectionhedin>
            <div className="md: flex justify-center items-center py-20 px-36 bg-opacity-40 bg-slate-300">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:  ml-10">
                    <h2>March 20, 2024</h2>
                    <h2 className="uppercase">Get Your Quality</h2>
                    <p>Come And Be Part Of Our Latest Session</p>
<button className="btn btn-outline border-0 border-b-4 mt-4">Apply now</button>
                </div>
            </div>
        </div>
    );
};

export default Fichard;
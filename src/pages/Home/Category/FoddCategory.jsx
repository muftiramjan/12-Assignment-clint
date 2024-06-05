
import Marquee from "react-fast-marquee";
import 'swiper/css/pagination';
import 'swiper/css';
import sliad1 from "../../../assets/home/40.jpg";
import sliad2 from "../../../assets/home/45.jpg";
import sliad3 from "../../../assets/home/46.jpg";
import sliad4 from "../../../assets/home/47.jpg";
import sliad5 from "../../../assets/home/48.jpg";
import sliad6 from "../../../assets/home/49.jpg";
import sliad7 from "../../../assets/home/50.jpg";
import sliad8 from "../../../assets/home/51.jpg";
import Sectionhedin from '../../../components/Sectionhedin';
import { useState } from "react";

const FoddCategory = () => {
    const [selectedDescription, setSelectedDescription] = useState('');

    const images = [
        {  src: sliad1, description: 
         "TechEd Solutions is at the forefront of educational technology, providing cutting-edge software and tools to enhance online learning experiences. Our partnership brings advanced digital classrooms and interactive learning modules to our platform, ensuring a seamless and engaging educational journey." },
        { src: sliad2, description: "LearnWell Institute is renowned for its innovative teaching methodologies and comprehensive curriculum development. Collaborating with LearnWell enables us to offer expertly crafted courses that cater to diverse learning needs and promote academic excellence." },
        { src: sliad3, description: "FutureSkills Academy specializes in skill-based learning and vocational training. Through our partnership, we deliver practical and industry-relevant courses that equip students with the skills needed for the modern workforce, bridging the gap between education and employment." },
        { src: sliad4, description: "EduTech Innovations is a leader in educational software and digital content creation. Our collaboration ensures that students and educators have access to high-quality, interactive educational materials, enhancing the learning experience across all subjects."},
        { src: sliad5, description: "Global Classroom Network connects educators and students worldwide through its extensive online platform. By partnering with them, we provide a global perspective on education, fostering cross-cultural learning and collaboration among our users." },
        { src: sliad6, description: "SkillMasters Inc. is dedicated to professional development and continuing education. Our partnership allows us to offer a wide range of certification programs and professional courses that help individuals advance in their careers and stay competitive in their fields." },
        { src: sliad7, description: "BrightFuture Tutoring Services offers personalized tutoring and mentoring programs. Collaborating with BrightFuture enables us to provide one-on-one support and customized learning plans, ensuring that each student receives the attention and guidance they need to succeed."},
        { src: sliad8, description: "NextGen Learning Hub focuses on integrating technology into education to create dynamic and interactive learning environments. Our partnership enhances our platform with innovative tools and resources that make learning more engaging and effective for students of all ages." }
    ];

    const handleImageClick = (description) => {
        setSelectedDescription(description);
    };

    return (
        <section className="">
            <Sectionhedin
                sabheding={'---From 11:00am to 10:00pm---'}
                heding={'partnership company'}
            ></Sectionhedin>
            <Marquee pauseOnClick={true} pauseOnHover={true} speed={50} >
                {images.map((image, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            className="w-96 h-80 p-4 mr-8 rounded-xl cursor-pointer"
                            src={image.src}
                            alt=""
                            onClick={() => handleImageClick(image.description)}
                        />
                    </div>
                ))}
            </Marquee>
            {selectedDescription &&  (
                <div className="mt-4 p-4 bg-black rounded-lg">
                    <p className='text-white'>{name}</p>
                    <p className='text-white'>{selectedDescription}</p>
                </div>
            )}
        </section>
    );
};

export default FoddCategory;

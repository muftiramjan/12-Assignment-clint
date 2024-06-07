import { Helmet } from "react-helmet-async";
import Ourmenucover from "../Home/shared/over/Ourmenucover";
import Ourmenucoverr from "../../assets/home/60.jpg"
import UseMenu from "../../Hoks/usehoks/UseMenu";
import Sectionhedin from "../../components/Sectionhedin";
import Menucatgory from "./Menucetagory/Menucatgory";
import dessertimg from "../../assets/home/61.jpg"
import pizzaimg from "../../assets/home/63.jpg"
import saladimg from "../../assets/home/64.jpg"
import soupimg from "../../assets/home/65.jpg"

const Menu = () => {
    const [menus]=UseMenu();
    const Math = menus.filter(item => item.category === 'Math')
    const Language = menus.filter(item => item.category === 'Language')
    const Library = menus.filter(item => item.category === 'Library')
    const French = menus.filter(item => item.category === 'French')
    const MusicProgram = menus.filter(item => item.category === 'MusicProgram')
    return (
        <div> 
           <Helmet><title>All classes</title></Helmet>
            {/* main cover */}
           <Ourmenucover img={Ourmenucoverr}title={"ALL classes"}></Ourmenucover>

          <Sectionhedin heding="Music Program" sabheding="-----Don't miss-----"></Sectionhedin>
            {/* offered menu items */}
          <Menucatgory items={MusicProgram}></Menucatgory>
          {/* dessert menu items */}
          <Menucatgory items={Math} title="Math" img={dessertimg}></Menucatgory>
          <Menucatgory items={French} title="French" img={pizzaimg}></Menucatgory>
          <Menucatgory items={Language} title="Language" img={saladimg}></Menucatgory>
          <Menucatgory items={Library} title="Library" img={soupimg}></Menucatgory>
        </div>
    );
};

export default Menu;
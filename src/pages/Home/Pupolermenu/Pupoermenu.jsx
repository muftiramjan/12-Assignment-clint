
import Sectionhedin from "../../../components/Sectionhedin";
import Menuitems from "../shared/Menuitems";
import UseMenu from "../../../Hoks/usehoks/UseMenu";

const Pupoermenu = () => {
    const [menus]=UseMenu();
    const pupoler = menus.filter(item => item.category === 'Math')
    
    return (
        <section className="mb-8 mt-10">
            <Sectionhedin
             sabheding={''}
             heding={'Our Teachers'}
            ></Sectionhedin>
            <div className="grid md: grid-cols-2 gap-10 bg-orange-50 p-5">
                {
                    pupoler.map( item => <Menuitems
                    key={item._data}
                    item={item}
                    ></Menuitems>)
                    
                }
                
            </div>
          
        </section>
      
    );
};

export default Pupoermenu;
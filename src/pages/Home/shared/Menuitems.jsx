import PropTypes from 'prop-types';

const Menuitems = ({item}) => {
    const {name,recipe,image,podhovi}=item;
    return (
       <>
        <div className='flex space-x-4'>
            <img className='w-80' src={image} alt="" />
            <div  className='space-y-5 text-center'>
                <h2 className='text-center text-blue-600 font-bold text-2xl'>----{name}----</h2>
                <p className='text-xl'>{recipe}</p>
            <p className='text-green-400'>{podhovi}</p>
            <div className="flex items-center justify-center mt-5">
           <button className="btn btn-outline border-0 border-b-4 ">start teaching today</button>
           </div>
            </div>
            
        </div>
       </>
    );
};
Menuitems.propTypes = {
    item: PropTypes.object
};
export default Menuitems;
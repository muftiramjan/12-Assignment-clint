
import PropTypes from 'prop-types';

const Reviw = ({rivew}) => {
    const {title,
        instructor,
        image,
        price,
        total_enrollment,description}=rivew;
    return (
    <div className='bg-sky-950 p-4 rounded-2xl ml-3 mt-3'>
            <div className="card w-96  shadow-md">
            <figure><img className='w-96 h-80 rounded-xl' src={image}alt="Shoes" /></figure>
            <div className="card-body bg-sky-50">
                <h2 className="card-title">{title}</h2>
                <h2 className="card-title ">{instructor}</h2>
                <h2 className="card-title">{price}</h2>
                <h2 className="card-title">{total_enrollment}</h2>
                <h2 className="card-title">{description}</h2>
                <div className="card-actions ">
                    <button className="btn btn-outline border-b-4">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
    );
};
Reviw.propTypes = {
    rivew: PropTypes.bool
  };
export default Reviw;
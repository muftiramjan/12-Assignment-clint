import PropTypes from 'prop-types';
const Sectionhedin = ({ heding, sabheding }) => {
    
    return (
        <div className='w-3/12 mx-auto text-center mb-4 bg-lime-400'>
            <p className=' mb-2'>{sabheding}</p>
            <p className='text-2xl uppercase border-y-4 p-3'>{heding}</p>
        </div>
    );
};
Sectionhedin.propTypes = {
    heding: PropTypes.object
};
Sectionhedin.propTypes = {
    sabheding: PropTypes.object
};
export default Sectionhedin;
import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center md:w-3/12 mx-auto my-5'>
            <p className='text-[#D99904] text-xl '>{subHeading}</p>
            <h3 className='text-4xl mt-5  uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
};


SectionTitle.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;

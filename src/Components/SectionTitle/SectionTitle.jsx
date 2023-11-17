import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center md:w-[40%] mx-auto my-5 w-full ">
      <p className="text-[#D99904] text-sm lg:text-xl ">{subHeading}</p>
      <h3 className="text-lg lg:text-3xl mt-5  uppercase border-y-4 py-4 w-full  ">
        {heading}
      </h3>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;

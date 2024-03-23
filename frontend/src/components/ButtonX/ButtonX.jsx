import PropTypes from 'prop-types';

const ButtonX = ({ Details }) => {
   return (
      <button className="bg-[#0057FF] hover:bg-[#000D85] text-[#FFFFFF] font-bold rounded-lg px-3 py-1">
         {Details}
      </button>
   );
};

ButtonX.propTypes = {
   Details: PropTypes.string.isRequired
};

export default ButtonX;

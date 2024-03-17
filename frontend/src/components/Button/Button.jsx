import PropTypes from 'prop-types';

const Button = ({ Details }) => {
   return (
      <button className="bg-[#0057FF] hover:bg-[#000D85] text-[#FFFFFF] font-bold py-2 px-16 rounded-full">
         {Details}
      </button>
   );
};

Button.propTypes = {
   Details: PropTypes.string.isRequired
};

export default Button;

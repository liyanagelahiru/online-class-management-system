import PropTypes from 'prop-types';

const Button = ({ text }) => {
   return (
      <button
         type="submit"
         className="bg-[#0057FF] hover:bg-[#000D85] text-[#FFFFFF] font-bold py-2 px-16 rounded-full">
         {text}
      </button>
   );
};

Button.propTypes = {
   text: PropTypes.number.isRequired
};

export default Button;

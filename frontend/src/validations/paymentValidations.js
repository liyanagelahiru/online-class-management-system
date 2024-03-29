// Context: To validate the payment form
export const validatePayment = async values => {
   const errors = {};
   if (!values.enrolledCourse) {
      errors.enrolledCourse = 'Course Name is required';
   }
};

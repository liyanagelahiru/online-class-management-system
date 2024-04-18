import PaymentButton from '../../components/Buttons/PymentButton';

const Theory = () => {
   return (
      <div>
         Theory
         <div className="w-full">
            <PaymentButton
               cName={'Grade 12 Theory Class'}
               price={2000.0}
               offer={200.0}
               pathname={'/theory/grade-12'}
            />
         </div>
      </div>
   );
};

export default Theory;

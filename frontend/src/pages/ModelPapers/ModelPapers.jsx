import PaymentButton from '../../components/Buttons/PymentButton';

const ModelPapers = () => {
   return (
      <div>
         <div className="p-4">
            <PaymentButton
               btnText="Pay Now"
               cName={'Model Papers'}
               price={1000.0}
               offer={100.0}
            />
         </div>
      </div>
   );
};

export default ModelPapers;

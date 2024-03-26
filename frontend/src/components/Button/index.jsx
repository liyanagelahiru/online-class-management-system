import Button from './Button';

const index = () => {
   return <Button />;
};

export default index;

const Index = () => {
   return (
      <div>
         <Button />
      </div>
   );
};

const Button2 = () => {
   return (
      <div>
         <button>Button 2</button>
      </div>
   );
};

export { Index, Button2 };

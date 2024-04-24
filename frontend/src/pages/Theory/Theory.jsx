import EnrollmentCard from '../../components/Card/EnrollmentCard';
import CardImg_1 from '../../assets/images/card-image-01.png';

const Theory = () => {
   return (
      <div className="body-content">
         <div className="font-semibold text-3xl my-5">Theory Classes</div>
         <div>
            <EnrollmentCard
               image={CardImg_1}
               header="Grade 12"
               description="You can aaccess grade 12 theory contents here"
               cName="Grade 12 - Theory"
               price={1000}
               offer={200}
               pathname="/theory/grade-12"
            />
         </div>
      </div>
   );
};

export default Theory;

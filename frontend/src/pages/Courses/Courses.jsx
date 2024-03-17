import CourseImg from '../../assets/images/course-page.png';
import CardImg1 from '../../assets/images/card-image-01.png';
import { Card } from '../../components';

const Courses = () => {
   return (
      <div>
         <div className="h-[calc(100vh-70px)] w-full">
            <img src={CourseImg} alt="course" className="h-full w-full" />
         </div>
         <div className="w-full h-[calc(100vh-70px)] bg-blue-500 items-center justify-center px-12 py-10">
            <div className="grid grid-cols-4 gap-7">
               <Card
                  image={CardImg1}
                  header="Theory"
                  description="Description for Theory"
                  navTo="/theory"
               />
               <Card
                  image={CardImg1}
                  header="Revision"
                  description=""
                  navTo="/revision"
               />
               <Card
                  image={CardImg1}
                  header="Online Exam"
                  description=""
                  navTo="/onlineexam"
               />
               <Card
                  image={CardImg1}
                  header="Model Papers"
                  description=""
                  navTo="/modelpapers"
               />
            </div>
         </div>
      </div>
   );
};

export default Courses;

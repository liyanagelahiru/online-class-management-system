import TeacherDashImg from '../../../assets/images/TeacherDashboard.png';
import Dashcard from '../../../components/Card/DashBoardCard';
const Dashboard = () => {
   return (
      <div>
         <div>
            <img
               src={TeacherDashImg}
               alt="teacher-dashboard"
               className="h-full w-full"
            />
         </div>
         <Dashcard />
         <Dashcard />
         <Dashcard />
         <Dashcard />
      </div>
   );
};

export default Dashboard;

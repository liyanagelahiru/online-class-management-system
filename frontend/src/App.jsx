import AppRoutes from './routes/AppRoutes';
import Dash from './components/chat/dash';
import Options from './components/chat/options';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Dashstd from './components/chat/Dashstd';
function App() {
   return (
      <div className="App main-content">
         <Dash></Dash>
         {/* <Dashstd></Dashstd> */}
         {/* <Options></Options> */}
      </div>
   );
}

export default App;

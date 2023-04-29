import './App.css';
import MainPage from './Components/MainPage/MainPage';
import OurMerits from './Components/OurMerits/OurMerits';
import Setings from './Components/Setings/Setings';
import Map from './Components/Map/Map';
import Feedbacks from './Components/Feedbacks/Feedbacks';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <MainPage/>
      <OurMerits/>
      <Setings/>
      <Map/>
      <Feedbacks />
      <Footer/>
    </div>
  );
}

export default App;
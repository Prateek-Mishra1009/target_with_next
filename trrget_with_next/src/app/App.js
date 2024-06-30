import './App.css';


// import mainContent from './MainContent';
import Courses from './Courses';
import Footer from './Footer';
import Header from './Header';
import CardCarousel from './cardCarousel';


function App() {

  
  return (
    <div className="App">
    <h1>Rendering APp</h1>
      <mainContent />
     <Header/>
     <h1 style={{textAlign:'center',color:'red',font:'bold'}}>Videos</h1>
     <CardCarousel/>
     <h1 style={{textAlign:'center',color:'red',font:'bold'}}>Courses</h1>
     <Courses />
     <Footer />
    </div>
  );
}

export default App;

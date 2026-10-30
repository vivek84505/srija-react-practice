
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Counter from './components/Counter';
import Users from './components/Users';
import "./Assignments/practice.js";
import ShowHideText from './Assignments/ShowHideText';
import LiveName from './Assignments/LiveName';
import photo from './photo.jpeg';
import video from './video.mov'
import Form from './Assignments/form';

function App() {

  
  
  return (
    <div className="App">
       
        {/* <Header/>        
        <Footer/>
        <Content/>
        <Sidebar/> */}

        {/* <Counter/> */}
        {/* <Users/> */}
        {/* <ShowHideText/> */}
        {/* <LiveName/> */}
      <h1 style={{ color: "Red" }}>PetCare Center</h1>
      <img src={photo} alt="Pet" width={300} height={300} />
      <video autoPlay muted loop width="250" height="300"src={video} >
      </video>
      <Form/>
      <table border="1">
        <thead>
          <tr>
            <th colSpan={2}>LIFESPAN</th>
          </tr>
          <tr>
            <th>Plants</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >Money plant</td>
            <td rowSpan={2}>10yrs</td>
          </tr>
          <tr>
            <td>Sunflower</td>
          </tr>
          <tr>
            <td>Rose</td>
            <td>5 yrs</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default App;

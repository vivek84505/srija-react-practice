
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Counter from './components/Counter';
import Users from './components/Users';
import FormComponent from './components/FormComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventDemo from './components/EventDemo';
import ListDemo from './components/ListDemo';
import RefDemo from './components/RefDemo';
import Dashboard from './components/Dashboard';
import { Routes,Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import FragementDemo from './components/FragementDemo';

function App() {

  
  
  return (
    <div className="App">
       
       <Header/>  
        <div className='main-layout'>
            <Sidebar/>
 
            {/* Content Area Start */}
            <div className='content'>

              <Routes>
                <Route path="/" element={<Dashboard/>} /> 
                <Route path="/refs" element={<RefDemo/>} /> 
                <Route path="/users" element={<UserList/>}/>
                <Route path="/students/:id" element={<UserDetails/>}/>
                <Route path="/fragement" element={<FragementDemo/> }/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>


            </div>

 
           {/* Content Area End */}

      
        </div>
        <Footer/>
        {/*       
       
        <Content/>
        <Sidebar/> */}

        {/* <Counter/> */}
        {/* <Users/> */}
        {/* <FormComponent/> */}
        {/* <EventDemo/> */}
        {/* <ListDemo/> */}
        {/* <RefDemo/> */}
          
    </div>
  );
}

export default App;

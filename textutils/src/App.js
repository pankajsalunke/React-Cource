import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Student from './components/Student';
function App() {
  return (
    <>
        {/* <Navbar title="TextUtils" aboutText="About US" /> */}
        {/* <Navbar /> */}
        {/* <Navbar title="TextUtils"  /> */}
        {/* <div className="container">
          <TextForm heading="Enter the text to analyze below"/>
          <About/>
        </div> */}
        
        <Student name="Pankaj" age={22} isStudent = {true}/>
        <Student name="Sham" age={21} isStudent = {false}/>
        <Student />
        <Student />
        
    </>
  );
}

export default App;

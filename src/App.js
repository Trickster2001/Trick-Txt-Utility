import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';


function App() {

  // const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }

  // const toggleMode = ()=>{
  //   if(mode === "light"){
  //     setMode("dark");
  //     // document.body.style.backgroundColor = "#343a40"
  //     // document.body.style.color = "white"
  //     showAlert("Dark mode enabled", "success")
  //   }
  //   else{
  //     setMode("light");
  //     // document.body.style.backgroundColor = "white"
  //     // document.body.style.color = "black"
  //     showAlert("Light Mode enabled", "success")
  //   }
  // }

  return (
    <>
      <Navbar title="TrickTextUtils" about="About TextUtils"/>    
      <div className='sticky top-20 z-10' >
      <Alert alert={alert}/>
      </div>
      <TextForm showAlert={showAlert}/>
    </>
  );
}

export default App;

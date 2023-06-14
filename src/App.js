import React from "react";
import '../../my-app/src/App.css'
import profile from '../../my-app/src/assets/WhatsApp Image 2023-06-14 at 12.28.21 PM (1).jpeg'
import icon from '../../my-app/src/assets/WhatsApp Image 2023-06-14 at 12.28.21 PM (2).jpeg'
import rating from '../../my-app/src/assets/star.png'
import logo from '../../my-app/src/assets/WhatsApp Image 2023-06-14 at 12.28.20 PM.jpeg'
import googlelogo from '../../my-app/src/assets/WhatsApp Image 2023-06-14 at 12.28.21 PM.jpeg'

function App() {
  return (
    <>
    
    <div className="profiles">
    <img src={logo} className="w-18 h-6 absolute top-0" alt="" />
       <div className=" items-center relative  flex h-2/4 m-auto flex-col ">
       
      <p className=" text-2xl font-bold text-center w-96 mb-5  ">We've been Untitled to kick start every new project and can't  imagine working without it.</p>
      <img  className="w-10 h-10 rounded-3xl" src={profile} alt="/" />
      <img className="w-5 h-5 ml-7 -mt-3 rounded-2xl " src={icon} alt="/" />
      <p className=" font-bold mb-1 mt-1">Kelly Williams</p>
      <p>Head of Design, Layers</p>
      <div className=" flex flex-row gap-2 mt-1">
        <img src={rating} alt="/" />
        <img src={rating} alt="/" />
        <img src={rating} alt="/" />
        <img src={rating} alt="/" />
        <img src={rating} alt="/" />
        </div>
      
     </div>
    </div>
    <div className="profiles2 ">
      <div className=" gap-4 items-right relative  flex h-3/4 m-auto flex-col bg-white">
        <p className=" font-bold text-3xl ">Login to Your account</p>
        <small className=" leading-10 opacity-50">Set your 30-days free trail.</small>
        <p className=" font-semibold opacity-75 text-sm">Email*</p>
        <input className="txt" type="text" placeholder="Enter your name" />
        <p className=" font-semibold opacity-75 text-sm">Password*</p>
        <input className="txt" type="text" placeholder="Enter your password" />
        <button className="bg-green-600 h-10 rounded-lg text-white border-current ">Sign in</button>
        <button className="btn2  rounded-lg h-10 pl-5  ">Sign in with Google
          <img src={googlelogo} alt="/" className="w-6 h-6 -mt-6 ml-16" />
           </button>
        <span className=" w-52  gap-0">Already have an account?</span>
        <a className="relative -top-10 text-base pl-1 ml-52" href="/">Log in</a>
        

      </div>

    </div>
    

</>
  );
}

export default App;

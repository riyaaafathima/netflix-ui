import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignIn,setIsSignIn]=useState(true)

    const toggleSignIn=()=>{
      setIsSignIn(!isSignIn)
    }
  return (
    <div className="relative w-full h-screen">
      {/* {header} */}
      <Header />
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg"
          alt="bg"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>
      {/* login Form */}
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 p-10 rounded-md w-full max-w-md text-white">
        <h2 className=" text-3xl font-bold mb-6 text-center">{isSignIn? 'Sign In': 'Sign Up'}</h2>
        {!isSignIn && <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 bg-gray-800 rounded text-white focus:outline-none"
        />}
        <input
          type="text"
          placeholder="Email or phone number"
          className="w-full p-3 mb-4 bg-gray-800 rounded text-white focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 bg-gray-800 rounded text-white focus:outline-none"
        />
        <button  
        onClick={toggleSignIn}
        className="w-full p-3 cursor-pointer bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold mb-4">
         {isSignIn? 'Sign In' : 'Sign Up'}
        </button>
        <div className=" flex justify-between text-sm text-gray-400">
          {/* <label>
                <input type="checkbox" className="mr-2"/>
                Remember me
            </label> */}
        </div>
        <div className=" flex justify-between items-center text-sm text-white py-8">
  <p className="cursor-pointer" onClick={toggleSignIn}>
   {  isSignIn? 'New to Netflix?Sign Up Now':'Already Registered Sign In Now'}
  </p>
  <a href="#" className="hover:underline">
    Need Help?
  </a>
</div>
      </form>
    </div>
  );
};

export default Login;

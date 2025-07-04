import { useState, useRef } from "react";
import Header from "./Header";
import checkValidateData from "../Utils/validate";
import {ICON} from '../Utils/constants'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../Utils/userSlice";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    const emailValue = email.current?.value || "";
    const passwordValue = password.current?.value || "";
    const message = checkValidateData(emailValue, passwordValue);
    setError(message);

    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value||"",
            photoURL:ICON
          })
           .then(() => {
              const currentUser = auth.currentUser;
              if (currentUser) {
                const { uid, email, displayName, photoURL } = currentUser;
                dispatch(
                  addUser({
                    uid: uid || "",
                    email: email || "",
                    displayName: displayName || "",
                    photoURL: photoURL || "",
                  })
                );            }
          })
          .catch((error)=>{
             setError(error.message)
          })
          console.log("signed up", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "_" + errorMessage);
        });
    } else {
      // signIn logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 p-10 rounded-md w-full max-w-md text-white"
      >
        <h2 className=" text-3xl font-bold mb-6 text-center">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="w-full p-3 mb-4 bg-gray-800 rounded text-white focus:outline-none"
          />
        )}
        <input
          ref={email}
          type="text"
          autoComplete="current-email"
          placeholder="Email or phone number"
          className="w-full p-3 mb-4 bg-gray-800 rounded text-white focus:outline-none"
        />
        {/* <p className="text-red-800 pb-5">{error}</p> */}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          className="w-full p-3 mb-4 bg-gray-800 rounded text-white focus:outline-none"
        />
        <p className="text-red-800 pb-5">{error}</p>

        <button
          onClick={handleButtonClick}
          className="w-full p-3 cursor-pointer bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold mb-4"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className=" flex justify-between text-sm text-gray-400">
          {/* <label>
                <input type="checkbox" className="mr-2"/>
                Remember me
            </label> */}
        </div>
        <div className=" flex justify-between items-center text-sm text-white py-8">
          <p className="cursor-pointer" onClick={toggleSignIn}>
            {isSignIn
              ? "New to Netflix?Sign Up Now"
              : "Already Registered Sign In Now"}
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

import { signOut } from "firebase/auth";
import {LOGO,ICON} from '../Utils/constants'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../Utils/appStore"
import {  onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Utils/userSlice";
const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const user=useSelector((store:RootState)=>store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
       navigate('/error')
      });
  };

   useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
  
    // unsubscribe when the component unmounts  
    return ()=>unsubscribe()
  }, []);
  return (
    <div className="absolute top-0 left-0 px-8 py-4 w-full z-50 bg-gradient-to-b from-black/80 flex justify-between">
      <img
        className="w-[160px] h-auto mt-[2vh] ml-[15vh]"
        src={LOGO}
        alt="Netflix Logo"
      />
    {user&&(<div className="flex p-2">
        <div className="w-12 h-12 rounded flex items-center justify-center">
           <img
        
        src={ICON}
        alt="Netflix Logo"
      />
        </div>
        <button onClick={handleSignOut} className="font-bold text-white ">
          (signOut)
        </button>
      </div>)}
    </div>
  );
};

export default Header;

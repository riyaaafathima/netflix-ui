import { signOut } from "firebase/auth";
import { LOGO, ICON, SUPPORTED_LANGS } from "../Utils/constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../Utils/appStore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Utils/userSlice";
import { toggleGptView } from "../Utils/gptSlice";
import lang from "../Utils/languagrConstant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector(
    (store: RootState) => store.gpt.showGptSearch
  );
  const user = useSelector((store: RootState) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);

        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //toggle GPT search
    dispatch(toggleGptView());
  };
  return (
    <div className="absolute top-0 left-0 px-8 py-4 w-full z-50 bg-gradient-to-b from-black/80 flex justify-between">
      <img
        className="w-[160px] h-auto mt-[2vh] ml-[15vh]"
        src={LOGO}
        alt="Netflix Logo"
      />
      {user && (
        <div className="flex p-2">
          <select className="p-2 m-4 bg-gray-900 text-white" name="down-lang" id="">
            {SUPPORTED_LANGS.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleGptSearchClick}
            className="p-2 px-5 bg-orange-400 mr-5 rounded-lg text-md text-white"
          >
            {showGptSearch ? " GPT Search" : "Home"}
          </button>
          <button
            onClick={() => navigate("/watchlist")}
            className="p-2 px-5 bg-amber-400 mr-5 rounded-lg text-md text-white"
          >
            Watch list
          </button>

          <div className="w-12 h-12 rounded flex items-center justify-center">
            <img src={ICON} alt="Netflix Logo" />
          </div>
          <button onClick={handleSignOut} className="font-bold text-white ">
            (signOut)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

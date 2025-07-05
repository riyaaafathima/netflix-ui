import { APP_BG } from "../Utils/constants"
import GptSearchBar from "./GptSearchBar"
const GptSearch=()=> {
  return (
    <div>

          <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={APP_BG}
          alt="bg"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>
              <GptSearchBar/>

    </div>
  )
}

export default GptSearch

import lang from '../Utils/languagrConstant'

const GptSearchBar = () => {
  return (
    <div className="pt-[20%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12  ">
        <input
          type="text"
          className="  p-4 m-4 col-span-9  bg-white "
          placeholder={lang.hindi.gptSearchPlaceholder}
        />
        <button className=  "col-span-3 bg-red-700 rounded-lg text-white font-bold px-4 p-2 m-4 ">
               {lang.hindi.search}       
  </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

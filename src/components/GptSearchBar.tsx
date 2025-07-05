const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" bg-black w-1/2 grid-cols-12">
        <input
          type="text"
          className="  p-4 m-4 col-span-9 w-40erm rounded-3xl bg-white "
          placeholder="what would you like to watch today?"
        />
        <button className=  "col-span-3 bg-red-700 rounded-lg text-white font-bold px-4 p-2 m-4 ">
          search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

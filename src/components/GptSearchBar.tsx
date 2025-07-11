const GptSearchBar = () => {
  return (
    <div className="pt-[20%] flex justify-center">
      <form className="flex flex-col sm:flex-row gap-4">
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

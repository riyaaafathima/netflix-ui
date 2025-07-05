
type VideoTitleProps = {
  title: string;
  overview: string;
};

function VideoTitle({title,overview}:VideoTitleProps) {
 return (
    <div className="pt-[25%] px-20 text-white w-full">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/2 font-medium">{overview}</p>
      <div className="mt-4">
        <button className="rounded-lg bg-white text-black px-10 py-3 text-lg font-semibold hover:bg-gray-300 transition">
          ▶ Play
        </button>
        <button className="ml-3 rounded-lg bg-white/30 text-white px-10 py-3 text-lg font-semibold hover:bg-white/50 transition">
          ⨁ More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle

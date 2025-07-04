
type VideoTitleProps = {
  title: string;
  overview: string;
};

function VideoTitle({title,overview}:VideoTitleProps) {
  return (
    <div className="w-screen aspect-video absolute top-0 left-0  pt-[25%] px-20 text-white bg-gradient-to-r from-black z-10">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-m w-1/2 font-medium">{overview}</p>
      <div className="my-4">
  <button className="rounded-lg bg-white text-black px-10 py-3 text-lg font-semibold hover:bg-gray-300  transition cursor-pointer">
    ▶ Play
  </button> 
 <button className="mx-3 rounded-lg bg-black/50 text-white px-10 py-3 text-lg font-semibold hover:bg-gray-800 transition cursor-pointer">
    ⨁ More Info
  </button>
        </div>
    </div>
  );
}

export default VideoTitle

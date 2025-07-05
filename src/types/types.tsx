export type Movie = {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average:number;
};

export type Video = {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
};
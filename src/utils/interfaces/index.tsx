export interface IMovie {
  id: number;
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  genre_ids: number[];
  title: string;
  overview: string;
  release_date: Date;
  vote_average: number;
  vote_count: number;
}

export interface IMovieDetails {
  id: number;
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  genres: [{ id: number; name: string }];
  original_title: string;
  overview: string;
  release_date: Date;
  vote_average: number;
  vote_count: number;
  runtime: number;
  tagline: string;
  popularity: number;
  budget: number;
}

export interface ImageConfig {
  change_keys: string[];
  images: {
    backdrop_sizes: string[];
    base_url: string;
    secure_base_url: string;
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    stiller_sizes: string[];
  };
}

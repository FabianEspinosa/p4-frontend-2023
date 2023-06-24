import { useEffect, useState } from "react";
import { MovieAPI } from '../../typings'
import '../assets/movies.scss';
import MoviesCategory from "./MoviesCategory";
import requests from '../../utils/requests';

export default function Movies() {
    const [moviesNetflix, setMoviesNetflix] = useState<MovieAPI[] | null>(null);
    const [moviesTrendingNow, setMoviesTrendingNow] = useState<MovieAPI[] | null>(null);
    const [moviesTopRated, setMoviesTopRated] = useState<MovieAPI[] | null>(null);
    const [moviesActionMovies, setMoviesActionMovies] = useState<MovieAPI[] | null>(null);
    const [moviesComedyMovies, setMoviesComedyMovies] = useState<MovieAPI[] | null>(null);
    const [moviesHorrorMovies, setMoviesHorrorMovies] = useState<MovieAPI[] | null>(null);
    const [moviesRomanceMovies, setMoviesRomanceMovies] = useState<MovieAPI[] | null>(null);
    const [moviesDocumentaries, setMoviesDocumentaries] = useState<MovieAPI[] | null>(null);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        const [
            netflixOriginals,
            trendingNow,
            topRated,
            actionMovies,
            comedyMovies,
            horrorMovies,
            romanceMovies,
            documentaries
        ] = await Promise.all([
            fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
            fetch(requests.fetchTrending).then((res) => res.json()),
            fetch(requests.fetchTopRated).then((res) => res.json()),
            fetch(requests.fetchActionMovies).then((res) => res.json()),
            fetch(requests.fetchComedyMovies).then((res) => res.json()),
            fetch(requests.fetchHorrorMovies).then((res) => res.json()),
            fetch(requests.fetchRomanceMovies).then((res) => res.json()),
            fetch(requests.fetchDocumentaries).then((res) => res.json())
        ])
        setMoviesNetflix(netflixOriginals.results)
        setMoviesTrendingNow(trendingNow.results)
        setMoviesTopRated(topRated.results)
        setMoviesActionMovies(actionMovies.results)
        setMoviesComedyMovies(comedyMovies.results)
        setMoviesHorrorMovies(horrorMovies.results)
        setMoviesRomanceMovies(romanceMovies.results)
        setMoviesDocumentaries(documentaries.results)
    };

    return (
        <div className="movies">
            <MoviesCategory movies={moviesNetflix} categoryTitle="Netflix Originals"></MoviesCategory>
            <MoviesCategory movies={moviesTrendingNow} categoryTitle="Trending Now"></MoviesCategory>
            <MoviesCategory movies={moviesTopRated} categoryTitle="Top Rated"></MoviesCategory>
            <MoviesCategory movies={moviesActionMovies} categoryTitle="Action Movies"></MoviesCategory>
            <MoviesCategory movies={moviesComedyMovies} categoryTitle="Comedy Movies"></MoviesCategory>
            <MoviesCategory movies={moviesHorrorMovies} categoryTitle="Horror Movies"></MoviesCategory>
            <MoviesCategory movies={moviesRomanceMovies} categoryTitle="Romance Movies"></MoviesCategory>
            <MoviesCategory movies={moviesDocumentaries} categoryTitle="Documentaries"></MoviesCategory>
        </div>
    );
}
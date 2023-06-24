import { useEffect, useState } from "react";
import { MovieAPI } from '../../typings'
import MovieCard from "./MovieCard";
import '../assets/movies.scss';
import NoMovies from "./NoMovies";
import requests from '../../utils/requests';

export default function Movies() {
    const [movies, setMovies] = useState<MovieAPI[] | null>(null);

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
        setMovies(netflixOriginals.results)
        return {
            props: {
                netflixOriginals: netflixOriginals.results,
                trendingNow: trendingNow.results,
                topRated: topRated.results,
                actionMovies: actionMovies.results,
                comedyMovies: comedyMovies.results,
                horrorMovies: horrorMovies.results,
                romanceMovies: romanceMovies.results,
                documentaries: documentaries.results
            }
        }
    };

    return (
        <div className="movies">
            <div className="movies-options">
            </div>
            <div className="movies-container">
                {movies ? (
                    Object.keys(movies).length !== 0 ? (
                        movies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    ) : (
                        <NoMovies></NoMovies>
                    )

                ) : (
                    <NoMovies></NoMovies>
                )}
            </div>
        </div>
    );
}
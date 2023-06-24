import MovieCard from "./MovieCard";
import NoMovies from "./NoMovies";
import { MovieAPI } from '../../typings'

interface props {
    movies: MovieAPI[] | null
}

function MoviesContainer({ movies }: props) {
    return (
        <>
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
        </>
    )
}

export default MoviesContainer
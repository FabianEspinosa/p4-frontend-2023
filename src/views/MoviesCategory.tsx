import { MovieAPI } from '../../typings'
import MoviesContainer from "./MoviesContainer";

interface props {
    movies: MovieAPI[] | null,
    categoryTitle: string,
}


function MoviesCategory({ movies, categoryTitle }: props) {
    return (
        <div>   <h1 style={{ color: "white" }}>
             {categoryTitle}
        </h1>
            <div className="movies-container">
                <MoviesContainer movies={movies}></MoviesContainer>
            </div></div>
    )
}

export default MoviesCategory

MoviesCategory.defaultProps = {
    categoryTitle: 'Peliculas grandiosas',
};

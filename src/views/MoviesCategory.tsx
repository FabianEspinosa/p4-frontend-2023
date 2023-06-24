import { MovieAPI } from '../../typings'
import MoviesContainer from "./MoviesContainer";
import TitleStytle from './TitleStytle';

interface props {
    movies: MovieAPI[] | null,
    categoryTitle: string,
}


function MoviesCategory({ movies, categoryTitle }: props) {
    return (
        <>
            <TitleStytle titleText={categoryTitle}></TitleStytle>
            <div className="movies-container">
                <MoviesContainer movies={movies}></MoviesContainer>
            </div>
        </>
    )
}

export default MoviesCategory

MoviesCategory.defaultProps = {
    categoryTitle: 'Peliculas grandiosas',
};

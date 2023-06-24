import { XCircleIcon } from '@heroicons/react/solid';
import { useState } from 'react'
import { MovieAPI } from '../../typings'

interface props {
    movie: MovieAPI
}

function MovieCard({ movie }: props) {
    const [selectedMovie, setSelectedMovie] = useState<MovieAPI | null>(null);
    const handleClick = (movie: MovieAPI) => {
        setSelectedMovie(movie);
    };
    const style = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
    };
    return (
        <>
            <div onClick={() => handleClick(movie)} className="card movie-card">
                <div className="card2" style={style}>
                    <div className='data-cont'>
                        <div className="title">{movie.title}</div>
                        <div className="release-date">{movie.release_date}</div>
                    </div>
                </div>
            </div>
            {selectedMovie && (
                <div className='modal-container'>
                    <div className="modal" style={style}>
                        <div className="modal-content">
                            <div className='actions'>
                                <XCircleIcon onClick={() => setSelectedMovie(null)} style={{ cursor: "pointer", width: "25px", height: "25px", marginRight: "5px" }} color="#0f0e17a4">
                                </XCircleIcon>
                            </div>
                            <div className='data-movie'>
                                <div className="title">{movie.title}</div>
                                <div className="release-date">{movie.release_date}</div>
                                <div className="description">{movie.overview}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MovieCard
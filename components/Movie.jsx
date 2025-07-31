const Movie =({data})=>{
   const {poster_path , title , release_date,vote_average } = data
    return(
        <div className="movie">
            <img src= {`https://image.tmdb.org/t/p/w500${poster_path}`} />
               <p>{title}</p>
               <p>Year: {release_date}</p>
                <p>Rating: {Math.round(vote_average)}</p>
        </div>
    )
}
export default Movie;
import { Link } from 'react-router-dom'

const MovieDetail = ({movie1}) => {
  return (
    <div className="movieItem">
<div>
    
<img src={movie1.Poster !== "N/A" ? movie1.Poster : "https://via.placeholder.com/400"} />
</div>
<div className="movieItem-content">
<div className='back-link'>
    <Link to='/'>Go Back</Link>
    </div>
<h3>{movie1.Title}</h3>
<p>{movie1.Type}</p>
<p>{movie1.Year}</p>
</div>
</div>
  )
}

export default MovieDetail
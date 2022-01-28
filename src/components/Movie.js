import propTypes from "prop-types";
import {Link} from "react-router-dom"
import styles from "./Movie.module.css"

function Movie({ id, coverImg, title, year, summary, genres, movie_style}) {
  if(coverImg === "") return null;

  return (
    <div className={styles.movie} style={movie_style}>
      <img src={coverImg} alt="title" className={styles.movie__img}/>
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p className={styles.movie__summary}>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
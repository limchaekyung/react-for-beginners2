import styles from "./Point.module.css";

function Point({background_image_original, medium_cover_image, url, title_long, rating, runtime, genres, download_count}) {
    return (
        <div>
            <img className={styles.bg} src={background_image_original} alt="background"/>           
            <div className={styles.show}>
                <img className={styles.img} src={medium_cover_image} alt="coverImage"/>
                <div className={styles.textbox}>
                    <h1 className={styles.title}><a href={url} target="_blank" rel="noreferrer">{title_long}</a></h1>
                    <ul>
                        <li>Rating {rating}</li>
                        <li>Runtime {runtime}</li>
                        <li>Download {download_count}</li>
                        <li>
                            Genres
                            <ul>
                                {genres.map(genre => <li>{genre}</li>)}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Point;
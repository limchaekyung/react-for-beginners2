import styles from "./Point.module.css"

function Point({background_image_original, medium_cover_image, url, title_long, rating, runtime, genres, download_count}){
    return(
        <div>
            <img className={styles.bg} src={background_image_original} />
            <div className={styles.show}>
                <img className={styles.img} src={medium_cover_image} />
                <div className={styles.textbox}>
                    <h1 className={styles.title}><a href={url} target="_blank" rel="noreferrer">{title_long}</a></h1>
                    <ul>
                        <li>Rating {rating}</li>
                        <li>Runtime {runtime}</li>
                        <li>DownLoad {download_count}</li>
                        <li>
                            Genres
                            <ul>
                                {genres.map(genres => <li>{genres}</li>)}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
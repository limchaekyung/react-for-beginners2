import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import Point from "../components/Point"
import styles from "./Home.module.css"
import Loading from "../components/Loading"

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [datas, setDatas] = useState({});
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
    }
    useEffect(() => {
        getMovie();
    }, []);
  return (
    <div className={styles.container}>
      {loading ? (<Loading />) : (
        <Point
          background_image_original={datas.background_image_original}
          medium_cover_image={datas.medium_cover_image}
          url={datas.url}
          title_long={datas.title_long}
          rating={datas.rating}
          runtime={datas.runtime}
          genres={datas.genres}
          download_count={datas.download_count}
        />
      )}
    </div>
  )
}
export default Detail;

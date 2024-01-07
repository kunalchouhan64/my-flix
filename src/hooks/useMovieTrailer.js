import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../../utils/contant"
import { addTrailerVideo } from "../../utils/Slices/moviesSlice"

const useMovieTrailer = (movieid) => {
    const dispatch = useDispatch()

    const getMovieVideo = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/'+ movieid+ '/videos?language=en-US', API_OPTIONS)
        const data = await response.json()
        // console.log(data.results);

        const FilterdData = data.results.filter((video) => video.type === "Trailer")
        const MovieTrailer = FilterdData.length ? FilterdData[0] : data.results[0]
        dispatch(addTrailerVideo(MovieTrailer))
    }

    useEffect(() => {
        getMovieVideo()
    }, [])
}

export default useMovieTrailer
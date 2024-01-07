import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../../utils/Slices/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../../utils/contant"

//💡⚡ Learning - The learning is that the custom hooks is nothing but the normal JS Function that return the value while performing the task that we have given to do. So Custom Hooks is just a Normal Functions or nothing else. 

const useNowPlayingMovies = () => {

    const dispatch = useDispatch()

    // 🌟Fetching Movie List With Fetch 
    const getNowPlayingMovies = async () => {
        try {
            const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
            const data = await res.json()
            dispatch(addNowPlayingMovies(data.results))
        }

        catch (error) {
            alert(error)
        }
    }

    // 🌟Using UseEffct Hook To Render Onece 
    useEffect(() => {
        getNowPlayingMovies()
    }, [])

}

export default useNowPlayingMovies;
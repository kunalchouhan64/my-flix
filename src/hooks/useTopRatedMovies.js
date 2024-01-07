import { useDispatch } from "react-redux"
import { addtopRatedMovies } from "../../utils/Slices/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../../utils/contant"

//💡⚡ Learning - The learning is that the custom hooks is nothing but the normal JS Function that return the value while performing the task that we have given to do. So Custom Hooks is just a Normal Functions or nothing else. 
const useTopRatedMovies = () => {

    const dispatch = useDispatch()

    // 🌟Fetching Movie List With Fetch 
    const getTopRatedMovies = async () => {
        try {
            const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
            const data = await res.json()
            dispatch(addtopRatedMovies(data.results))
        }

        catch (error) {
            alert(error)
        }
    }

    // 🌟Using UseEffct Hook To Render Onece 
    useEffect(() => {
        getTopRatedMovies()
    }, [])

}

export default useTopRatedMovies;
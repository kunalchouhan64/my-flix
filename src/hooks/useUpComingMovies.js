import { useDispatch } from "react-redux"
import { addupcomingMovies } from "../../utils/Slices/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../../utils/contant"

//💡⚡ Learning - The learning is that the custom hooks is nothing but the normal JS Function that return the value while performing the task that we have given to do. So Custom Hooks is just a Normal Functions or nothing else. 
const useUpComingMovies = () => {

    const dispatch = useDispatch()

    // 🌟Fetching Movie List With Fetch 
    const getUpComingMovies = async () => {
        try {
            const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
            const data = await res.json()
            dispatch(addupcomingMovies(data.results))
        }

        catch (error) {
            alert(error)
        }
    }

    // 🌟Using UseEffct Hook To Render Onece 
    useEffect(() => {
        getUpComingMovies()
    }, [])

}

export default useUpComingMovies;
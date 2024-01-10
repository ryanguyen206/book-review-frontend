import { handleGetRequest } from "../utils/helper"
import { useQuery } from "react-query"

const useGenre = () => {
    const {data: genres} = useQuery({
        queryKey:['genres'], 
        queryFn: async () => await handleGetRequest(`${import.meta.env.VITE_URL}/api/genre/`),
    })

  
    return {genres}
}

export default useGenre
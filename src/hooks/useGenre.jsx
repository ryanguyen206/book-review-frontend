import { handleGetRequest } from "../utils/helper"
import { useQuery } from "react-query"

const useGenre = () => {
    const {data: genres} = useQuery({
        queryKey:['genres'], 
        queryFn: async () => await handleGetRequest('http://127.0.0.1:8000/api/genre/'),
    })

  
    return {genres}
}

export default useGenre
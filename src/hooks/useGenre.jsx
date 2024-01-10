import { handleGetRequest } from "../utils/helper"
import { useQuery } from "react-query"

const useGenre = () => {
    const {data: genres} = useQuery({
        queryKey:['genres'], 
        queryFn: async () => await handleGetRequest(`${process.env.REACT_APP_API}/api/genre/`),
    })

  
    return {genres}
}

export default useGenre
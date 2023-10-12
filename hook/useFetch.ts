import {useState, useEffect} from 'react';
import axios from 'axios';
const rapidApiKey = 'ae9d14c384msh5c559dcef5c5a2bp151f59jsn7124d7d4feab';
// Mốt sẽ replace bằng RTK Query
const useFetch = (endpoint: string, query: {query: string, page: number, num_pages: number}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
      method: 'GET',
      url: `https://jsearch.p.rapidapi.com/search${endpoint}`,
      headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      },
      params: {
        ...query
      }
    };
    
    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            console.log(response.data);

            setData(response.data.data);
            setIsLoading(false);

        } catch (error: any) {
            console.error(error);
            setError(error);

            alert("There is an error");
        } finally {
            setIsLoading(false);
        }
        
    }

    useEffect(() => {
      fetchData();
    
      return () => {
      }
    }, [])
    
    
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {
        data, isLoading, error, refetch
    }

}

export default useFetch;
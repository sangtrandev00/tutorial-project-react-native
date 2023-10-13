import {useState, useEffect} from 'react';
import axios from 'axios';
import { IJob } from 'types/job';
const rapidApiKey = 'ae9d14c384msh5c559dcef5c5a2bp151f59jsn7124d7d4feab';
// Mốt sẽ replace bằng RTK Query => Giải quyết vấn đề gọi API như vậy!
const useFetch = (endpoint: string, query: {query?: string, page?: string, num_pages?: string, job_id?: string, extended_publisher_details?: string}) => {
    const [data, setData] = useState<IJob[] | IJob>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
      method: 'GET',
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
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
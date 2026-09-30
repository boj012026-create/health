import {useState, useEffect, useCallback } from "react";
/**
 * New UseApi Takes API @url and @options
 * returns useStates for @data, @loading, @error and @refresh
 */
export default function UseApi(url, options) {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const [refreshTrigger, setRefreshTrigger] = useState(false);

        useEffect(() => {
            const fetchData = async () => {
               try {
                   const response = await fetch(url, options);
                   if (!response.ok) {
                       throw new Error(`HTTP error! status: ${response.status}`);
                   }
                   let result = await response.json();
                   setData(result);
                   console.log(result)
               } catch (err) {
                   setError(err)
               } finally {
                   setLoading(false);
               }
            }
            
            fetchData();
        }, [refreshTrigger]);
        
        /*
         * triggers the useeffect to fetch data again
         */
        const refresh = useCallback( () => {
            setRefreshTrigger((prev) => !prev);
        }, []);
        return {data, loading, error, refresh};
}

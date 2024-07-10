import { useEffect, useState } from "react";
import axios from 'axios';

function useFetch() {
    const [myData, setMyData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getApiData() {
        try {
            const res = await axios.get("https://api.github.com/users");
            setMyData(res.data);  // Set myData to the results array
            setLoading(false);  // Set loading to false after data is fetched
            console.log("Data fetched successfully:", res.data.results);
        } catch (error) {
            setLoading(false);  // Set loading to false on error
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getApiData();
    }, []);

    return { myData, loading };
}

export default useFetch;

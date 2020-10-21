import React, { useState, useEffect } from 'react';


const useDataFetch = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const response = await fetch(url);
                const dataJson = await response;
                const newData = await dataJson.json()

                
                setData(newData);

            } catch (error) {
                setIsError(true);
                console.log("error UseDataFetch", error)
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    return [{ data, isLoading, isError }, setUrl];
};

export default useDataFetch;

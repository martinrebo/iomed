import React, { useState, useEffect } from 'react';

import useDataFetch from '../../hooks/useDataFetch';
import SearchboxUI from './SearchboxUI';

export default function () {

    const [municipios, setMunicipios] = useState([])
    const [{ data, isLoading, isError }, doFetch] = useDataFetch(
        'https://www.el-tiempo.net/api/json/v2/municipios',
        []
    )

    useEffect(() => {
        // Format data for the searchbox options + Fix code for municipio id
        let options = data.map((municipio) => { return { 
            label: municipio.NOMBRE,
            id: municipio.CODIGOINE.substring(0,5), 
            codprovincia: municipio.CODPROV,
            nombre: municipio.NOMBRE } })
        setMunicipios(options)
    }, [data])

    return (
        <SearchboxUI data={municipios} isLoading={isLoading} isError={isError} />
    )
}


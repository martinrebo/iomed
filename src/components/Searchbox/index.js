import React, { useState, useEffect, useCallback, useMemo } from 'react';

import { EuiComboBox } from '@elastic/eui';
import useDataFetch from '../../hooks/useDataFetch';
import SearchboxUI from './SearchboxUI';

export default function () {

    const [municipios, setMunicipios] = useState([])
    const [{ data, isLoading, isError }, doFetch] = useDataFetch(
        'https://www.el-tiempo.net/api/json/v2/municipios',
        []
    )



    useEffect(() => {
        // Format data for the searchbox options
        let options = data.map((municipio, index) => { return { label: municipio.NOMBRE, id: municipio.CODIGOINE } })
        setMunicipios(options)
    }, [data])

    return (
        <SearchboxUI data={municipios} isLoading={isLoading} isError={isError} />
    )
}


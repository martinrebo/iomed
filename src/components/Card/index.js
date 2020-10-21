import React, { useContext, useEffect } from 'react'
import useDataFetch from '../../hooks/useDataFetch';
import Card from './CardUI';
import { store } from '../../store/store'


export default () => {
    const globalState = useContext(store);
    const { dispatch } = globalState;

    let selection = globalState.state.currentSelection[0]

    const [{ data, isLoading, isError }, doFetch] = useDataFetch(
        ``,
        []
    )

    useEffect(() => {
        doFetch(`https://www.el-tiempo.net/api/json/v2/provincias/${selection.codprovincia}/municipios/${selection.id}`)
    }, [selection, doFetch])


    return (
        <div>
            <Card
                title={data?.municipio?.NOMBRE}
                description={data?.stateSky?.description}
                isLoading={isLoading}
                isError={isError} />
        </div>
    )
}

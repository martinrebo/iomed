import React, { useContext, useEffect } from 'react'
import useDataFetch from '../../hooks/useDataFetch';
import CardUI from './CardUI';
import { store } from '../../store/store'
import { firestore } from '../../utils/firebase'
import firebase from 'firebase'
import PropTypes from 'prop-types'

const Card = ({ uid }) => {
    const globalState = useContext(store);

    let selection = globalState.state.currentSelection[0]

    const [{ data, isLoading, isError }, doFetch] = useDataFetch(
        ``,
        {}
    )

    useEffect(() => {
        if (selection === undefined) {
            return
        } else
            doFetch(`https://www.el-tiempo.net/api/json/v2/provincias/${selection?.cod_provincia}/municipios/${selection?.id_municipio}`)
    }, [selection, doFetch])


    const handleSaveSearch = () => {

        let cardData = {
            uid,
            cod_provincia: selection.cod_provincia,
            id_municipio: selection.id_municipio,
            label: selection.label
        }


        try {
            firestore.collection("users").doc(uid).update({
                savedSearches: firebase.firestore.FieldValue.arrayUnion(cardData)
            })
        } catch (err) {
            console.log(err)

        }
    }


    return (
        <div>
            <CardUI
                data={data}
                isLoading={isLoading}
                isError={isError}
                onClick={handleSaveSearch} />
        </div>
    )
}


Card.propTypes = {
    uid: PropTypes.string,

}

export default Card;
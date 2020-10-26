import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types'

import { EuiComboBox } from '@elastic/eui';
import { store } from '../../store/store.js';

const initalState = [{ label: "Barcelona", id_municipio: "08019", cod_provincia: "08" }]

export default function SearchboxUI({ data, isLoading, isError }) {

    const globalState = useContext(store);
    const { dispatch } = globalState;

    const [options, setOptions] = useState(data);

    useEffect(() => {
        setOptions(data)
    }, [])


    const [selectedOption, setSelectedOption] = useState([])
    const [loadingOptions, setLoadingOptions] = useState(false);
    let searchTimeout;

    const onChange = (newOption) => {
        console.log("onChange", newOption)

        if (newOption === undefined) {
            setSelectedOption(initalState)
        } else
            setSelectedOption(newOption);
        dispatch({ type: "SET_CURRENT_SELECTION", payload: newOption })
    };

    const onSearchChange = (textQuery) => {
        setLoadingOptions(true);
        
        searchTimeout = setTimeout(() => {
            // Simulate a remotely-executed search.
            setLoadingOptions(false);
            setOptions(
                data.filter((option) =>
                    option.label.toLowerCase().includes(textQuery.toLowerCase())
                )
            );
        }, 100);
    }




    return (
        <>
            <EuiComboBox
                placeholder="Search asynchronously"
                singleSelection={{ asPlainText: true }}
                async
                options={options}
                selectedOptions={selectedOption}
                isLoading={loadingOptions}
                onChange={onChange}
                onSearchChange={onSearchChange}
                fullWidth
            />
            {isError ? "There is an issue, try again" : null}
        </>
    )
}

SearchboxUI.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            id_municipio: PropTypes.string.isRequired,
            cod_provincia: PropTypes.string.isRequired
        })
    )
}
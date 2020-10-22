import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types'

import { EuiComboBox } from '@elastic/eui';
import { store } from '../../store/store.js';

const initalState = [{ label: "Barcelona", id: "08019", codprovincia: "08", nombre: "Barcelona" }]

export default function SearchboxUI({ data, isLoading, isError }) {

    const globalState = useContext(store);
    const { dispatch } = globalState;

    const [options, setOptions] = useState(data);
    const [selectedOption, setSelectedOption] = useState([])
    const [loadingOptions, setLoadingOptions] = useState(false);
    let searchTimeout;

    const onChange = (newOption) => {
        console.log("onChange" ,newOption)

        if (newOption === undefined) {
            setSelectedOption(initalState)
        } else
        setSelectedOption(newOption);
        dispatch({ type: "SET_CURRENT_SELECTION", payload: newOption })
    };

    const onSearchChange = (textQuery) => {
        setLoadingOptions(true);
        // setSelectedOption([])
        console.log("onSearchChange" , textQuery)
        searchTimeout = setTimeout(() => {
            // Simulate a remotely-executed search.
            setLoadingOptions(false);
            setOptions(
              data.filter((option) =>
                option.label.toLowerCase().includes(textQuery.toLowerCase())
              )
            );
          }, 1200);
    }


    return (
        <div>
            <EuiComboBox
                placeholder="Search asynchronously"
                singleSelection={{ asPlainText: true }}
                async
                options={data}
                selectedOptions={selectedOption}
                isLoading={loadingOptions }
                onChange={onChange}
                onSearchChange={onSearchChange}
            />
            {isError ? "There is an issue, try again" : null}
        </div>
    )
}

SearchboxUI.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    )
}
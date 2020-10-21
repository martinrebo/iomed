import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types'

import { EuiComboBox } from '@elastic/eui';
import { store } from '../../store/store.js';

export default function SearchboxUI({ data, isLoading, isError }) {

    const globalState = useContext(store);
    const { dispatch } = globalState;

    const [selectedOption, setSelectedOption] = useState([{ label: "Barcelona", id: "08019", codprovincia: "08", NAME: "Barcelona" }])



    const onChange = (newOption) => {
        setSelectedOption(newOption);
        console.log("SearchboxUI, onchange ", newOption)
        if (newOption === undefined) {
            return 
        } else 
        dispatch({ type: "SET_CURRENT_SELECTION", payload: newOption })
    };


    return (
        <div>
            <EuiComboBox
                placeholder="Search asynchronously"
                singleSelection={{ asPlainText: true }}
                async
                options={data}
                selectedOptions={selectedOption}
                isLoading={isLoading}
                onChange={onChange}
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
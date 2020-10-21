import React, { useState, useEffect, useCallback } from 'react';

import { EuiComboBox } from '@elastic/eui';

export default function SearchboxUI(props) {

    const [selectedOption, setSelectedOption] = useState([{ label: "Barcelona", id: "08019" }])

    const onChange = (newOption) => {
        setSelectedOption(newOption);
        console.log(selectedOption)
        // Redux - Dispatch Selected option to get data
    };

    return (
        <div>
            <EuiComboBox
                placeholder="Search asynchronously"
                singleSelection={{ asPlainText: true }}
                async
                options={props.data}
                selectedOptions={selectedOption}
                isLoading={props.isLoading}
                 onChange={onChange}
            />
        </div>
    )
}
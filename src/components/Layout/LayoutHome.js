
import React from 'react';
import PropTypes from 'prop-types'

import {

    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiTitle,
} from '@elastic/eui';

export default function LayoutHome ({ Pagetitle, Login }) {
    return (
        <EuiPage>
            <EuiPageBody component="div" restrictWidth={600}>
                <EuiPageHeader>
                    <EuiPageHeaderSection>
                        <EuiTitle size="l">
                            <h1>{Pagetitle}</h1>
                        </EuiTitle>
                    </EuiPageHeaderSection>
                </EuiPageHeader>
                <EuiPageContent>
                    <EuiPageContentBody>
                        {Login}
                    </EuiPageContentBody>
                </EuiPageContent>
            </EuiPageBody>
        </EuiPage>
    )

};

LayoutHome.propTypes = {
        Pagetitle: PropTypes.string,
        Login: PropTypes.element.isRequired,        
}
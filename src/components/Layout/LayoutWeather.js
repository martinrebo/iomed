
import React from 'react';

import PropTypes from 'prop-types'

import {

    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiTitle,
    EuiSpacer
} from '@elastic/eui';

export default function LayoutWeather({ Pagetitle, Searchbox, Card, SearchList, Logout }) {
    return (
        <EuiPage restrictWidth={500}>
            <EuiPageBody component="div" restrictWidth={false}  >
                <EuiPageHeader>
                    <EuiPageHeaderSection>
                        <EuiTitle size="l">
                            <h1>{Pagetitle}</h1>
                        </EuiTitle>
                    </EuiPageHeaderSection>
                    <EuiPageHeaderSection>
                        {Logout}
                    </EuiPageHeaderSection>
                </EuiPageHeader>
                <EuiPageContent>
                    <EuiPageContentHeader>
                        {Searchbox}
                    </EuiPageContentHeader>
                    <EuiPageContentBody>
                        {Card}
                        <EuiSpacer size="xl" />
                        {SearchList}
                    </EuiPageContentBody>
                </EuiPageContent>
            </EuiPageBody>
        </EuiPage>
    );
} 

LayoutWeather.propTypes = {   
        Pagetitle: PropTypes.string,
        Searchbox: PropTypes.element.isRequired,
        Card: PropTypes.element.isRequired,
        SearchList: PropTypes.element.isRequired,
        Logout: PropTypes.element.isRequired

}
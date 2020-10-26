
import React from 'react';
import PropTypes from 'prop-types'

import {
  EuiButton,
  EuiCard,
  EuiSpacer,
} from '@elastic/eui';

const CardUI =  ({ data, onClick, isLoading }) => {

  let temperature = data?.temperatura_actual
  let rain = data?.lluvia
  let sky = data?.stateSky?.description
  let municipio = data?.municipio?.NOMBRE 
  let description = data && !isLoading ?
    `La temperatura actual es de ${temperature}º , el cielo esta ${sky} y la probabilidad de llueva es de ${rain}%`
    : '...loading'


  return (
    <>
      <EuiCard
        title={ isLoading ? '...loading ' : municipio}
        description={data && !isLoading ? description : '...loading'}
        footer={
          <div>
            <EuiButton onClick={onClick} aria-label="Save">Save</EuiButton>
            <EuiSpacer size="xs" />
          </div>
        }
      />
    </>
  )
}

CardUI.propTypes = {
      data: PropTypes.object,
      onClick: PropTypes.func,
      isLoading: PropTypes.bool
}

export default CardUI;

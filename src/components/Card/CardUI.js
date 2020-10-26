
import React from 'react';
// import { db } from '../../utils/firebase';

import {
  EuiButton,
  EuiCard,
  EuiSpacer,
} from '@elastic/eui';

export default ({ data, onClick, isLoading }) => {

  let temperature = data?.temperatura_actual
  let rain = data?.lluvia
  let sky = data?.stateSky?.description
  let municipio = data?.municipio?.NOMBRE

  let description = `La temperatura actual es de ${temperature}º , el cielo esta ${sky} y la probabilidad de llueva es de ${rain}%`

  return (
    <>
      <EuiCard
        title={data && !isLoading ? municipio : "loading..."}
        description={data && !isLoading  ? description : '...loading'}
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
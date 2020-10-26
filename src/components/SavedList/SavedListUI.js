import React from 'react'

import {
    EuiListGroup,
    EuiListGroupItem,

  } from '@elastic/eui';

export default function SavedListUI({list, onClick}) {
    return (
<EuiListGroup
 maxWidth={500}
  size="m" 
  color="ghost"
   bordered={true}
   
   >
    {list.map(item =>
                <EuiListGroupItem key={item.label} onClick={onClick} label={item.label} data-item={JSON.stringify(item)} />
        )}

      </EuiListGroup>
    )
}

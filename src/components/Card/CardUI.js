
import React from 'react';

import {
  EuiButton,
  EuiCard,
  EuiIcon,
  EuiLink,
  EuiSpacer,
  EuiText,
} from '@elastic/eui';

export default ({title, description}) => (
    <>
      <EuiCard
        icon={<EuiIcon size="xxl" type="devToolsApp" />}
        title={title}
        description={description}
        footer={
          <div>
            <EuiButton aria-label="Go to Developers Tools">Save</EuiButton>
            <EuiSpacer size="xs" />
            <EuiText size="s">
              <p>
                Or <EuiLink href="http://google.com">Cancel</EuiLink>
              </p>
            </EuiText>
          </div>
        }
      />
    </>
)

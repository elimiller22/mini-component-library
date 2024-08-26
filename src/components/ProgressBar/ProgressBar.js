/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  "small": {
    height: "8px",
    padding: "0",
    radius: "4px"
  },
  "medium": {
    height: "12px",
    padding: "0",
    radius: "4px"
  },
  "large": {
    height: "16px",
    padding: "4px",
    radius: "4px"
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
    >
      <Bar
        style={{
          '--width': value + "%",
          '--height': styles.height,
        }}
      />
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
`

export default ProgressBar;

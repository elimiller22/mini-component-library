import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    iconSize: 16,
    height: 24,
    fontSize: 14,
    borderThickness: 1,
  },
  large: {
    iconSize: 24,
    height: 36,
    fontSize: 18,
    borderThickness: 2,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated // This includes the placeholder attribute.
}) => {
  const styles = STYLES[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <StyledInput
        style={{
          '--width': width + 'px',
          '--height': styles.height + 'px',
          '--font-size': styles.fontSize / 16 + 'rem', // Default font size is 16px, so we convert to rem for accessibility when user changes font size.
          '--border-thickness': styles.borderThickness + 'px',
        }}
        {...delegated}
      />
    </Wrapper>
  )
};



const Wrapper = styled.label`
  position: relative;
  margin-left: 20px;
  display: block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const StyledInput = styled.input`
  padding-left: var(--height);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.gray700};
  height: var(--height);
  width: var(--width);
  outline-color: Highlight;
  outline-offset: 2px;
  font-size: var(--font-size);
  font-weight: 700;
  color: ${COLORS.gray700};
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
  &:hover {
    &::placeholder {
      color: ${COLORS.black};
    }
    border-bottom-color: ${COLORS.black};
  }
`

export default IconInput;

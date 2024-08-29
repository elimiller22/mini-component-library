import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <ValueWrapper>{displayedValue}</ValueWrapper>
      <CustomIcon id="chevron-down" size={24} strokeWidth={2} />
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
    </Wrapper>
  );
};

const SelectWrapper = styled.select`
  position: absolute;
  opacity: 0;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${COLORS.transparentGray15};
  cursor: pointer;
`

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  padding: 8px 4px 8px 16px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border: none;
  &:focus-within { // Not the way it's done in the solution.
    outline: 2px solid ${COLORS.primary};
    outline: 5px auto Highlight;
  }
  &:hover {
    color: ${COLORS.black};
  }
`

const ValueWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 24px;
`



const CustomIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
  /* right: 10px; */
`

export default Select;

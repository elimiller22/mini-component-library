import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <ValueWrapper>{value}</ValueWrapper>
      <CustomIcon id="chevron-down" size={24} strokeWidth={2} />
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  border: 1px solid ${COLORS.transparentGray35};
  width: fit-content;
  padding: 8px 4px 8px 16px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
`

const ValueWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 24px;
`

const SelectWrapper = styled.select`
  position: absolute;
  opacity: 0;
  left: 0;
  background-color: ${COLORS.transparentGray35};
`

const CustomIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
  /* right: 10px; */
`

export default Select;

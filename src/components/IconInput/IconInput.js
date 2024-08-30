import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper>
      <StyledIcon id="search" />
      <StyledInput />
    </Wrapper>
  )
};

const Wrapper = styled.div`
  position: relative;
  margin-left: 20px;
  border: 1px solid black;
`

const StyledIcon = styled(Icon)`
  /* left: 0;
  position: absolute; */
  display: inline-block;
`

const StyledInput = styled.input`
  /* left: 30px; */
  position: absolute;
  /* display: inline-block; */
`

export default IconInput;

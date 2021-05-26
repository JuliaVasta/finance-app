import React from 'react'
import styled from 'styled-components'

const InputField = styled.input`
  box-sizing: border-box;
  background: transparent;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  color: #5f6368;
  font-size: 14px;
  line-height: 1;
  outline: none;
  transition: all .3s;
  width: 100%;
  max-width: 100%;
  padding: 1.2rem;
  display: block;
  touch-action: manipulation;

  &:active, :focus {
    border: 1px solid #519aff;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 6px #8cbcfe; }
  }
`

const Input = ({ ...props}) => {
  return (
    <InputField
      {...props} />
  )
}

export default Input


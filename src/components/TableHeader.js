import React from 'react'
import styled from 'styled-components'

const Tr = styled.tr`
  background: var(--color-gray);
`

const Column = styled.th`
  padding: 1.6rem;
`

const TableHeader = ({columns}) => {
  return (
    <thead>
    <Tr>
    {columns.map(column => (
      <Column key={column}>{column}</Column>
      ))}
    </Tr>
    </thead>
  )
}

export default TableHeader


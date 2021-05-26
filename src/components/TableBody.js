import React from 'react'
import styled from 'styled-components'

const Tr = styled.tr`
  color: #5f6368;

  &:hover {
    background: #e8f0ff;
    transition: all .3s;
  }
`

const Td = styled.td`
  padding: 1.6rem;
  border-bottom: 1px solid #e8e8e8;
`

const Button = styled.button`
  background: ${props => props.primary ? "#edfcfa" : "#fff2e8;" };
  border: 1px solid ${props => props.primary ? "#0ad189" : "#FF7381" };
  color: ${props => props.primary ? "#0ad189" : "#FF7381"};
  margin-right: ${props => props.primary ? "1rem" : "0"};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  padding: 4px 7px;
  display: inline-block;
  transition: background .2s;
  cursor: pointer;
`

const TableBody = ({ records, onGetBalance, onRemoveRecord, onEditRecord, onGetCategoryLabel, onGetTransactionLabel }) => {
  return (
    <tbody>
      {records.map((record, index) => (
        <Tr key={record.id}>
          <Td>{record.date}</Td>
          <Td>{record.description}</Td>
          <Td>{onGetTransactionLabel(record.transactionType)}</Td>
          <Td>{onGetCategoryLabel(record.transactionType, record.category)}</Td>
          <Td>{record.amount}</Td>
          <Td>{onGetBalance(index)}</Td>
          <Td>
            <Button primary onClick={() => onEditRecord(index)}>Edit</Button>
            <Button onClick={() => onRemoveRecord(index)}>Delete</Button>
          </Td>
        </Tr>
      ))}
    </tbody>
  )
}

export default TableBody



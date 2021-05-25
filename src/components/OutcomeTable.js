import React from 'react'
import styled from 'styled-components'

import TableHeader from './TableHeader'
import TableBody from './TableBody'

import { columns } from '../constants'

const Table = styled.table`
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 16px 0px;
  border-radius: 4px;
  border-spacing: 0;
  text-align: left;
  margin: 4rem auto;
  padding: 2.4rem;
  max-width: 90rem;
  width: 90rem;
`

const OutcomeTable = ({
  records,
  onRemoveRecord,
  onGetBalance,
  onEditRecord,
  editingRecord,
  onGetCategoryLabel,
  onGetTransactionLabel
}) => {
  
  return (
    <Table>
      <TableHeader
        columns={columns} /> 
      <TableBody
        records={records}
        onRemoveRecord={onRemoveRecord}
        onGetBalance={onGetBalance}
        onEditRecord={onEditRecord}
        editingRecord={editingRecord}
        onGetCategoryLabel={onGetCategoryLabel}
        onGetTransactionLabel={onGetTransactionLabel} />
    </Table>
  )
}

export default OutcomeTable

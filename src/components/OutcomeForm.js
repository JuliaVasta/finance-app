import React from 'react'
import styled, { css } from 'styled-components'

import SelectNew from './SelectNew'
import Input from './Input'

import { transactionTypeOptions, transactionTypeLabels, 
incomeTypeLabels, outcomeTypeLabels, transactionTypes} from '../model'

const Form = styled.form`
  background: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 16px 0px;
  padding: 2.4rem;
  margin: 0 auto;
  max-width: 85rem;
`

const LabelGroup = styled.div`
  margin-bottom: 2.4rem;

`
const Label = styled.label`
  display: block;
  margin: 0 0 .8rem;
  font-weight: bold;
`

const Button = styled.button`
  background: transparent;
  border: 2px solid var(--color-greenlight);
  border-radius: 4px;
  color: var(--color-greenlight);
  font-size: 14px;
  font-weight: 700;
  padding: 1rem 0;
  width: 11rem;
  margin: 0.5rem 2rem 0.5rem 0; 
  display: inline-block;
  transition: background .2s;
  cursor: pointer;

  &:hover {
    background: var(--color-gray-1);
  }

  ${props => props.primary && css`
    background: var(--color-greenlight);
    color: white;
      &:hover {
        background: var(--color-greendark);
      }
  `}
`

const OutcomeForm = ({
  record,
  categories,
  onSubmitRecord,
  onChangeRecord,
  onChangeTransactionType,
  onChangeCategory,
  onClearRecord,
  isEditing
}) => {
  const { date, description, transactionType, category, amount } = record
  return (
    <Form onSubmit={onSubmitRecord} >
     
      <LabelGroup>
        <Label>Date</Label>
        <Input 
          type="date"
          name="date"
          value={date}
          onChange={onChangeRecord}
          required />
      </LabelGroup>

      <LabelGroup>
        <Label>Description</Label>
        <Input
          type="text"
          name="description"
          value={description}
          onChange={onChangeRecord}
          placeholder="Description"
          required />
      </LabelGroup>

      <SelectNew
        name="transactionType"
        title="TransactionType"
        value={{ label: transactionTypeLabels[transactionType], value: transactionType}}
        onChangeSelect={opt => onChangeTransactionType(opt)}
        options={transactionTypeOptions} />

      <SelectNew
        name="category"
        title="Category"
        value={{label: transactionType === transactionTypes.income  ? incomeTypeLabels[category] : outcomeTypeLabels[category]} }
        onChangeSelect={opt => onChangeCategory(opt)}
        options={categories} />

      <LabelGroup>
        <Label>Amount</Label>
        <Input
          type="number"
          name="amount"
          value={amount}
          onChange={onChangeRecord}
          step="any"
          required />
      </LabelGroup>

      <Button onClick={onSubmitRecord} type="button" primary>
        {isEditing ? 'Save Record' : 'Add Record'}
      </Button>
      <Button onClick={onClearRecord} type="button" >
        Reset
      </Button>
      
    </Form>
  )
}

export default OutcomeForm
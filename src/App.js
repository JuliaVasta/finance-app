import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './App.css';
import OutcomeForm from './components/OutcomeForm';
import OutcomeTable from './components/OutcomeTable';

import {
  newRecord,
  transactionTypes,
  incomeTypeOptions,
  outcomeTypeOptions,
  outcomeTypeLabels,
  incomeTypeLabels,
  transactionTypeLabels,
} from './model';
import { generateID } from './utils';
import { round } from './utils';

const Wrapper = styled.div`
  height: 100%;
  padding: 4rem 0;
  background: var(--color-gray);
`;
const TitleApp = styled.h1`
  max-width: 90rem;
  margin: 0 auto;
  padding: 4rem 2.4rem 2.4rem 2.4rem;
`;

const TableWrapper = styled.div`
  width: 100%;
  display: block;
  white-space: nowrap;
  overflow-x: auto;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      editingRecord: newRecord(),
      isEditing: false,
    };
  }

  handleSubmitRecord = (event) => {
    event.preventDefault();
    const { records, editingRecord, isEditing } = this.state;
    const updatedRecord = { ...editingRecord };
    let updatedRecords = records;

    if (!isEditing) {
      updatedRecord.id = generateID();
      updatedRecords.push(updatedRecord);
    } else {
      updatedRecords = updatedRecords.map((record) =>
        record.id === updatedRecord.id ? updatedRecord : record
      );
    }

    this.setState({
      records: updatedRecords,
      isEditing: false,
    });
  };

  handleRemoveRecord = (deletedRecordIndex) => {
    this.setState({
      records: this.state.records.filter((record, index) => {
        return index !== deletedRecordIndex;
      }),
    });
  };

  handleChangeRecord = (event) => {
    const { name, value } = event.target;
    this.setState({
      editingRecord: {
        ...this.state.editingRecord,
        [name]: value,
      },
    });
  };

  handleChangeTransactionType = (option) => {
    this.setState({
      editingRecord: {
        ...this.state.editingRecord,
        transactionType: option.value,
      },
    });
  };

  handleChangeCategory = (option) => {
    this.setState({
      editingRecord: {
        ...this.state.editingRecord,
        category: option.value,
      },
    });
  };

  handleEditRecord = (index) => {
    this.setState({
      editingRecord: this.state.records[index],
      isEditing: true,
    });
  };

  handleClearRecord = () => {
    this.setState({
      editingRecord: newRecord(),
      records: [],
    });
  };

  getCategories = () => {
    const categories =
      this.state.editingRecord.transactionType === transactionTypes.income
        ? Object.values(incomeTypeOptions)
        : Object.values(outcomeTypeOptions);
    return categories;
  };

  getCategoryLabel = (transactionType, category) => {
    return transactionType === transactionTypes.income
      ? incomeTypeLabels[category]
      : outcomeTypeLabels[category];
  };

  getTransactionLabel = (transactionType) => {
    return transactionType === transactionTypes.income
      ? transactionTypeLabels[transactionTypes.income]
      : transactionTypeLabels[transactionTypes.outcome];
  };

  handleGetBalance = (index) => {
    const filteredRecords = this.state.records.slice(0, index + 1);

    const totalIncomes = filteredRecords
      .filter((record) => record.transactionType === transactionTypes.income)
      .reduce(
        (totalIncomes, currentValue) =>
          totalIncomes + Number(currentValue.amount),
        0
      );
    const totalOutcomes = filteredRecords
      .filter((record) => record.transactionType === transactionTypes.outcome)
      .reduce(
        (totalOutcomes, currentValue) =>
          totalOutcomes + Number(currentValue.amount),
        0
      );

    return round(totalIncomes - totalOutcomes);
  };

  render() {
    const { records, editingRecord, isEditing } = this.state;

    return (
      <div className="App">
        <Wrapper>
          <TitleApp>Finance App</TitleApp>
          <OutcomeForm
            record={editingRecord}
            onSubmitRecord={this.handleSubmitRecord}
            onChangeRecord={this.handleChangeRecord}
            onChangeCategory={this.handleChangeCategory}
            onChangeTransactionType={this.handleChangeTransactionType}
            onClearRecord={this.handleClearRecord}
            categories={this.getCategories()}
            isEditing={isEditing}
          />
          <TableWrapper>
            <OutcomeTable
              records={records}
              onRemoveRecord={this.handleRemoveRecord}
              onGetBalance={this.handleGetBalance}
              onEditRecord={this.handleEditRecord}
              editingRecord={editingRecord}
              onGetCategoryLabel={this.getCategoryLabel}
              onGetTransactionLabel={this.getTransactionLabel}
            />
          </TableWrapper>
        </Wrapper>
      </div>
    );
  }
}

App.propTypes = {
  date: PropTypes.number,
  description: PropTypes.string,
  amount: PropTypes.number,
};

export default hot(module)(App);

export const newRecord = (params = {}) => ({
  id: null,
  date: '',
  description: '',
  transactionType: transactionTypes.income,
  category: incomeTypes.salary,
  amount: 0,
});

export const transactionTypes = {
  income: 0,
  outcome: 1,
};

export const transactionTypeLabels = {
  [transactionTypes.income]: 'Income',
  [transactionTypes.outcome]: 'Outcome',
};

export const transactionTypeOptions = [
  {
    value: transactionTypes.income,
    label: transactionTypeLabels[transactionTypes.income],
  },
  {
    value: transactionTypes.outcome,
    label: transactionTypeLabels[transactionTypes.outcome],
  },
];

export const incomeTypes = {
  salary: 0,
  interest: 1,
};

export const incomeTypeLabels = {
  [incomeTypes.salary]: 'Salary Received',
  [incomeTypes.interest]: 'Interest Received',
};

export const outcomeTypes = {
  expenses: 0,
  entertainment: 1,
  grocery: 2,
};

export const outcomeTypeLabels = {
  [outcomeTypes.expenses]: 'Expenses',
  [outcomeTypes.entertainment]: 'Entertainment',
  [outcomeTypes.grocery]: 'Grocery',
};

export const incomeTypeOptions = [
  { value: incomeTypes.salary, label: incomeTypeLabels[incomeTypes.salary] },
  {
    value: incomeTypes.interest,
    label: incomeTypeLabels[incomeTypes.interest],
  },
];

export const outcomeTypeOptions = [
  {
    value: outcomeTypes.expenses,
    label: outcomeTypeLabels[outcomeTypes.expenses],
  },
  {
    value: outcomeTypes.entertainment,
    label: outcomeTypeLabels[outcomeTypes.entertainment],
  },
  {
    value: outcomeTypes.grocery,
    label: outcomeTypeLabels[outcomeTypes.grocery],
  },
];

export const isRecordValid = (record) => {
  return record.id && record.amount;
};

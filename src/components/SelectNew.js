import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const LabelGroup = styled.div`
  margin-bottom: 2.4rem;
`;

const Label = styled.h4`
  margin: 0 0 0.8rem;
  font-weight: bold;
`;

const SelectNew = ({ name, title, value, options, onChangeSelect }) => (
  <LabelGroup>
    <Label>{title}</Label>
    <Select
      name={name}
      value={value}
      onChange={onChangeSelect}
      options={options.map((option) => option)}
    />
  </LabelGroup>
);

export default SelectNew;

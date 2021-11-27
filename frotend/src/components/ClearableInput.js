import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Clear } from '../clear.svg';

const Container = styled.div`
  font-family: 'Arial';
  display: flex;
  align-items: center;
  background: #F26A2E;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid;
  border-bottom: 3px solid;
  border-radius: 20px;
  &:hover {
    box-shadow: 1px 1px 1px thistle;
  }
`;

const TextInput = styled.input`
  flex: 1 0;
  min-width: 500px;
  min-height: 60px;
  background-color: transparent;
  font-size: inherit;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
`;

const Icon = styled.div`
  flex: 0 0;
`;

const ClearableInput = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <TextInput
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <Icon>
        <Clear
          width="60px"
          height="60px"
          stroke="black"
          onClick={() => {
            setInputValue('');
          }}
        />
      </Icon>
    </Container>
  );
};

export default ClearableInput

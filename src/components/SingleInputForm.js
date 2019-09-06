import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Form = styled.form`
  display: grid;
  align-items: center;
  grid-template-columns: 4fr 1fr;
  grid-column-gap: 1em;
`;

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleValueChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleValueChange,
  };
}

export default function SingleInputForm() {
  const todo = useFormInput('');

  const onClickButton = e => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={e => onClickButton(e)} autoComplete="off">
      <TextField label="test" value={todo.value} onChange={todo.onChange} />
      <Button variant="contained" color="primary" onClick={e => onClickButton(e)}>
        {'Add'}
      </Button>
    </Form>
  );
}

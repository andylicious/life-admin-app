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

export default function SingleInputForm(props) {
  const todo = useFormInput('');

  const onClickButton = e => {
    e.preventDefault();
    console.log(todo.value);
  };

  return (
    <Form onSubmit={e => onClickButton(e)} autoComplete="off">
      <TextField label={props.label} {...todo} />
      <Button variant="contained" color="primary" onClick={e => onClickButton(e)}>
        {props.submit}
      </Button>
    </Form>
  );
}

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

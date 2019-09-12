import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Form = styled.form`
  display: grid;
  align-items: center;
  grid-template-columns: 4fr 1fr;
  grid-column-gap: 1em;
`;

export default function SingleInputForm({ label, submit }) {
  const [todo, setTodo] = useState('');

  const handleValueChange = e => {
    setTodo(e.target.value);
  };

  const onClickButton = e => {
    e.preventDefault();
    submit(todo);
    setTodo('');
  };

  return (
    <Form onSubmit={e => onClickButton(e)} autoComplete="off">
      <TextField label={label} value={todo} onChange={handleValueChange} />
      <Button variant="contained" color="primary" onClick={e => onClickButton(e)}>
        {'Add'}
      </Button>
    </Form>
  );
}

SingleInputForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

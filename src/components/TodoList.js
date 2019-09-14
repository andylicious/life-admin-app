import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import TodoListItem from './TodoListItem';

const UL = styled.ul`
  padding-inline-start: 0;
`;

export default function TodoList({ items, checkItem, deleteTodo }) {
  return (
    <div>
      <UL>
        {items.map((item, key) => (
          <TodoListItem
            item={item}
            tabIndex={key}
            key={item._id}
            onCheck={checkItem}
            onDelete={deleteTodo}
          />
        ))}
      </UL>
    </div>
  );
}

TodoList.defaultProps = {
  items: [],
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  checkItem: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

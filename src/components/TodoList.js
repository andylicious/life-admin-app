import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Loader from './Loader';

const UL = styled.ul`
  padding-inline-start: 0;
`;

export default function TodoList({ items, checkItem, isLoading }) {
  return (
    <div>
      <Loader isLoading={isLoading}>
        <UL>
          {items.map((item, key) => (
            <ListItem key={item._id} role={undefined} dense button>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  color="primary"
                  tabIndex={-key}
                  checked={item.finished}
                  disableRipple
                  inputProps={{ 'aria-labelledby': item._id }}
                  onClick={() => checkItem(item)}
                />
              </ListItemIcon>
              <ListItemText primary={item.task} onClick={() => checkItem(item)} />
            </ListItem>
          ))}
        </UL>
      </Loader>
    </div>
  );
}

TodoList.defaultProps = {
  items: [],
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  checkItem: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

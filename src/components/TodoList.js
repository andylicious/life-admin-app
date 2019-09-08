import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';

const UL = styled.ul`
  padding-inline-start: 0;
`;

export default function TodoList(props) {
  const { items, checkItem } = props;

  const handleCheckboxClick = (status, id) => {
    checkItem(!status, id);
  };

  return (
    <div>
      <UL>
        {items.map((item, key) => (
          <ListItem key={key} role={undefined} dense button>
            <ListItemIcon>
              <Checkbox
                edge="start"
                color="primary"
                tabIndex={-key}
                checked={item.finished}
                disableRipple
                inputProps={{ 'aria-labelledby': key }}
                onClick={() => handleCheckboxClick(item.finished, key)}
              />
            </ListItemIcon>
            <ListItemText id={key} primary={item.task} />
          </ListItem>
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
};

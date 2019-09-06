import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

export default function TodoList() {
  return (
    <div>
      <ul>
        <ListItem key={1} role={undefined} dense button>
          <ListItemIcon>
            <Checkbox
              edge="start"
              color="primary"
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': 1 }}
            />
          </ListItemIcon>
          <ListItemText id={1} primary={`Line item ${1 + 1}`} />
        </ListItem>
        <li>List item 2</li>
      </ul>
    </div>
  );
}

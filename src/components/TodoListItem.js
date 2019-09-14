import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon';
import Cross from '../Icons/images/Cross';

// TODO: Proptypes
export default function TodoListItem({ item, tabIndex, onCheck, onDelete }) {
  return (
    <ListItem role={undefined} dense button>
      <ListItemIcon>
        <Checkbox
          edge="start"
          color="primary"
          tabIndex={-tabIndex}
          checked={item.finished}
          disableRipple
          inputProps={{ 'aria-labelledby': item._id }}
          onClick={() => onCheck(item)}
        />
      </ListItemIcon>
      <ListItemText primary={item.task} onClick={() => onCheck(item)} />
      {/* // Refactor */}
      <SvgIcon color="primary" onClick={() => onDelete(item._id)}>
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </SvgIcon>
    </ListItem>
  );
}

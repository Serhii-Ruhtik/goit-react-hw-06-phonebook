import React from 'react';

import { ListItem, Number, Button, TextField } from './Contact.styled';

const Contact = ({ id, name, number, onChangeResult }) => {
  return (
    <ListItem id={id}>
      <TextField>
        {name}: <Number> {number}</Number>
      </TextField>
      <Button type="button" onClick={onChangeResult}>
        Delete
      </Button>
    </ListItem>
  );
};
export default Contact;

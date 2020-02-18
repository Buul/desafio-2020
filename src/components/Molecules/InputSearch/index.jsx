import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Input, InputAdornment, FormControl } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import ds from 'design';

const useStyles = makeStyles(() => ({
  formControl: {
    marginBottom: 84,
  },
  textField: {
    color: 'white',
  },
  textFieldBright: {
    color: ds.color('dark', 'light'),
  },
}));

const InputAdornments = ({ theme }) => {
  const classes = useStyles(theme);
  const [values, setValues] = React.useState({
    search: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleMouseDownSeach = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl className={clsx(classes.formControl)}>
      <Input
        color={theme === 'default' ? 'secondary' : 'default'}
        placeholder="Faça uma pegunta..."
        id="standard-adornment-search"
        classes={{
          root: theme === 'default' ? classes.textField : classes.textFieldBright,
        }}
        type="text"
        value={values.search}
        onChange={handleChange('search')}
        startAdornment={
          <InputAdornment position="start">
            <IconButton
              aria-label="toggle seach"
              onMouseDown={handleMouseDownSeach}
              color={theme === 'default' ? 'secondary' : 'default'}
            >
              <Search />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default InputAdornments;

import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  grid: {
    marginBottom: 20,
  },
}));

const FormHelp = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.grid}>
      <Grid item className={classes.grid} xs={12}>
        <TextField fullWidth id="name" label="Nome" variant="outlined" color="secondary" />
      </Grid>
      <Grid item className={classes.grid} xs={12}>
        <TextField fullWidth id="email" label="Email" variant="outlined" color="secondary" />
      </Grid>
      <Grid item xs={12}>
        <TextField
          color="secondary"
          fullWidth
          label="Mensagem"
          multiline
          variant="outlined"
          rows="4"
        />
      </Grid>
    </Grid>
  );
};

export default FormHelp;

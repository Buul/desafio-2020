import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ds from 'design';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  container: {
    backgroundColor: 'red',
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: ds.color('green', 'light'),
    color: ds.color('white'),
    minWidth: 300,
    padding: '5px',
  },
  title: {
    '& button': {
      color: ds.color('white'),
    },
    marginBottom: 20,
  },
}));

const MaterialDialog = ({ children, showDialog, onCloseDialog }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(showDialog);
  }, [showDialog]);

  const handleClose = () => {
    setOpen(false);
    onCloseDialog();
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        classes={{
          paper: classes.container,
        }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} className={classes.title} />
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button size="small" variant="outlined" onClick={handleClose} color="secondary">
            ENVIAR
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MaterialDialog;

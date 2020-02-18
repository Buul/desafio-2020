import React, { useState, Fragment, useEffect } from 'react';
import { arrayOf, shape } from 'prop-types';
import {
  Typography,
  Collapse,
  ListItem,
  ListItemText,
  List,
  Button,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import ds from 'design';
import Dialog from 'components/Molecules/Dialog';
import Form from './Form';
import { Container } from './Container';

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: 0,
    width: '100%',
    maxWidth: 500,
    borderBottom: `0.5px solid ${ds.color('bright', 'dark')}`,
  },
  collapse: {
    paddingLeft: 0,
    width: '100%',
    maxWidth: 500,
  },
  content: {
    padding: '20px 0',
  },
  typography: {
    color: ds.color('pink'),
  },
  grid: {
    marginBottom: 20,
  },
}));

const Help = ({ listHelp }) => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    setData(listHelp);
  }, [listHelp]);

  const handleClick = (idx) => {
    const newData = [...data];
    newData[idx].open = !newData[idx].open;
    setData(newData);
  };

  return (
    <Container>
      <Typography variant="h6" color="primary">
        PERGUNTAS FREQUENTES
      </Typography>
      {data.map((item, idx) => (
        <Fragment key={item.id}>
          <ListItem button onClick={() => handleClick(idx)} className={classes.root}>
            <ListItemText primary={item.title} />
            {item.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={item.open} timeout="auto" unmountOnExit className={classes.collapse}>
            <List component="div" disablePadding>
              <ListItem button className={classes.content}>
                <ListItemText primary={item.content} />
              </ListItem>
            </List>
            <Typography variant="subtitle2" className={classes.typography}>
              AINDA FICOU COM DÚVIDA?
            </Typography>
            <Grid container className={classes.grid}>
              <Grid item xs={5} lg={3}>
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  onClick={() => setShowDialog(true)}
                >
                  WHATSAPP
                </Button>
              </Grid>
              <Grid item xs={6} lg={3}>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => setShowDialog(true)}
                >
                  EMAIL
                </Button>
              </Grid>
            </Grid>
          </Collapse>
        </Fragment>
      ))}
      <Dialog showDialog={showDialog} onCloseDialog={() => setShowDialog(false)}>
        <Form />
      </Dialog>
    </Container>
  );
};

Help.propTypes = {
  listHelp: arrayOf(shape({})),
};

Help.defaultProps = {
  listHelp: [
    {
      id: 1,
      title: 'Aliquam sed mi non ligula gravida pulvinar?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales enim enim. Quisque sagittis neque nec nisi facilisis, in gravida nibh tempus. Sed vitae lorem id diam iaculis varius. Nulla erat tortor, luctus at dui ac, cursu',
      open: false,
    },
    {
      id: 2,
      title: 'Aliquam sed mi non ligula gravida pulvinar?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales enim enim. Quisque sagittis neque nec nisi facilisis, in gravida nibh tempus. Sed vitae lorem id diam iaculis varius. Nulla erat tortor, luctus at dui ac, cursu',
      open: false,
    },
    {
      id: 3,
      title: 'Aliquam sed mi non ligula gravida pulvinar?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales enim enim. Quisque sagittis neque nec nisi facilisis, in gravida nibh tempus. Sed vitae lorem id diam iaculis varius. Nulla erat tortor, luctus at dui ac, cursu',
      open: false,
    },
    {
      id: 4,
      title: 'Aliquam sed mi non ligula gravida pulvinar?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales enim enim. Quisque sagittis neque nec nisi facilisis, in gravida nibh tempus. Sed vitae lorem id diam iaculis varius. Nulla erat tortor, luctus at dui ac, cursu',
      open: false,
    },
  ],
};

export default Help;

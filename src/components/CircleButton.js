import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { IoIosSearch } from 'react-icons/io';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  searchIcon: {
    fontSize: '200%'
  }
});

const CircleButton = (props) => {
  const { classes, onClick, label } = props;

  // console.log("props >>>> " + JSON.stringify({icon}));
  return (
    <div>
      <Button 
        variant="fab" 
        color={"secondary"}
        aria-label={label}
        className={classes.button}
        onClick={onClick}  
      >

      <IoIosSearch className={classes.searchIcon} />

      </Button>
    </div>
  );
}

CircleButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircleButton);
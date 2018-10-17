import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});

const OutlineInput = (props) => {
  const { classes, text, onChange, onKeyPress } = props;

  return (
    <div>
      <TextField
        id="outlined-full-width"
        className={classes.root}
        label="Enter Time in Seconds"
        style={{ 
          margin: 8,
          width: '90vw'
        }}
        placeholder="Seconds"
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
          border: '2px solid green'
        }}
        value={text}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}

OutlineInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlineInput);
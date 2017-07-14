import { Checkbox } from 'semantic-ui-react';
import propTypes from 'prop-types';
import React from 'react';

const Filters = ({ filterOptions, handleChange, state }) => {
  return(
    <div>
      {
        filterOptions.map(radio => {
          return (
            <div key={radio.name}>
              <Checkbox
                slider
                name={radio.name}
                label={radio.label}
                onChange={handleChange}
                checked={state[radio.name]} />
              <div className="spacer" />
            </div>
          );
        })
      }
    </div>
  );
}

Filters.propTypes = {
  filterOptions: propTypes.array.isRequired,
  handleChange: propTypes.func.isRequired,
  state: propTypes.object.isRequired,
}

export default Filters;

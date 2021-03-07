import React from 'react';
import PropTypes from 'prop-types';

function User({user, age}) {
    return (
        <h1>Hello {user} {age}</h1>
    )
}

export default User;

User.propTypes = {
   user: PropTypes.string.isRequired,
   age: PropTypes.number.isRequired
  /* age: (props, propName, componentName) => {
       const prop = props[propName];
       debugger;
       if (typeof prop Number) {
           throw Error(`In ${componentName} the prop must be more than 5`);
       }
   }*/
}
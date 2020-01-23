import React from 'react';

const Row = (props) => {
  return <div className={ `row ${ props.styling }` } { ...props } />;
}

export default Row;

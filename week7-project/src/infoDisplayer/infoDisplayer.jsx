import React from 'react';

function infoDisplayer(props){
  return (
    <div>
      <h5>Name: {props.name}</h5>
      <h5>Age: {props.age}</h5>
      <h5>Favorite Color: {props.color}</h5>
      <h5>Favorite book: {props.book}</h5>
    </div>
  )
}

export default infoDisplayer

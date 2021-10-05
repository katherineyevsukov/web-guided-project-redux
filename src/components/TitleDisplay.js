import React from 'react';
import { toggleEditing } from './../actions/titleActions';
import { connect } from 'react-redux';

const TitleDisplay = (props)=> {
  const handleClick = () => {
    toggleEditing();
  }

  return(<h2>
      {props.title}{' '}
      <i
        className="far fa-edit"
        onClick={handleClick}
      />
  </h2>);
}

const mapStateToProps = (state)=> {
  return {
    title: state.title
  }
}

const mapActionsToProps = {
  toggleEditing:toggleEditing
}

export default connect(mapStateToProps, mapActionsToProps)(TitleDisplay);
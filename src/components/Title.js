import React, { useReducer } from 'react';

import { connect } from 'react-redux';

import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle } from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  const handleTitleUpdate = (title) => {
    props.dispatch(updateTitle(title));
  }

  return (
    <div>
      <h1>{props.appName}</h1>
      {
        !props.editing ? 
          <TitleDisplay />: 
          <TitleForm />
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return({
    appName: state.appName,
    title: state.title,
    editing: state.editing
  });
}

export default connect(mapStateToProps)(Title);

// export default Title;
//connect(mapStateToProps, mapActionsToProps)(component)
//mapStateToProps : a function that allows us to inject redux state into a component's props
//mapActionsToProps : a object that contains action creator functions. These functions are injected into props AND are automatically dispatched when executed.
//component : the component that will recieve our injected props

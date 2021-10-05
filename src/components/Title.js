import React, { useReducer } from 'react';

import { connect } from 'react-redux';

import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = () => {
  // const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleToggleEditing = () => {
    dispatch(toggleEditing());
  }

  const handleTitleUpdate = (title) => {
    dispatch(updateTitle(title));
  }

  return (
    <div>
      <h1>{state.appName}</h1>
      {
        !state.editing ? 
          <TitleDisplay title={state.title} dispatch={dispatch} handleToggleEditing={handleToggleEditing}/>: 
          <TitleForm dispatch={dispatch} handleTitleUpdate={handleTitleUpdate}/>
      }
    </div>
  );
};

export default connect()(Title);
//connect(mapStateToProps, mapActionsToProps)(component)
//mapStateToProps : a function that allows us to inject redux state into a component's props
//mapActionsToProps : a object that contains action creator functions. These functions are injected into props AND are automatically dispatched when executed.
//component : the component that will recieve our injected props

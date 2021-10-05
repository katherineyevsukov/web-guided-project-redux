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

export default Title;

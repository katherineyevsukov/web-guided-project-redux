import React from 'react';

import { connect } from 'react-redux';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
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
  console.log("title: ", state);
  return({
    appName: state.titleState.appName,
    editing: state.titleState.editing
  });
}

export default connect(mapStateToProps)(Title);

// export default Title;
//connect(mapStateToProps, mapActionsToProps)(component)
//mapStateToProps : a function that allows us to inject redux state into a component's props
//mapActionsToProps : a object that contains action creator functions. These functions are injected into props AND are automatically dispatched when executed.
//component : the component that will recieve our injected props

import React from 'react';

// this are material-ui components refer here https://v0.material-ui.com/#/components
import AppBar from 'material-ui/AppBar';

// this export this component has class which allows to import in another file
export default class App extends React.Component {
  constructor(){
    super();
    // declaring the state variables

  }
  // this is the method which return the html block of this component
  render() {
    return (
      // the jsx elemnts has to wrap inside one element
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    )
  }
}

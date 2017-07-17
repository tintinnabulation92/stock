import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Header from '../components/commons/header'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

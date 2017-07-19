import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Header from '../../components/commons/header'
import Footer from '../../components/commons/footer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import cls from "./app.css"

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className={cls.main}>
          <Header />
          <div className={cls.content}>
            {this.props.children}
             <Footer />
          </div>
       
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

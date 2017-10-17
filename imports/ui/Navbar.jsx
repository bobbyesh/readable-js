import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    const white = 'white';
    const style = {
      navbar: {
        borderStyle: 'solid',
        backgroundColor: white,
        borderColor: white,
        borderBottom: 'solid grey 1px',
      },
      a: {
        backgroundColor: white
      }
    };

    return(
      <nav className='navbar navbar-default' style={style.navbar}>
        <div className='container-fluid'>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Readable</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav pull-right">
              <li><a href="#" style={style.a}>Link</a></li>
              <li><a href="#" style={style.a}>Link</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

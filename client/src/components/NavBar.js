import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

//
// <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//   <MenuItem eventKey={3.1}>Action</MenuItem>
//   <MenuItem eventKey={3.2}>Another action</MenuItem>
//   <MenuItem eventKey={3.3}>Something else here</MenuItem>
//   <MenuItem divider />
//   <MenuItem eventKey={3.3}>Separated link</MenuItem>
// </NavDropdown>

class NavBar extends React.Component {

  render() {
    let { id } = this.props;
    return (
      <div style={{ marginBottom: '5%'}}>
        <Navbar.Collapse>
          <Nav justified>
            <NavItem eventKey={0}>
              <NavLink to={'/'}><span className="glyphicon glyphicon-home"></span></NavLink>
            </NavItem>
            <NavItem eventKey={1}><NavLink to={'/shopall'}>SHOP ALL</NavLink></NavItem>
            <NavItem eventKey={2}><NavLink to={'/about'}>ABOUT</NavLink></NavItem>
            {id ?
                <NavItem eventKey={3}><NavLink to={'/dashboard'}>ACCOUNT</NavLink></NavItem>
              :
                <NavItem eventKey={3}><NavLink to={'/login'}>LOGIN</NavLink></NavItem>
            }
            {id ?
                <NavItem eventKey={4}>
                  <a
                    style={{ cursor: 'pointer' }}
                    onClick={ () => {
                        // dispatch(logout())
                        //  history.push('/')
                       }}
                  >LOGOUT</a>
                </NavItem>
              :
                <NavItem eventKey={4}><NavLink to={'/register'}>REGISTER</NavLink></NavItem>
            }
          </Nav>
        </Navbar.Collapse>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { id: state.user._id }
}

export default withRouter(connect(mapStateToProps)(NavBar));

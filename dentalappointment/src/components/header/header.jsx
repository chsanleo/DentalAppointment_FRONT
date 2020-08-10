import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <header>
                <div>
                    <NavLink exact to="/">
                        <img src="./logoDental.png" className="logo" alt="logo" />
                    </NavLink>
                </div>

                <ul>
                    {this.props.user?.id
                        ?
                        <li>
                            <Link to="/profile">Profile</Link>
                            <Link to="/agenda">Agenda</Link>
                            <Link to="/logOut"><img src="./logOut.png" alt="logOut"/></Link>
                        </li>
                        :
                        <li>
                            <Link to="/"><img src="./logIn.png" alt="logIn" title="Log In"/></Link>
                            <Link to="/access"><img src="./access.png" alt="Ask Access Credentials"  title="Require ur Access"/></Link>
                        </li>
                    }
                </ul>
            </header>
        );
    }
}
const mapStateToProps = ({ users }) => ({ user: users?.user })
export default connect(mapStateToProps)(Header);
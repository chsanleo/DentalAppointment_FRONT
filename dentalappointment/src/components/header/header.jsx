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
                            <Link to="/logOut">Logout</Link>
                        </li>
                        :
                        <li>
                            <Link to="/login">Login</Link>
                            <Link to="/access">Ask for ur Access</Link>
                        </li>
                    }
                </ul>
            </header>
        );
    }
}
const mapStateToProps = ({ users }) => ({ user: users?.user })
export default connect(mapStateToProps)(Header);
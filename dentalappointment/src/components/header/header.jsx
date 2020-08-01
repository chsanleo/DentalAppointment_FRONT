import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
                        <img src="" alt="logo" />
                    </NavLink>
                </div>

                <div>
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
                                <Link to="/askAcces">Ask for Access</Link>
                            </li>
                        }
                    </ul>
                </div>
            </header>
        );
    }
}
const mapStateToProps = ({ users }) => ({ user: users?.user })
export default connect(mapStateToProps)(Header);
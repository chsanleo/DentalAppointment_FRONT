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
                            <Link to="/profile"><img src="./profile.png" alt="profile" title="profile"/></Link>
                            <Link to="/agenda"><img src="./agenda.png" alt="agenda" title="agenda"/></Link>
                            <Link to="/logout"><img src="./logOut.png" alt="logOut" title="logOut"/></Link>
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
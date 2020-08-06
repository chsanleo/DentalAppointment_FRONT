import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-contact">
                    <h4>Contact us</h4>
                    <p>111-111-1111</p>
                    <Link to="/contactMail">Send us a mail</Link>
                </div>
                <div className="footer-links">
                    <h4>For customers</h4>
                    <Link to="/about">About us</Link>
                    <p>Privacy policy</p>
                </div>
            </footer>
        )
    }
}
export default Footer;
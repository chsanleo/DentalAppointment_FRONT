import React from 'react';

class AboutUS extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    render() {
        return (
            <div align="center">
                <h3 > About Us</h3>
                <p>App developed by: Christian Sanchez Leon</p>
                {/*<a href ="https://media.giphy.com/media/hqXsVAHXaMaOY/giphy.gif"><img src ="https://cdn130.picsart.com/234320453070212.png?r240x240" alt="IlikeIt"  target="_blank"  width="40" height="40"/></a>*/}
                <img src="https://avatars2.githubusercontent.com/u/65183792?s=400&u=5e2dc36e1830dd9429313f09a13737d88798c8e1&v=4"alt="Christian Sanchez" height="300"/>
                <a href ="https://github.com/chsanleo"><img src ="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_326384.png&f=1&nofb=1" alt="githubChristian"  target="_blank"  width="40"/></a>
                <a href ="https://www.linkedin.com/in/christian-sanchez-leon/"><img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Linkedin_Shiny_Icon.svg/256px-Linkedin_Shiny_Icon.svg.png" alt="githubChristian"  target="_blank"  width="40"/></a>
            </div>
        );
    }
}
export default AboutUS;
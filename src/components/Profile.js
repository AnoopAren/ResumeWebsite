import React from 'react';

const Profile = props => {
    const profileObj = props.profileData;
    return  <div>
                  <div className="profileImg"><img role="presentation" className="img-circle center-block" src={profileObj.picture} width="200" /></div>
                  <h1 className="text-center">{profileObj.name}</h1>
                  <h2 className="text-center">{profileObj.label}</h2>
                  <div className="divider"></div>
                  <ul className="list-unstyled contact-links text-center">
                    <li><i className="fa fa-lg fa-location-arrow"></i>{profileObj.location.city}, {profileObj.location.region}, {profileObj.location.countryCode}</li>
                    <li><i className="fa fa-lg fa-envelope"></i><a href="mailto:{profileObj.email}">{profileObj.email}</a></li>
                  </ul>
                  <div className="divider"></div>
                  <ul className="profileLinks list-inline text-center">
                  <li><a className="fa fa-facebook fa-2x" href={'https://www.facebook.com/'+profileObj.profiles[0].username}></a></li>
                    <li><a className="fa fa-linkedin fa-2x" href={'https://www.linkedin.com/in/'+profileObj.profiles[1].username}></a></li>
                    <li><a className="fa fa-github fa-2x" href={'https://github.com/'+profileObj.profiles[2].username}></a></li>
                  </ul>
                  <div className="divider"></div>
                  <ul className="profileLinks list-inline text-center">
                  <b className="text">Download Resume:</b>
                  <li><a className="fa fa-file-pdf-o fa-2x" href='./Anoop%20%20Agarwal%20Resume%201.pdf'></a></li>
                  </ul>

                  <div className="divider"></div>
                  <p>This site is build with <a href="https://facebook.github.io/react/">React</a> components. New site Development in progress which is in React,Redux.</p>
            </div>
};

export default Profile;

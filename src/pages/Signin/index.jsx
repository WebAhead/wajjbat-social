import React from 'react';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { makeStyles } from '@material-ui/core/styles';

// import { FormattedMessage, injectIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import './style.css';

const endPointUrl = process.env.REACT_APP_API_URL;
const facebookId = process.env.REACT_APP_FACEBOOK_ID;
const googleId = process.env.REACT_APP_GOOGLE_ID;

function Signin({ intl }) {
  const history = useHistory();
  const back = () => {
    history.goBack();
  };

  const responseFacebook = async response => {
    if (!response.id) return;
    const { name, email, id } = response;
    const { url } = response.picture.data;

    try {
      await axios.post(
        `${endPointUrl}/api/oauth/facebook`,
        {
          name,
          email,
          id,
          url
        },
        {
          withCredentials: true
        }
      );
      window.location = '/';
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const responseGoogle = async response => {
    if (!response.googleId) return;
    const { googleId: id, email, name, imageUrl: url } = response.profileObj;
    try {
      await axios.post(
        `${endPointUrl}/api/oauth/google`,
        {
          id,
          email,
          name,
          url
        },
        {
          withCredentials: true
        }
      );
      window.location = '/';
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const useStyles = makeStyles({
    root: { color: '#21b5a2', height: '40px', width: '40px' }
  });

  const classes = useStyles();

  //   const googleMessage = intl.formatMessage({ id: 'Login with Google' });
  //   const facebookMessage = intl.formatMessage({ id: 'Login with Facebook' });

  return (
    <>
      <div className="form-signin">
        <div className="form-container" style={{ marginTop: '15vh' }}>
          <img className="logo" src={require('../../assets/logos/logo.png')} alt="logo" />
          <h1 className="form-title">SignIn</h1>
          <div className="signin-form">
            <form className="form-items">
              <FacebookLogin
                appId={facebookId}
                fields="name,email,picture"
                callback={responseFacebook}
                autoLoad={false}
                disableMobileRedirect
                icon="fa-facebook"
                redirectUri={`${process.env.REACT_APP_URL}/signin`}
                textButton={'Login with Facebook'}
              />
              <br />
              <br />
              <GoogleLogin
                clientId={googleId}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                autoLoad={false}
                buttonText={'Login with Google'}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;

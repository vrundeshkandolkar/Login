import React, { Component } from 'react';
import SocialButton from './socialLogin'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSocialLogin = (user) => {
        console.log(user, this);
        this.props.history.replace('/home');
    };
      
    handleSocialLoginFailure = (err) => {
        console.error(err)
    };

    render() {
        const customHeader = {};
        customHeader['Test'] = 'test-header';

        return (
            <div className="login-box">
                <h2>LOGIN</h2>

                <SocialButton
                    provider='facebook'
                    appId='1329003187233913'
                    onLoginSuccess={this.handleSocialLogin}
                    onLoginFailure={this.handleSocialLoginFailure}
                    classname="facebook"
                >
                    Login with Facebook
                </SocialButton>

                <SocialButton
                    provider='google'
                    appId='550638670796-jcrtuh8grj98fppmsfqb63fbbf21hthl.apps.googleusercontent.com'
                    onLoginSuccess={this.handleSocialLogin}
                    onLoginFailure={this.handleSocialLoginFailure}
                    classname="google"
                >
                    Login with Google
                </SocialButton>
            </div>
        );
    }
}

// facebook app id '1329003187233913'
// Google app id '550638670796-jcrtuh8grj98fppmsfqb63fbbf21hthl.apps.googleusercontent.com'

export default Login;

import React from 'react'
import SocialLogin from 'react-social-login'

const Button = ({ children, triggerLogin, classname, ...props }) => (
	<button className={`social-button ${classname}-connect`} onClick={triggerLogin} {...props}>
		<span>{ children }</span>
	</button>
)

export default SocialLogin(Button)

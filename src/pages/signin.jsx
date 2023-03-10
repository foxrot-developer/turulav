import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/layout/header';
import PageHeader from '../component/layout/pageheader';
import FooterSection from '../component/layout/footer';

const title = "Register Now";

function SignInPage () {
    const [regName, setRegName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [regConPassword, setRegConPassword] = useState('');
  
    const handleRegNameChange = (event) => {
      setRegName(event.target.value);
    };
  
    const handleRegEmailChange = (event) => {
      setRegEmail(event.target.value);
    };
  
    const handleRegPasswordChange = (event) => {
      setRegPassword(event.target.value);
    };
  
    const handleRegConPasswordChange = (event) => {
      setRegConPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // handle form submission
    };
  
    
        return (
            <div>
                <Header />
                <PageHeader title={'Sign Up'} />
                <div className="login-section padding-tb">
                    <div className="container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <form className="account-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item01"
                                        value={regName}
                                        onChange={handleRegNameChange}
                                        placeholder="Your Name *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="email"
                                        id="item02"
                                        value={regEmail}
                                        onChange={handleRegEmailChange}
                                        placeholder="Your email *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        id="item03"
                                        value={regPassword}
                                        onChange={handleRegPasswordChange}
                                        placeholder="Password *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="conpassword"
                                        id="item04"
                                        value={regConPassword}
                                        onChange={handleRegConPasswordChange}
                                        placeholder="Confirm Password *"
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="d-block lab-btn"><span>Get Started Now</span></button>
                                </div>
                            </form>
                            <div className="account-bottom">
                                <span className="d-block cate pt-10">Are you a member? <Link to="/login">Login</Link></span>
                                {/**<span className="or"><span>or</span></span>
                                <h5 className="subtitle">{subtitle}</h5>
                                <ul className="social-media social-color justify-content-center d-flex lab-ul">
                                    <li>
                                        <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="pinterest"><i className="icofont-pinterest"></i></a>
                                    </li>
        </ul>**/}
                            </div>
                        </div>
                    </div>
                </div>
                <FooterSection />
            </div>
        );
    }


export default SignInPage;
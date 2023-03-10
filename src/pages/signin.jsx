import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/layout/header';
import PageHeader from '../component/layout/pageheader';
import FooterSection from '../component/layout/footer';

const title = "Register Now";

class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regName: '',
            regEmail: '',
            regPassword: '',
            regConPassword: '',
        };
    }

    render() {
        return (
            <div>
                <Header />
                <PageHeader title={'Sign Up'} />
                <div className="login-section padding-tb">
                    <div className="container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <form className="account-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item01"
                                        value={this.state.regName}
                                        onChange={(e) => { this.setState({ regName: e.target.value }); }}
                                        placeholder="Your Name *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="email"
                                        id="item02"
                                        value={this.state.regEmail}
                                        onChange={(e) => { this.setState({ regEmail: e.target.value }); }}
                                        placeholder="Your email *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        id="item03"
                                        value={this.state.regPassword}
                                        onChange={(e) => { this.setState({ regPassword: e.target.value }); }}
                                        placeholder="Password *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="conpassword"
                                        id="item04"
                                        value={this.state.regConPassword}
                                        onChange={(e) => { this.setState({ regConPassword: e.target.value }); }}
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
}

export default SignInPage;
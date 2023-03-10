import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/layout/header';
import PageHeader from '../component/layout/pageheader';
import FooterSection from '../component/layout/footer';

const title = "Login";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPass: '',
        };
    }
    render() {
        return (
            <div>
                <Header />
                <PageHeader title={'Log In'} />
                <div className="login-section padding-tb">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <form className="account-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item01"
                                        value={this.state.userName}
                                        onChange={(e) => { this.setState({ userName: e.target.value }); }}
                                        placeholder="User Name *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        id="item02"
                                        value={this.state.userPass}
                                        onChange={(e) => { this.setState({ userPass: e.target.value }); }}
                                        placeholder="Password *"
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                        <div className="checkgroup">
                                            <input type="checkbox" name="remember" id="remember" />
                                            <label htmlFor="remember">Remember Me</label>
                                        </div>
                                        <a href="#">Forget Password?</a>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="d-block lab-btn" type="submit"><span>Submit Now</span></button>
                                </div>
                            </form>
                            <div className="account-bottom">
                                <span className="d-block cate pt-10">Don’t Have any Account? <Link to="/signup"> Sign Up</Link></span>
                                {/**<span className="or"><span>or</span></span>
                                <h5 className="subtitle">{subtitle}</h5>
                                <ul className="social-media social-color lab-ul d-flex justify-content-center">
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

export default LoginPage;
import React, { Component } from 'react';

const title = "Leave a Comment";


class CommentRespond extends Component {
    constructor(props){
        super(props);
        this.state = {
            respondName: '',
            respondEmail: '',
            respondSubject: '',
            respondMassage: '',
        };
    }
    render() {
        return (
            <div id="respond" className="comment-respond">
                <div className="add-comment">
                    <div className="widget-title">
                        <h3>{title}</h3>
                    </div>
                    <form action="#" method="post" id="commentform" className="comment-form">
                        <input
                            type="text"
                            name="name"
                            id="item01"
                            value={this.state.respondName}
                            onChange={(e)=>{this.setState({respondName: e.target.value});}}
                            placeholder="Your Name *"
                        />
                        <input 
                            type="text"
                            name="email"
                            id="item02"
                            value={this.state.respondEmail}
                            onChange={(e)=>{this.setState({respondEmail: e.target.value});}}
                            placeholder="Your email *" 
                        />
                        <input 
                            type="text"
                            name="subject"
                            id="item03"
                            className="w-100"
                            value={this.state.respondSubject}
                            onChange={(e)=>{this.setState({respondSubject: e.target.value});}}
                            placeholder="Write a Subject"
                        />
                        <textarea 
                            rows="5" 
                            type="text"
                            id="item04"
                            name="message"
                            value={this.state.respondMassage}
                            onChange={(e)=>{this.setState({respondMassage: e.target.value});}}
                            placeholder="Your Message"
                        ></textarea>
                        <button className="lab-btn" type="submit"><span>Send Comment</span></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CommentRespond;
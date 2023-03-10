import React, { useState } from 'react';

const title = "Leave a Comment";


function CommentRespond () {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         respondName: '',
    //         respondEmail: '',
    //         respondSubject: '',
    //         respondMassage: '',
    //     };
    // }
    const [respondName, setRespondName] = useState('');
    const [respondEmail, setRespondEmail] = useState('');
    const [respondSubject, setRespondSubject] = useState('');
    const [respondMassage, setRespondMassage] = useState('');
  
    const handleResNameChange = (event) => {
        setRespondName(event.target.value);
    };
  
    const handleResEmailChange = (event) => {
        setRespondEmail(event.target.value);
    };
  
    const handleResSubjectChange = (event) => {
        setRespondSubject(event.target.value);
    };
  
    const handleResMessageChange = (event) => {
        setRespondMassage(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // handle form submission
    };
  
    
        return (
            <div id="respond" className="comment-respond">
                <div className="add-comment">
                    <div className="widget-title">
                        <h3>{title}</h3>
                    </div>
                    <form action="#" method="post" id="commentform" className="comment-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            id="item01"
                            value={respondName}
                            onChange={handleResNameChange}
                            placeholder="Your Name *"
                        />
                        <input 
                            type="text"
                            name="email"
                            id="item02"
                            value={respondEmail}
                            onChange={handleResEmailChange}
                            placeholder="Your email *" 
                        />
                        <input 
                            type="text"
                            name="subject"
                            id="item03"
                            className="w-100"
                            value={respondSubject}
                            onChange={handleResSubjectChange}
                            placeholder="Write a Subject"
                        />
                        <textarea 
                            rows="5" 
                            type="text"
                            id="item04"
                            name="message"
                            value={respondMassage}
                            onChange={handleResMessageChange}
                            placeholder="Your Message"
                        ></textarea>
                        <button className="lab-btn" type="submit"><span>Send Comment</span></button>
                    </form>
                </div>
            </div>
        );
    }


export default CommentRespond;
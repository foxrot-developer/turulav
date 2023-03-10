import React, {  Fragment } from 'react';
import { Link } from 'react-router-dom';

let AllMemberListContent = [
    {
        imgUrl: 'assets/images/member/01.jpg',
        imgAlt: 'member thumb',
        memName: 'Andrea Guido',
        memActive: 'Active 1 Day',
    },
    {
        imgUrl: 'assets/images/member/02.jpg',
        imgAlt: 'member thumb',
        memName: 'Rassel Hossain',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/03.jpg',
        imgAlt: 'member thumb',
        memName: 'Angel Zaara',
        memActive: 'Active 9 Day',
    },
    {
        imgUrl: 'assets/images/member/04.jpg',
        imgAlt: 'member thumb',
        memName: 'Rajib Raj',
        memActive: 'Active 15 Day',
    },
    {
        imgUrl: 'assets/images/member/05.jpg',
        imgAlt: 'member thumb',
        memName: 'Ummi Nishat',
        memActive: 'Active 10 Day',
    },
    {
        imgUrl: 'assets/images/member/06.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/07.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/08.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/09.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/10.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/11.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/12.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/13.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/14.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/15.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/16.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/17.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/18.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/19.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
    {
        imgUrl: 'assets/images/member/20.jpg',
        imgAlt: 'member thumb',
        memName: 'Sajahan Sagor',
        memActive: 'Active 2 Day',
    },
]


function MemberItemTwo (props) {
        const MemberCountItem = AllMemberListContent.slice(0 , props.itemNumber);
        return (
            <Fragment>
                {MemberCountItem.map((val, i) => (
                    <div className="col" key={i}>
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                <img 
                                    src={`${val.imgUrl}`} 
                                    alt={`${val.imgAlt}`}
                                />
                                </div>
                                <div className="lab-content">
                                    <h6><Link to="/profile">{val.memName}</Link> </h6>
                                    <p>{val.memActive}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Fragment>
        );
    }

 
export default MemberItemTwo;
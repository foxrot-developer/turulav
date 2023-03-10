import React from 'react';

function SectionHeader (props){

        return (
            <div className={ ( props.alignment ? props.alignment : "") }>
               { props.title }
                { props.subtitle }
            </div>
        )
    }


export default SectionHeader;
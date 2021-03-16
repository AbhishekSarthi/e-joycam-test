import React from 'react';

interface Props {
    startTime: string;
    endTime:string;
    webName: string;
    webLink: string;
    Radio:string;

  }

const List = ({ webName, startTime, endTime, webLink ,Radio}: Props): JSX.Element  => {
    return (
        <>

            <div className="webinar-list">
                <span className="webinar-span">Webname : <span className="black-span">{webName}</span></span>
                <span className="webinar-span">Start Time : <span className="black-span">{startTime}</span></span>
                <span className="webinar-span">End Time : <span className="black-span">{endTime}</span></span>

                <span className="webinar-span">
                    Link : <span className="black-span">{webLink}</span>
                </span>
                <span className="webinar-span"><span className="red-span">{Radio}</span></span>
            </div>
        
    
        </>
    );
};

export default List;

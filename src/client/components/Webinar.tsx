import React, { useState, useEffect} from 'react';
import List from './List';
import './webinar.scss'


interface Webs {
    id: number;
    WebName: string;
    StartTime: string;
    EndTime: string;
    radio:string;
    WebLink: string;
}

const Default_Webs : Webs[] = [];  

const Webinar = () :JSX.Element => {
    const [inputText, setInputText] = useState<string>('');
    const [inputStartTime, setInputStartTime] = useState<string>('');
    const [inputEndTime, setInputEndTime] = useState<string>('');
    const [webLink, setWebLink] = useState<string>('');
    const [webs, setWebs] = useState<Webs[]>(Default_Webs);
    const [radio,setRadio] = useState<string>('Not Verified');


    const inputTextHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setInputText(event.target.value);
    };

    const inputStartTimeHandler = ( e: React.ChangeEvent<HTMLInputElement>) => {
        setInputStartTime(e.currentTarget.value);
    };

    const inputEndTimeHandler = ( e:React.ChangeEvent<HTMLInputElement>) => {
        setInputEndTime(e.currentTarget.value);
    };

    const webLinkHandler = (e:React.FormEvent<HTMLInputElement>) => {
        setWebLink(e.currentTarget.value);
    };
    const onValueChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if(radio === "Verified"){
            setRadio('Not Verified');
        }
        else{
            setRadio('Verified');
        }
    }


    const submitHandler = () => {

        setWebs([
            ...webs,
            {
                WebName: inputText,
                StartTime: inputStartTime,
                EndTime: inputEndTime,
                WebLink: webLink,
                radio:radio,
                id: Math.random() * 1000,
            },
        ]);
        setInputText('');
        setInputStartTime('');
        setInputEndTime('');
        setWebLink('');
    };
    useEffect(() => {

    }, [webs]);
    return (
        <>
        <div className="special">
            <span className="span-margin">Webname : </span>
            <input className="webinar-input" value={inputText} onChange={(e) => inputTextHandler(e)} type="text" />
            <span className="span-margin">Start Time : </span>
            <input
            className="webinar-input"
            value={inputStartTime}
            onChange={(e)=>inputStartTimeHandler(e)}
            type="string"
            />
            <span className="span-margin">End Time : </span>
            <input
            className="webinar-input"
            value={inputEndTime}
            onChange={(e)=>inputEndTimeHandler(e)}
            type="string"
            />
            <span className="span-margin">Link : </span>
            <input className="webinar-input" value={webLink} onChange={(e) => webLinkHandler(e)} type="text" />
            <label>
            <input

type="checkbox"
value="Verified"
onChange={onValueChange}
/>
            Verified
            </label>

            <button
                className="webinar-button"
                onClick={submitHandler}
                type="submit"
                >
                Add Webinar
            </button>
        
                    </div>
            <div>
                {webs.map((web) => (
                    <List
                    key={web.id}
                    webName={web.WebName}
                    startTime={web.StartTime}
                    endTime={web.EndTime}
                    webLink={web.WebLink}
                    Radio={web.radio}
                    
                    />
                    
                    ))}
            </div>
                    </>
    );
};

export default Webinar;

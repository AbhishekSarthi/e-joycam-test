import React, { useState } from "react";


// interface Webs {
//   id: number;
//   WebName: string;
//   StartTime: string;
//   EndTime: string;
//   radio:string;
//   WebLink: string;
// }

interface Props {
  
  startTime: string;
  
  webName: string;
  webLink: string;
  Radio:string;

}

const WebinarShow = ({ webName, startTime, webLink ,Radio}: Props) :JSX.Element => {
  // const initialState : Webs[]= [];
  // const [details, setDetails] = useState<Webs[]>(initialState);

  return (
    <>

          <div className="card special-card">
            <img className="setImage" src={startTime} />
            <ul  className="nextline">
            <li className="biggText">{webName}</li>
            <li>{Radio}</li>
            <li><h5><a href={webLink} >{webLink}</a></h5></li>

            </ul>
          </div>

      {/* // })} */}
    </>
  );
};

export default WebinarShow;

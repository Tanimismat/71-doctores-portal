import React from 'react';

const InfoCard = ({img, cardTitle}) => {
  return (
        <div className="flex flex-col card lg:card-side bg-accent text-white shadow-xl ml-8 ">
            <figure>
                <img className='pl-4' src={img} alt="Album"/>
            </figure>
  <div className="card-body">
    <h2 className="card-title">{cardTitle}</h2>
    <p>Click the button to listen on .</p>
  </div>
</div>
    );
};

export default InfoCard;
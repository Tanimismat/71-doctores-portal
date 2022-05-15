import React from 'react';

const Service = ({ service }) => {
    console.log(service)
    const { name, slots } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span>{slots[0]}</span>
                            :
                            <span>No slots available</span>
                    }
                </p>
                <p>{slots.length} {slots.length < 1 ? 'space' : 'spaces'} available</p>
                <div className="card-actions justify-end">
                    <button disabled={slots.length === 0} className="btn btn-primary">Book appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
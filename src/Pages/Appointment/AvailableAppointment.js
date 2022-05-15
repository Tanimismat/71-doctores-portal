import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';


const AvailableAppointment = ({ date }) => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h2>Available appointment {format(date, 'PP')}</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    services.map(service =>
                        // console.log(service)
                        <Service
                            key={service._id}
                            service={service}
                        ></Service>
                    )
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;
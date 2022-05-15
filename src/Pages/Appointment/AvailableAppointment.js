import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';


const AvailableAppointment = ({ date }) => {

    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

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
                            setTreatment={setTreatment}
                        ></Service>
                    )
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;
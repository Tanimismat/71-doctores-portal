import React from 'react';
import InfoCard from './InfoCard';
import clock from '../assets/icons/clock.svg'
import marker from '../assets/icons/marker.svg'
import phone from '../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='flex flex-wrap gap-4  w-full m-6'>
            <InfoCard cardTitle={'Opening Hours'} img={clock}></InfoCard>
            <InfoCard cardTitle={'Visit our location'} img={marker}></InfoCard>
            <InfoCard cardTitle={'Contact us now'} img={phone}></InfoCard>
        </div>
    );
};

export default Info;
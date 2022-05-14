import React from 'react';
import fluoride from '../assets/images/fluoride.png';
import cavity from '../assets/images/cavity.png';
import whitening from '../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            img: fluoride,
            name: 'Fluoride Treatment',
            description: '............'
        },
        {
            _id: 2,
            img: fluoride,
            name: 'Cavity filling',
            description: '............'
        },
        {
            _id: 3,
            img: fluoride,
            name: 'Teeth Whitening',
            description: '............'
        }
    ]
    return (
        <div>
            <h3>Our Services</h3>
            <h1>Services We Provide</h1>
            <div data-theme="dark" className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
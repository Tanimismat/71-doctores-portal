import React from 'react';
import PrimaryButton from './Shared/PrimaryButton';
import doctor from '../assets/images/doctor.png'

const Appointment = () => {
    return (
        <section className='flex justify-center items-center'>
            <div>
                <img className='mt-[-100]' src={doctor} alt="" />
            </div>
            <div>
                <h3>Appointment</h3>
                <h2>Make an appointment today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consequuntur quasi, eos quibusdam tempora eaque amet omnis beatae autem excepturi ratione eum velit veritatis pariatur a ad explicabo molestias sed magni voluptatem aperiam rem architecto dolore. Ex nihil assumenda eligendi.</p>
                <PrimaryButton></PrimaryButton>
            </div>

        </section>
    );
};

export default Appointment;
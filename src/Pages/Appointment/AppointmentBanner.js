import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" alt='img' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>You have selected {format(date, 'PP')}</p>
                </div>

            </div>
        </div>
    );
};

export default AppointmentBanner;
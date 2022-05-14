import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <h3>Appointment</h3>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
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
        </div>
    );
};

export default Appointment;
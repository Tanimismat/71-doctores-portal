import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment;

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking for: {treatment.name}</h3>

                    <form className='grid grid-cols-1 gap-3'>

                        <input type="text" readOnly value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />

                        <select class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                            {/* <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option> */}
                        </select>

                        <input type="text" name='name' placeholder="Name" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" class="btn btn-primary w-full max-w-xs" />

                    </form>

                    {/* <div className="modal-action">
                        <label for="booking-modal" className="btn">Yay!</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
import React from 'react';

const Testimonial = ({ img, name, description, position }) => {
    return (
        <div className=' px-3'>
            <div className=" bg-orange-200 w-full rounded-lg p-4 mb-6 shadow sm:inline-block">
                <div className="flex items-start text-left">
                    <div className="flex-shrink-0">
                        <div className="inline-block relative">
                            <a href="/" className="block relative">
                                <img alt="profil" src={img} className="mx-auto object-cover rounded-full h-16 w-16 " />
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1">
                                <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div className="ml-6">
                        <p className="flex items-baseline">
                            <span className="text-black font-bold">
                                {name}
                            </span>
                        </p>
                        <p className='text-sm font-semibold'>{position}</p>
                        <div className="flex items-center mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 1792 1792">
                                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                </path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 1792 1792">
                                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                </path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 1792 1792">
                                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                </path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 1792 1792">
                                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                </path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 1792 1792">
                                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                </path>
                            </svg>
                        </div>
                        <div className="mt-3">
                            <p className="mt-1 max-w-xs text-black text-md font-semibold">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
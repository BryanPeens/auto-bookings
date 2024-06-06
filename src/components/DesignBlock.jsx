import React from 'react';
import carRentalImage from '../assets/images/carInfo.png'

const DesignBlock = () => {
  return (
    <div className="container my-24 mx-auto md:px-6 text-white">
      {/* Section: Rental Block */}
      <section className="mb-2">
        <div className="block rounded-lg bg-blue-400 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-blue-600 padding-x">
          <div className="flex flex-wrap items-center">
            <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
              <img src={carRentalImage} alt="car" className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="mb-6 pb-2 text-4xl font-bold">
                    Discover Our Premium Auto Rental Services!
                </h2>
                <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                  At AutoBook, we're dedicated to providing an unmatched auto rental experience. 
                  Whether you're traveling for business or pleasure, we bring convenience right to your doorstep,
                  ensuring a seamless journey from start to finish.
                  <br />
                  <br />
                  Our commitment to excellence guarantees that every interaction with us exceeds your expectations. 
                  From booking your rental to the final handover of the keys, our friendly and professional approach
                  ensures your satisfaction every step of the way.
                  <br />
                  <br />
                  With our Premium Auto Rental Services, our packages always include:
                </p>

                {/* Info Area */}
                <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">Comprehensive Vehicle Selection</h3>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>Wide Range of Vehicles to Suit Your Needs
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>Well-Maintained Fleet for Your Safety
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>Options for Every Budget
                    </p>
                    {/* Add other vehicle selection details here */}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">Convenient Rental Experience</h3>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>Flexible Pickup and Drop-off Locations
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>24/7 Customer Support for Your Peace of Mind
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>Simple and Transparent Rental Terms
                    </p>
                    {/* Add other rental experience details here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Rental Block */}
    </div>
    /* Container for demo purpose */
  );
};

export default DesignBlock;

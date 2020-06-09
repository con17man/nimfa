import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const orderStepsData = {
  title: 'Order steps',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  steps: [
    { id: 1, name: 'Step 1', icon: 'fas,phone-alt' },
    { id: 2, name: 'Step 2', icon: 'fas,credit-card' },
    { id: 3, name: 'Step 3', icon: 'fas,shipping-fast' },
    { id: 4, name: 'Step 4', icon: 'fas,box-open' }
  ]
};

const OrderSteps = () => {
  return(
    <div className="order-steps w-full py-12">
      <div className="steps-list container mx-auto text-center">
        <p className="list-title font-montserrat-alternates font-semibold text-4xl tracking-wider">{orderStepsData.title}</p>
        <p className="list-description font-light mx-auto max-w-2xl py-2">{orderStepsData.description}</p>
        <div className="list-items flex mx-auto max-w-2xl">
          {orderStepsData.steps.map((step, i) => {
            return  <div key={i+1}
                      className="list-item adv-item-img h-32 w-32 my-6 rounded-full shadow-xl mx-auto bg-red hover:bg-blue flex justify-center items-center text-5xl text-white duration-300 ease-in-out transition">
                        <FontAwesomeIcon icon={step.icon.split(',')} />
                    </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderSteps;
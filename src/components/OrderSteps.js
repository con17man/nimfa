import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { slugify } from './Helpers';

const OrderSteps = () => {
  const queryData = useStaticQuery(graphql`
    query orderSteps {
      steps {
        orderSteps {
          description
          title
          steps {
            icon {
              childImageSharp {
                fluid(maxWidth: 192) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            id
            name
          }
        }
      }
    }
  `);

  const orderSteps = queryData.steps.orderSteps;

  return(
    <div className="order-steps w-full py-12" id="cum-comand">
      <div className="steps-list container mx-auto text-center">
        <div className="list-title font-montserrat-alternates font-semibold text-4xl tracking-wider">{orderSteps.title}</div>
        <div className="list-description font-light mx-auto max-w-2xl py-2" dangerouslySetInnerHTML={{__html: orderSteps.description}} />
        <div className="list-items flex flex-wrap justify-center mx-auto max-w-3xl">
          {orderSteps.steps.map((step, i) => {
            return  <div key={i+1} className="px-6">
                      <div className="list-item adv-item-img h-32 w-32 my-6 rounded-full shadow-xl mx-auto bg-orange-500 hover:bg-orange-700 flex justify-center items-center text-5xl text-white duration-300 ease-in-out transition">
                          <Img fluid={step.icon.childImageSharp.fluid} className="w-24" alt={`cum comand, ${slugify(step.name.toLowerCase())}`} />
                      </div>
                      <p className="uppercase font-medium tracking-wide">{step.name}</p>
                    </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderSteps;
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
    <div className="order-steps w-full py-12">
      <div className="steps-list container mx-auto text-center">
        <p className="list-title font-montserrat-alternates font-semibold text-4xl tracking-wider">{orderSteps.title}</p>
        <p className="list-description font-light mx-auto max-w-2xl py-2">{orderSteps.description}</p>
        <div className="list-items flex justify-center mx-auto max-w-3xl">
          {orderSteps.steps.map((step, i) => {
            return  <div key={i+1} className="px-6">
                      <div className="list-item adv-item-img h-32 w-32 my-6 rounded-full shadow-xl mx-auto bg-orange flex justify-center items-center text-5xl text-white duration-300 ease-in-out transition">
                          <Img fluid={step.icon.childImageSharp.fluid} className="w-24" />
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
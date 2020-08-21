import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';


const QuickLinks = () => {

  const { navLinks: { quickLinks } } = useStaticQuery(graphql`
    query quickLinks {
      navLinks {
        quickLinks {
          url
          name
          img {
            childImageSharp {
              fluid(maxWidth: 500, toFormat: WEBP) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);


  const changeBG = (el, bgImg) => {
    if (el.style.backgroundImage) {
      el.style.backgroundImage = '';
    } else {
      el.style.backgroundImage = `url(${bgImg})`;
    }
  };

  /**
   * @TODO - refactor the above method, get rid off the redundant code
   */

  return(
    <div className="quick-links-wrapper w-full">
      <div className="container mx-auto relative grid grid-flow-col grid-cols-3 gap-2 text-center md:px-16 -mt-20">
        {quickLinks.map((section, i) => {
          return  <Link to={section.url} key={i+1} className="relative block overflow-hidden">
                    <div className="bg-cover bg-center py-56 hover:bg-blue hover:text-white uppercase font-semibold text-xl text-white tracking-wider"
                        tabIndex={-1} role="link"
                        style={{backgroundImage: `url(${section.img.childImageSharp.fluid.src})`}}
                        onFocus={(el) => changeBG(el.target, section.img.childImageSharp.fluid.src)}
                        onBlur={(el) => changeBG(el.target, section.img.childImageSharp.fluid.src)}
                        onMouseOut={(el) => changeBG(el.target, section.img.childImageSharp.fluid.src)}
                        onMouseOver={(el) => changeBG(el.target, section.img.childImageSharp.fluid.src)}>
                      {section.name}
                    </div>
                  </Link>
        })}
      </div>
    </div>
  );
};

export default QuickLinks;
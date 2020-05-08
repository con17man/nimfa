import React, { Component } from 'react';
import { Link } from "gatsby";

export class Navbar extends Component {
    render() {

        const NAVBAR_CATEGORIES = [
            {
                name: 'company',
                url: '/company',
                children: [
                    { name: 'About Us', url: '/about-us' },
                    { name: 'Advantages', url: '/advantages' },
                ]
            },
            {
                name: 'products',
                url: '/products',
                children: [
                    {
                        name: 'Pipes',
                        url: '/pipes',
                        children: [
                            { name: 'Standarde EN & DIN', url: 'standard-en_din'},
                            { name: 'Standard ASME', url: 'standard-en_din'},
                        ]
                    },
                    {
                        name: 'Fittings',
                        url: '/fittings',
                        children: [
                            { name: 'Normal', url: 'normal-fittings'},
                            { name: 'Forged', url: 'forged-fittings'},
                        ]
                    },
                    {
                        name: 'Flanges',
                        url: '/flanges',
                        children: [
                            { name: 'EN & DIN', url: 'en_din-flanges'},
                            { name: 'ASME/API', url: 'asme_api-flanges'},
                            { name: 'Special', url: 'special-flanges'},
                        ]
                    }
                ]
            },
            { name: 'services', url: '/services', children: [] },
            { name: 'industries', url: '/industries', children: [] }
        ];

        return (
            <div className="header-navbar divide-x-2 divide-white">
                {NAVBAR_CATEGORIES.map((category, index) => {
                    return <Link to={category.url} key={index + 1}
                      className="pr-2 pl-3 uppercase hover:text-red font-bold">
                        {category.name}
                    </Link>
                })}
            </div>
        )
    }
}

export default Navbar;

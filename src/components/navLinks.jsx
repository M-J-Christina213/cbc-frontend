import react from 'react';

export default function NavLinks() {
    const Links = [
         {name: 'Home'},
        {name: 'Shop'},
        {name: 'Makeup'},
        {name: 'Skincare'},
        {name: 'Haircare'},
        {name: 'Fragrances'},
        {name: 'Bath & Body'},
        {name: 'New Arrivals'},
        {name: 'Special Offers'},
        {name: 'Gifts'},
        {name: 'About Us'},
        {name: 'Contact Us'},

    ]

    return (
        <>
          {Links.map((Link)=> (
            <div>
                <div>
                   <h1> {Link.name}</h1>
                </div>
            </div>
          )
        )}

        </>
    )
    
    }


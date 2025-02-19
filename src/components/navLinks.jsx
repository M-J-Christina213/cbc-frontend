import React from 'react';

export default function NavLinks() {
    const Links = [
         

    ]

    return (
        <>
          {Links.map((Link)=> (
            <div>
                <div className='px-3 text-left'>
                   <h1> {Link.name}</h1>
                </div>
            </div>
          )
        )}

        </>
    )
    
    }


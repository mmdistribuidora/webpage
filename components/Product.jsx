import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      {/*<Link href={`/product/${slug.current}`}>*/}
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={260}
            height={260}
            className="product-image p-4"
          />
          <p className="product-name text-center">{name}</p>
        </div>
      {/*</Link>*/}
    </div>
  )
}

export default Product
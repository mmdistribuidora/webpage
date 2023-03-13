import React from 'react';
import {client} from '../lib/client';
import { Product,Carousel,HomeGrid,FeatureBanner,Navbar,FooterBanner,} from '../components';


const Inicio = ({products,galleryData,categoryData,companyData,featuresData}) => {
  return (
    <>  
        <Navbar company={companyData}/>

        <Carousel gallery={galleryData && galleryData[0] } />

        <div className='products-heading'>
            <h2>Explora Nuestros Productos</h2>
            <p className="font-weight-bold">¡Y si no los tenemos los conseguimos!</p>
        </div>

        <HomeGrid category={categoryData} />

        <div className='products-heading'>
            <h2>Lo Más Vendido</h2>
            <p>¡A los mejores precios!</p>
        </div>

        <div className='products-container mx-auto '>
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>

        <FeatureBanner features={featuresData} />

        <FooterBanner company={companyData}/>
    </>
  )
}



export const getServerSideProps = async () => {
  
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  const galleryQuery = '*[_type == "gallery"]';
  const galleryData = await client.fetch(galleryQuery);
  const categoryQuery = '*[_type == "category"]';
  const categoryData = await client.fetch(categoryQuery);
  const companyQuery = '*[_type == "company"]';
  const companyData = await client.fetch(companyQuery);
  const featuresQuery = '*[_type == "features"]';
  const featuresData = await client.fetch(featuresQuery);

  return{
    props: {products, bannerData, galleryData,categoryData, companyData,featuresData,}
  }
}
export default Inicio
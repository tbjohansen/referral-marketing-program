import React from 'react';
import ProductCard from '../components/common/ProductCard';
import Orders from './orders/Orders';
import ProductOverview from './products/ProductOverview';

const Home = () => {

  return <div className="">
    <h4 className='py-2 text-primaryColor font-medium text-lg'>Products</h4>
    <div className='grid grid-cols-4 gap-4 py-3 px-12'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  </div>;
};

export default Home;
import React from 'react'
import ProductCards from './ProductCards'
import products from "../../data/products.json"


const TrendingProducts = () => {
   const [visibleProducts, setVisibleProducts] = React.useState(8);
   const loadMoreProducts = () => {
    setVisibleProducts(prevCount => prevCount + 4);
   }
    
  return (
    <section className='section__container product__container'>
      <h2 className='section__header'>TrendingProducts</h2>
      <p className='section__subheader mb-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae placeat eum, aperiam amet earum nihil.</p>

      <div className="mt-12">
      <ProductCards products={products.slice(0, visibleProducts)} />
      </div>

      <div className='product__btn'>
{
    visibleProducts < products.length && (
        <button className='btn' onClick={loadMoreProducts} >Load More</button>
    )
}
      </div>
    </section>
  )
}

export default TrendingProducts

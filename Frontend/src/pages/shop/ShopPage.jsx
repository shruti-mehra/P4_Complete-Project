import React, { useEffect, useState } from 'react'

import productsData from "../../data/products.json"
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';
// import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi';

const filters = {
    categories: ['all', 'accessories', 'dress', 'jewellery', 'cosmetics'],
    colors: ['all', 'black', 'gold', 'blue', 'silver', 'beige', 'green'],
    priceRanges: [
        {label: 'Under $50', min: 0, max: 50},
        {label: '$50 - $100', min: 50, max: 100},
        {label: '$100 - $200', min: 100, max: 200},
        {label: '$200 or above', min: 200, max: Infinity}
    ]
};

const ShopPage = () => {
   const [products, setProducts] = useState(productsData);
    const [filtersState, setFiltersState] = useState({
        categories: 'all',
        colors: 'all',
        priceRange : ''
    });

    // const [currentPage, setCurrentPage] = useState(1);
    // const [ProductsPerPage] = useState(8);

    // const { category, color, priceRange} = filtersState;
    // const [minPrice, maxPrice] = priceRange.split('-').map(Number);

    // const {data: {products = [], totalPages, totalProducts} = {}, error, isLoading } = useFetchAllProductsQuery({
    //     category: category !== 'all' ? category: '',
    //      color: color !== 'all' ? color: '',
    //       minPrice: isNaN(minPrice) ? '' : minPrice,
    //       maxPrice: isNaN(maxPrice) ? '' : maxPrice,
    //       page :currentPage, 
    //       limit : ProductsPerPage,
    // })
const applyFilters = () => {
    let filteredProducts = productsData;

    if(filtersState.category && filtersState.category !== 'all'){
        filteredProducts = filteredProducts.filter(product => product.category=== filtersState.category)
    }
    if(filtersState.color && filtersState.color !== 'all'){
        filteredProducts = filteredProducts.filter(product => product.color === filtersState.color)
    }
    if(filtersState.priceRange){
        const [minPrice, maxPrice] = filtersState.priceRange.split('-').map(Number);
        filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice)
    }
    setProducts(filteredProducts)
}

useEffect(() => {
    applyFilters()
}, [filtersState])

const clearFilters = () => {
    setFilterState({
        categories: 'all',
        colors: 'all',
        priceRange : ''
    })
} 
const handlePageChange = (pageNumber) => {
    if(pageNumber > 0 && pageNumber <= totalPages){
        setCurrentPage(pageNumber)
    }
}


//if(isLoading) return <div>Loading...</div>
// if(error) return <div>Error loading products.</div>

//const startProduct = (currentPage - 1) = ProductPerPage + 1;
//const endProduct = startProduct + products.length - 1;

  return (
    <>
      <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>Shop Page</h2>
        <p className='section__subheader'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit doloremque placeat qui exercitationem commodi.</p>
     </section>

     <section className='section__container'>
<div className='flex flex-col md:flex-row md:gap-12 gap-8'>
    
    <ShopFiltering filters={filters} filtersState={filtersState} setFiltersState={setFiltersState} clearFilters={clearFilters} />




    <div>
        <h3 className='text-xl font-medium mb-4'>Products Available: {products.length}</h3>
        <ProductCards products={products}/>


        <div 
        
        onClick={() => handlePageChange(currentPage-1)}
        className='mt-6 flex justify-center'>
            <button className='px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2'> Previous</button>
           {/* {
            [...Array(totalPages)].map((_, index) => (
                <button key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 ${currrentPage === index + 1 ? 'bg-blue-500 text-white ' : 'bg-gray-300 text-gray-700'} rounded-md mx-1
                `}
                >{index +1}

                </button>
            ))
           } */}


            <button
            
                    onClick={() => handlePageChange(currentPage+1)}

            className='px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2'>Next</button>
        </div>
    </div>
</div>
     </section>
    </>
  )
}

export default ShopPage

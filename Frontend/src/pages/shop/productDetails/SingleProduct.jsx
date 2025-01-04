import React from 'react'
import {  Link, useParams } from 'react-router-dom'
import RatingStars from '../../../components/RatingStars';
import { useDispatch } from 'react-redux';
import { useFetchProductByIdQuery } from '../../../redux/features/products/productsApi';
import ReviewsCard from '../reviews/ReviewsCard';


const SingleProduct = () => {
    const {id} = useParams();
    // console.log(id)

    const dispatch = useDispatch();
    const {data, error, isLoading} = useFetchProductByIdQuery(id);
    //console.log(data);
    
    const SingleProduct = data?.product || {};
    const productReviews = data?.reviews || [];

const handleAddToCart = (product) => {
    dispatch(addToCart(product))
}


    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error loading product details.</p>



  return (
    <>
      <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>Single Product Page</h2>
        <div className='section__subheader space-x-2'>
            <span className='hover:text-primary'> <Link to ="/">Home </Link> </span>
            <i className="ri-arrow-right-s-line"></i>
            <span className='hover:text-primary'> <Link to ="/shop">Shop  </Link> </span>
            <i className="ri-arrow-right-s-line"></i>
            <span className='hover:text-primary'>{SingleProduct.name}</span>
        </div>
     </section>

     <section className='section__container mt-8'>

        <div className='flex flex-col items-center md:flex-row gap-8'>
            <div className='md:1/2 w-full'>
                <img src={SingleProduct?.image} alt="" 
                
                className='rounded-md w-full h-auto '/>
            </div>
            <div className='md:w-1/2 w-full'>
<h3 className='text-2xl font-semibold mb-4'>${SingleProduct?.name}</h3>
<p className='text-xl text-primary mb-4 space-x-1'>${SingleProduct?.price} 
{SingleProduct?.oldPrice && <s className='ml-1'>${SingleProduct?.oldPrice}</s>}
</p>
<p className='text-gray-400 mb-4'>{SingleProduct?.description}</p>

<div className='flex flex-col space-y-2'>
    <p><strong>Category: </strong>{SingleProduct?.category}</p>
    <p><strong>Color: </strong>{SingleProduct?.color}</p>
    <div className='flex gap-1 items-center'>
        <strong>Rating: </strong>
        <RatingStars rating={SingleProduct?.rating}/>
    </div>
    
</div>
<button
onClick={(e) => {
    e.stopPropagation();
    handleAddToCart(SingleProduct);
}}
className='mt-6 px-6 py-3 bg-primary text-white rounded-md'>
    Add to Cart
</button>
            </div>
        </div>

     </section>


     <section className='section__container mt-8'>
        <ReviewsCard productReviews={productReviews}/>

     </section>
    </>
  )
}

export default SingleProduct

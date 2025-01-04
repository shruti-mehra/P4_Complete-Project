import React from 'react'
import commentorIcon from "../../../assets/avatar.png"
import { formatDate } from '../../../utils/formatedate'
import RatingStars from '../../../components/RatingStars'

const ReviewsCard = ({productReviews}) => {
  return (
    <div className='my-6 bg-white p-8'>
      <div>
{
    Reviews.length > 0 ? (<div>
        <h3 className='text-lg font-medium'>All comments.....</h3>
        <div>
            {
                Reviews.app((review, index) => (
                    <div key={index} className='mt-4'>
                        <div className='flex gap-4 items-center'>
                            <img src={commentorIcon} alt="" classname='size-14' />
                            <div className='space-y-1'>
                                <p className='text-lg font-medium underline capitalize underline-offset-4 text-blue-400'>{review?.userId?.username}</p>
                                <p className='text-[12px] italic'>{formatDate(review?.updatedAt)}</p>
                                <RatingStars rating={review?.rating}/>
                            
                            </div>
                
                        </div>
                        <div className='text-gray-600 mt-5 border p-8'>
                            <p className='md:w-4/5'>{review?.comment}</p>
                        </div>


                    </div>
                ))
            }
        </div>
        </div>) : <p>No reviews yet!</p>
        
        
        
        
}
      </div>
    </div>
  )
}

export default ReviewsCard


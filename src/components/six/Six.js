import './Six.css'
import review1 from '../../images/review1.jpg'
import review2 from '../../images/review2.jpg'
import review3 from '../../images/review3.jpg'

export function Six()
{
    return (
        <div className='six'> 
            <h5 className='four-h5'>TESTIMONIALS</h5>
            <h4 className='four-h4'>HEAR IT FROM THEM</h4>
            <div className='reviews'>
                
                <div className='review'>
                    <div className='six-icons'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half"></i>
                    </div>
                    <p>Spotless rental scooter, great customer service and attention to detail, Ill be usipg them again next time.</p>
                    <img src={review1} alt="image" className='card-img-top' />
                    <h6 className='name'>Ram<br></br>2 April 2024</h6>
                </div>
                <div className='review'>
                    <div className='six-icons'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half"></i>
                    </div>
                    <p>Spotless rental scooter, great customer service and attention to detail, Ill be usipg them again next time.</p>
                    <img src={review2} alt="image" className='card-img-top' />
                    <h6 className='name'>Karthik<br></br>2 April 2024</h6>
                </div>
                <div className='review'>
                    <div className='six-icons'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half"></i>
                    </div>
                    <p>Spotless rental scooter, great customer service and attention to detail, Ill be usipg them again next time.</p>
                    <img src={review3} alt="image" className='card-img-top' />
                    <h6 className='name'>Karthika<br></br>2 April 2024</h6>
                </div>
            </div>
        </div>
    );
}
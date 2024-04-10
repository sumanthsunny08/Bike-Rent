import './Threetwo.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export function Threetwo({cart,setshow,setcart})
{
    return (
        <div className='fourtwop'>
            <div className='fourtwoc1' >
                <div>
                    <img src={cart[0].img} alt="image" className='card-img-top' />
                </div>
                <div className='fourtwoc12'>
                    <h3  className="card-title" >{cart[0].title}</h3>
                    <div className='fourtwoc121'>
                        <div>
                            <h4><span>${cart[0].price}/</span>Day</h4>
                        </div>
                        <div>
                            <div className='foursix-icons'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half"></i>
                            </div>
                        </div>
                    </div>
                    <p>The {cart[0].title} motorcycle, with its timeless design and unwavering spirit, continues its journey, supported by a growing community. Whether you're a seasoned rider or captivated by its iconic silhouette, remember: the {cart[0].title} is more than just a motorcycle; it's a legend on two wheels, destined to endure for generations.</p>
                    <div className='fourtwoc122'>
                        <div><i class="fa-solid fa-car"></i><span> Model {cart[0].id}</span></div>
                        <div><i class="fa-solid fa-gear"></i><span> Automatic</span></div>
                        <div><i class="fa-solid fa-stopwatch"></i><span> 20Kmpl</span></div>
                        <div><i class="fa-solid fa-location-dot"></i><span> GPS Navigation</span></div>
                        <div><i class="fa-solid fa-wheelchair"></i><span> Heated Seats</span></div>
                    </div>
                    <a  className="btnn btn" onClick={()=>{setshow(true);setcart([])}} >HOME <i class="fa-solid fa-house"></i></a>
                </div>
            </div>
            <div className='fourtwoc2' >
                <div className='fourtwoc21'>
                    <h3>BOOKING DETAILS</h3>
                    <form>
                     <div className='form1'>   
                    <input type='text' placeholder='Email Address' name='email' id='email'/>
                    <input type='password' placeholder='Password' name='Password' id='Password'/>
                    </div>
                    <div className='form1'>  
                    <input type='text' placeholder='From Address' name='From Address' id='From Address'/>
                    <input type='text' placeholder='To Address' name='To Address' id='To Address'/>
                    </div>
                    <div className='form1'>  
                    <input type='number' placeholder='1 Person' name='person' id='person'/>
                    <input type='number' placeholder='1 luggage' name='luggage' id='luggage'/>
                    </div>
                    <div className='form1'>  
                    <input type='DOB' placeholder='mm/dd/yyyy' name='mm/dd/yyyy' id='mm/dd/yyyy'/>
                    <input type='text' placeholder='Journey Time' name='Journey Time' id='Journey Time'/>
                    </div>
                    </form>
                </div>
                <div className='fourtwoc22'>
                    <h3>PAYMENT METHOD</h3>
                    <ul>
                        <li>Direct Bank Transfer</li>
                        <li>Cheque Payment</li>
                        <li>Credit Card</li>
                        <li>Paypal</li>
                    </ul>
                    <a  className="btnn btn">Reserve Now</a>
                </div>
            </div>
        </div>
    )
}
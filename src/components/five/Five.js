import './Five.css'
import city1 from '../../images/city-1.jpg'
import city2 from '../../images/city-2.jpg'
import city3 from '../../images/city-3.jpg'
import city4 from '../../images/city-4.jpg'
import city5 from '../../images/city-5.jpg'
import city6 from '../../images/city-6.jpg'
import Carousel from 'react-bootstrap/Carousel';

export function Five()
{
    return (
        <div className='five'>
        <h5 className='four-h5'>TOP CITIES IN MALTA</h5>
        <h4 className='four-h4'>TOP RENTAL DESTINATION</h4>
        <Carousel>
          <Carousel.Item interval={1000}>
          <img src={city1} alt="image"/>
          </Carousel.Item>
          <Carousel.Item>
          <img src={city4} alt="image"/>
          </Carousel.Item>
          <Carousel.Item>
          <img src={city5} alt="image"/>
          </Carousel.Item>

        </Carousel>
        </div>
      );
}
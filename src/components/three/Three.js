import './Three.css'
import p1 from '../../images/bike-1.png'
import p2 from '../../images/bike-2.png'
import p3 from '../../images/bike-3.png'
import p4 from '../../images/bike-4.png'
import p5 from '../../images/bike-5.png'
import p6 from '../../images/bike-6.png'
import p7 from '../../images/bike-7.png'
import p8 from '../../images/bike-8.png'
import {list1} from '../../data.js';
import {Three2} from './Three2.js';

export function Three({handleClick,setshow})
{
    return (
        <div className='bike'>
            <h5 className='bikes-h5'>LAST MINUTE OFFER</h5>
            <h4 className='bikes-h4'>MOTORCYCLES AND SCOOTERS FOR RENT</h4>
        <div className='bikes'>
            {
              list1.map((item)=>(
                <Three2 item={item} handleClick={handleClick} setshow={setshow} ></Three2>
              ))
            }
        </div>
        </div>
    );
}
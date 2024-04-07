import './Two.css'
import home from '../../images/home.png'
import helmet from '../../images/helmet.png'
export function Two()
{
    return (
        <div className='home' >
            <h1 className='home-title'>Harley Davidson</h1>
            <div className='home-content'>
                <div className='home-box'>
                    <div className='home-data border-home' >
                        <h3>Electric Motor</h3>
                        <h2>Revelation</h2>
                    </div>
                    <div className='home-data border-home' >
                        <h3>Torque</h3>
                        <h2>86 Ft-Lb</h2>
                    </div>
                    <div className='home-data border-home' >
                        <h3>Horse Power</h3>
                        <h2>105 Hp / X78 Kw</h2>
                    </div>
                </div>
                <img src={home} alt="image"className='img1' />
            </div>
            <div className='home-link'>
                <button ><i class="fa-regular fa-user"></i>  Find a Dealer</button>
                <button ><i class="fa-solid fa-motorcycle"></i> Test  Drive</button>
            </div>
        </div>
    );
}
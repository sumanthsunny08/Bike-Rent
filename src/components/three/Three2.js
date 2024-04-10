import './Three.css'


export function Three2({item,handleClick,setshow})
{
    const {id,title,price,img}=item;

    return (
            <div className="card">
                <img src={img} alt="image" className='card-img-top' />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">ADVENTURE</p>
                  <a  className="btn btn-primary" onClick={()=>{handleClick(item) ; setshow(false) }} >BOOK BIKE</a>
                  <h6>Free Cancellation</h6>
                  <h4><span>${price}/</span>Day</h4>
                </div>
            </div>
    )
}
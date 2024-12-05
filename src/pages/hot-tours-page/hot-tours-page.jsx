import './style.css'
import {hotels} from "../../shared/hotels";

const HotToursPage = () => {
  return (
    <div>
        <div className='hot-tours'>
            <div className='header'>
                <p>
                    OZIN JINA
                </p>
                <button>
                    <img src="/icons/menu.png" alt=""/>
                </button>
            </div>
            <h1 className='hot-tours-title'>
                Горящие <br />
                умра туры
            </h1>
        </div>
        <div className='tours'>
            {hotels.map((tour) => (
                <div className='tour-item'>
                    <div className='tour-img'>
                        <img src={tour.img} alt=""/>
                    </div>
                    <div className='tour-title'>
                        <h2>{tour.name}</h2>
                        <p>-20%</p>
                    </div>
                    <div className='tour-subtitle'>
                        <p>{tour.transfer}</p>
                    </div>
                    <div className='tour-reviews'>
                        <div className='tour-reviews-stars'>
                            <img src="/icons/star.png" alt=""/>
                            <img src="/icons/star.png" alt=""/>
                            <img src="/icons/star.png" alt=""/>
                            <img src="/icons/star.png" alt=""/>
                            <img src="/icons/star.png" alt=""/>
                        </div>
                        <p className='tour-reviews-count'>({tour.revCount} отзывов)</p>
                    </div>
                    <div className='tour-location'>
                        <img src="/icons/mekka.png" alt=""/>
                        <p>{tour.inMekka}</p>
                    </div>
                    <div className='tour-location'>
                        <img src="/icons/mekka.png" alt=""/>
                        <p>{tour.inMedina}</p>
                    </div>
                    <div className='tour-footer'>
                        <div className='tour-footer-info'>
                            <h2>{tour.daysCount.six.days} {tour.daysCount.eight?.days && ' - ' + tour.daysCount.eight?.days} ночей</h2>

                            <p>перелет включен</p>
                        </div>
                        <div className='tour-footer-price'>
                            <p>от {tour.prices.sixDays.fourPeople ? tour.prices.sixDays.fourPeople : tour.prices.sixDays.threePeople}$</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HotToursPage

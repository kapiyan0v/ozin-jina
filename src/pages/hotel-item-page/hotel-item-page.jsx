import './style.css'
import {Divider} from "@ozen-ui/kit/Divider";
import {useNavigate} from "react-router";

function HotelItemPage() {
    const navigate = useNavigate()

  return (
    <div>
        <div className='comfort-list'>
            <div className='comfort-list-back'
                 onClick={() => navigate(-1)}
            >
                <img src="/icons/nav_back.png" alt="back"/>
            </div>
            <div>
                <h2>Алматы-Джидда</h2>
                <p>1 - 16 нояб, 15 ночей, 3 паломника</p>
            </div>
        </div>

        <div className='cities'>
            <div className='city-item'>
                <p>Мекка</p>
            </div>
            <div className='city-item'>
                <p>Медина</p>
            </div>
        </div>

        <div className="tour-info">
            <img src="/img/bg.png" alt=""/>
            <div className="tour-body">
                <div className="title">
                    <div>
                        <h2>Marriot 5*</h2>
                        <p>Мекка, Саудовская Аравия</p>
                    </div>
                    <div>
                        <img src="/icons/fav_outline.png" alt=""/>
                        <img src="/icons/export.png" alt=""/>
                    </div>
                </div>
                <div className='tour-reviews'>
                    <div className='tour-reviews-stars'>
                        <img src="/icons/star.png" alt=""/>
                        <img src="/icons/star.png" alt=""/>
                        <img src="/icons/star.png" alt=""/>
                        <img src="/icons/star.png" alt=""/>
                        <img src="/icons/star.png" alt=""/>
                    </div>
                    <p className='tour-reviews-count'>(345 отзывов)</p>
                </div>
                <div className='tour-location'>
                    <img src="/icons/mekka.png" alt=""/>
                    <p>700 м. от мечети Аль-Харам</p>
                </div>

                <div className='tour-dates'>
                    <div className='tour-dates-info'>
                        <h4>1 нояб-16 нояб, 15 ночей</h4>
                        <p>перелет включен</p>
                    </div>
                    <button>
                        <p><span>450 000 ₸</span></p>
                        <p>Забронировать</p>
                    </button>
                </div>

                <div className="tour-data">
                    <h2>
                        Что входит в стоимость тура?
                    </h2>
                    <p>
                        В тур входит проживание, трансфер, питание на
                        выбор, перелет, мед. страховка, поддержка 24/7,
                        служба гида, фирменный мерч
                    </p>
                    <div className='tour-data-more'>
                        <p>Подробнее</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HotelItemPage

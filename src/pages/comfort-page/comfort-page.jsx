import './style.css'
import {Divider} from "@ozen-ui/kit/Divider";

function ComfortPage() {
  return (
    <div>
        <div className='comfort'>
            <div className='header'>
                <p>
                    OZIN JINA
                </p>
                <button>
                    <span>123</span>
                </button>
            </div>
            <h1 className='comfort-title'>
                Комфортные <br />
                умра туры
            </h1>
        </div>

        <div className='filter-card'>
            <div className='filter-item'>
                <div className='filter-icon'>
                    <img src="/icons/location.png" alt="location"/>
                </div>
                <div>
                    <p className='filter-subtitle'>Откуда</p>
                    <p className='filter-title'>Алматы</p>
                </div>
            </div>
            <div className='divider'></div>
            <div className='filter-item'>
                <div className='filter-icon'>
                    <img src="/icons/calendar.png" alt="location"/>
                </div>
                <div>
                    <p className='filter-subtitle'>Даты поездки</p>
                    <p className='filter-title'>1 - 16 нояб, 15 ночей</p>
                </div>
            </div>
            <div className='filter-item'>
                <div className='filter-icon'>
                    <img src="/icons/persons.png" alt="location"/>
                </div>
                <div>
                    <p className='filter-title'>2 взрослых, 1 ребенок</p>
                </div>
            </div>

            <button className='filter-button'>Найти туры</button>
        </div>

        <div className='best-offers'>
            <p className='best-offers-title'>Лучшие предложения по турам</p>
            <div className='offers'>
                <div className='offers-item'>
                    <img src="/img/item.jpg" alt="item"/>
                    <p className='offers-title'>Marriot 5*</p>
                    <p className='offers-subtitle'>от 450 000 ₸</p>
                </div>
                <div className='offers-item'>
                    <img src="/img/item.jpg" alt="item"/>
                    <p className='offers-title'>Marriot 5*</p>
                    <p className='offers-subtitle'>от 450 000 ₸</p>
                </div>
                <div className='offers-item'>
                    <img src="/img/item.jpg" alt="item"/>
                    <p className='offers-title'>Marriot 5*</p>
                    <p className='offers-subtitle'>от 450 000 ₸</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ComfortPage

import './style.css'
import {useNavigate} from "react-router";

function ComfortListPage() {
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

        <div className='search-filter'>
            <div className='search-filter-item'>
                <p>Вылет ± 3 дня</p>
            </div>
            <div className='search-filter-item'>
                Популярные
                <img src="/icons/dropdown.png" alt=""/>
            </div>
            <div className='search-filter-item'>
                <p>Цена</p>
            </div>
        </div>

        <div className='results'>
            <div className='tour-item' onClick={() => navigate('/tour-info')}>
                <div className='tour-img'>
                    <img src="/img/item.jpg" alt=""/>
                </div>
                <div className='tour-title'>
                    <h2>Marriot 5*</h2>
                </div>
                <div className='tour-subtitle'>
                    <p>Мекка, Саудовская Аравия</p>
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
                <div className='tour-footer'>
                    <div className='tour-footer-info'>
                        <h2>1 нояб-16 нояб, 15 ночей</h2>
                        <p>перелет включен</p>
                    </div>
                    <div className='tour-footer-price'>
                        <p>450 000 ₸</p>
                    </div>
                </div>
            </div>
            <div className='tour-item'>
                <div className='tour-img'>
                    <img src="/img/item.jpg" alt=""/>
                </div>
                <div className='tour-title'>
                    <h2>Marriot 5*</h2>
                </div>
                <div className='tour-subtitle'>
                    <p>Мекка, Саудовская Аравия</p>
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
                <div className='tour-footer'>
                    <div className='tour-footer-info'>
                        <h2>1 нояб-16 нояб, 15 ночей</h2>
                        <p>перелет включен</p>
                    </div>
                    <div className='tour-footer-price'>
                        <p>450 000 ₸</p>
                    </div>
                </div>
            </div>
            <div className='tour-item'>
                <div className='tour-img'>
                    <img src="/img/item.jpg" alt=""/>
                </div>
                <div className='tour-title'>
                    <h2>Marriot 5*</h2>
                </div>
                <div className='tour-subtitle'>
                    <p>Мекка, Саудовская Аравия</p>
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
                <div className='tour-footer'>
                    <div className='tour-footer-info'>
                        <h2>1 нояб-16 нояб, 15 ночей</h2>
                        <p>перелет включен</p>
                    </div>
                    <div className='tour-footer-price'>
                        <p>450 000 ₸</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ComfortListPage

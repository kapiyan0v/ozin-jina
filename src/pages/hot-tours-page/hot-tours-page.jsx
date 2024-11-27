import './style.css'

const HotToursPage = () => {
  return (
    <div>
        <div className='hot-tours'>
            <div className='header'>
                <p>
                    OZIN JINA
                </p>
                <button>
                    <span>123</span>
                </button>
            </div>
            <h1 className='hot-tours-title'>
                Горящие <br />
                умра туры
            </h1>
        </div>

        <div className='tours'>
            <div className='tour-item'>
                <div className='tour-img'>
                    <img src="/img/item.jpg" alt=""/>
                </div>
                <div className='tour-title'>
                    <h2>Marriot 5*</h2>
                    <p>-20%</p>
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
                    <p>-20%</p>
                </div>
                <div className='tour-subtitle'>
                    <p>Мекка, Саудовская Аравия</p>
                </div>
                <div className='tour-reviews'>
                    <div>
                        <img src="/icons/star.png" alt=""/>
                        <img src="/icons/star.png" alt=""/>
                        <img src="/icons/star.png" alt=""/>
                        <img src="/icons/star.png" alt=""/>
                        <img src="/icons/star.png" alt=""/>
                    </div>
                    <p>(345 отзывов)</p>
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
                    <p>-20%</p>
                </div>
                <div className='tour-subtitle'>
                    <p>Мекка, Саудовская Аравия</p>
                </div>
                <div className='tour-reviews'>
                    <div>
                        <img src="/icons/star.png" alt=""/>
                        <img src="/icons/star.png" alt=""/>
                        <img src="/icons/star.png" alt=""/>
                        <img src="/icons/star.png" alt=""/>
                        <img src="/icons/star.png" alt=""/>
                    </div>
                    <p>(345 отзывов)</p>
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

export default HotToursPage

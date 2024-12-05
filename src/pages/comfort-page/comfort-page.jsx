import './style.css'
import {Navigate, useNavigate} from "react-router";
import {citiesList, hotels} from "../../shared/hotels";
import {useState} from "react";
import {Input} from "@ozen-ui/kit/Input";
import {SearchIcon} from "@ozen-ui/icons";

function ComfortPage() {
    const navigate = useNavigate()
    const [citiesFilter, setCitiesFilter] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    const filteredData = citiesList.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const [cityResult, setCityResult] = useState(filteredData[0])

      return (
        <div>
            <div className='comfort'>
                <div className='header'>
                    <p>
                        OZIN JINA
                    </p>
                    <button>
                        <img src="/icons/menu.png" alt=""/>
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
                        <p className='filter-title' onClick={() => setCitiesFilter(true)}>{cityResult}</p>
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

                <button
                    className='filter-button'
                    onClick={() => navigate('/list')}
                >
                    Найти туры
                </button>
            </div>

            <div className='best-offers'>
                <p className='best-offers-title'>Лучшие предложения по турам</p>
                <div className='offers'>
                    {hotels.map((item) => (
                        <div className='offers-item'>
                            <img src={item.img} alt="item"/>
                            <p className='offers-title'>{item.name}</p>
                            <p className='offers-subtitle'>от {item.prices.sixDays.threePeople} $</p>
                        </div>
                    ))}
                </div>
            </div>
            {citiesFilter &&
                <div className='modal' >
                    <div className='modal-inner'>
                        <div className="modal-header">
                            <h2>Откуда</h2>
                            <img src='/icons/close.png' onClick={() => setCitiesFilter(!citiesFilter)}  alt='close' />
                        </div>
                        <Input
                            onChange={(event) => setSearchQuery(event.target.value)}
                            className='modal-search'
                            renderLeft={SearchIcon}
                            placeholder='Город'
                            size='s'
                            style={{ backgroundColor: '#F4F4F4'}}
                        />

                        <h1>Выберите город</h1>
                        <div className='cities-filter'>
                            {filteredData.map((item) => (
                                <p
                                    onClick={() => {
                                        setCityResult(item)
                                        setCitiesFilter(!citiesFilter)
                                    }}
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </div>
      )
}

export default ComfortPage

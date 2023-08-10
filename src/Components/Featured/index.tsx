import './style.scss'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Découvrez les meilleurs ouvrages écrits par des auteurs congolais.</h1>
                <div className="search">
                    <div className="search-input">
                        <img src="./images/search-icon.png" alt="" />
                        <input type="text" name="" placeholder='Essayer "Congo, émergent"' />
                    </div>
                    <button>Rechercher</button>
                </div>
                <div className="popular">
                    <span>Populaire : </span>
                    <button>Science</button>
                    <button>Lettres</button>
                    <button>Droit civil</button>
                    <button>Technologie</button>
                </div>
            </div>
            <div className="right">
                <img src="./images/featured-girl.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured
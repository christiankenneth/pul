import './style.scss'

import BookCard from '../../Components/BookCard'
import Featured from '../../Components/Featured'
import TrustedBy from '../../Components/TrustedBy'
import EventCard from '../../Components/EventCard'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <div className="cards">
        <h1>Dernières parutions</h1>
        <div className="container">
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
        </div>
      </div>

      <div className="features">
        <h1>Soumettre un document</h1>
        <div className="container">
          <div className="left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita pariatur nam facilis nihil labore ratione natus tenetur debitis, provident exercitationem facere inventore eos nostrum officia eveniet totam hic voluptatum quas.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita pariatur nam facilis nihil labore ratione natus tenetur debitis, provident exercitationem facere inventore eos nostrum officia eveniet totam hic voluptatum quas.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita pariatur nam facilis nihil labore ratione natus tenetur debitis, provident exercitationem facere inventore eos nostrum officia eveniet totam hic voluptatum quas.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita pariatur nam facilis nihil labore ratione natus tenetur debitis, provident exercitationem facere inventore eos nostrum officia eveniet totam hic voluptatum quas.
          </div>
          <div className="right">
            <img src="./images/pen-writing.png" alt="" />
          </div>
        </div>
      </div>

      <div className="cards">
        <h1>Évènements</h1>
        <div className="container">
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
        </div>
      </div>

      <div className="features">
        <h1>Les PUL</h1>
        <div className="container">
          <div className="left">
            <img src="./images/featured-man.png" alt="" />
          </div>
          <div className="right">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita pariatur nam facilis nihil labore ratione natus tenetur debitis, provident exercitationem facere inventore eos nostrum officia eveniet totam hic voluptatum quas.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita pariatur nam facilis nihil labore ratione natus tenetur debitis, provident exercitationem facere inventore eos nostrum officia eveniet totam hic voluptatum quas.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita pariatur nam facilis nihil labore ratione natus tenetur debitis, provident exercitationem facere inventore eos nostrum officia eveniet totam hic voluptatum quas.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita pariatur nam facilis nihil labore ratione natus tenetur debitis, provident exercitationem facere inventore eos nostrum officia eveniet totam hic voluptatum quas. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus saepe provident necessitatibus tenetur asperiores commodi qui amet cum nesciunt aspernatur nostrum accusamus, iste quibusdam nihil expedita illo. Hic, voluptates iure.
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home

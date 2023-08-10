import { Link } from 'react-router-dom'
import './style.scss'

const EventCard = () => {
  return (
    <Link to="/">
        <div className="event-card">
            <img src="./images/event.jpg" alt="" />
        </div>
    </Link>
  )
}

export default EventCard
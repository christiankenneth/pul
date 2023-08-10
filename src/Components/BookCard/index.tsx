import { Link } from 'react-router-dom'
import './style.scss'

const BookCard = () => {
  return (
    <Link to="/">
        <div className="book-card">
            <img src="./images/book.jpg" alt="" />
        </div>
    </Link>
  )
}

export default BookCard
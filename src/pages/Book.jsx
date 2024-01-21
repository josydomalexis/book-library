import React from "react"
import { Link } from "react-router-dom"
import "./Book.css"

function Book(props) {
  const d = new Date(props.pubDate)
  return (
    <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-8 offset-sm-0 offset-2'>
      <Link className="bookLink" to={`book/${props.title}/${props.id}`}>
        <div className='book'>
          <div className='book-inner-wrapper d-flex align-items-stretch'>
            <div className='book-bind-mark'>
              <div className='book-bind-shadow'></div>
            </div>
            <div className='book-front-detail d-flex align-items-center'>
              <div className='book-detail-wrapper'>
                <h5 className='book-front-title'>{props.title}</h5>
                <div className='book-front-author fw-bold mb-2'>by {props.author}</div>
                <div className='book-front-isbn fw-lighter'>{props.isbn}</div>
                <div className='book-front-pub-date fw-lighter'>{d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Book

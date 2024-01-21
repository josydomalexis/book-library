import Navbar from '../Navbar'
import Book from '../Book'
import Footer from '../Footer'
import { HimalayaTopWrapper } from "../../App"
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function index() {
  const { books, authors } = useContext(HimalayaTopWrapper)
  const handleSearch = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <Navbar />
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12 col-md-6 offset-md-3'>
            <form className="d-flex" role="search" onSubmit={(e) => handleSearch(e)}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>

      </div>
      <div className='container min-vh-100'>
        <div className='row g-3 books-container'>
          {books.length !== 0 ?
            books.map((book, index) => {
              const pubDate = new Date(book.pub_date)
              return <Book key={index} title={book.title} id={book.id} author={authors[+book.author - 1].name} isbn={book.isbn} pubDate={pubDate} />
            }) : <p className='text-center my-5'>Loading...</p>
          }


        </div>
        <nav className="mt-5">
          <ul className="pagination justify-content-center">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
      <Footer />

    </>
  )
}

export default index



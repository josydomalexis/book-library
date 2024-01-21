
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetBook } from '../../config/api/API';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { HimalayaTopWrapper } from "../../App"
import { useContext } from 'react'

function index() {
  const { GetBook, setBook, book, authors } = useContext(HimalayaTopWrapper)
  let { bookId } = useParams();
  useEffect(() => GetBook(bookId, setBook), [])
  const d = new Date(book.pub_date)
  return (
    <div>
      <Navbar />
      <div className='container mt-5' >
        <h1>{book.title}</h1>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><span className='fs-4'>{book.isbn}</span></li>
          <li className='list-group-item'><span className='fs-5'>{ }</span></li>
          <li className='list-group-item'><span className='fs-5'>{d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()}</span></li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default index

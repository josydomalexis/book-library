import Footer from "../Footer";
import Navbar from "../Navbar";
import { PostBook } from "../../config/api/API"
import { useContext } from "react"
import { HimalayaTopWrapper } from "../../App"
import { useNavigate } from "react-router-dom";

function index() {
  const navigate = useNavigate();
  const { authors } = useContext(HimalayaTopWrapper)

  const handleForm = (e) => {
    e.preventDefault();
    const CuD = new Date();
    const pub = new Date(e.target[3].value);
    console.log(pub)
    PostBook({
      createdAt: CuD.getTime(),
      title: e.target[0].value,
      author: e.target[1].value,
      isbn: e.target[2].value,
      pub_date: pub.getTime()
    })
    navigate("/admin")
  }
  return (
    <>
      <Navbar />
      <div className="container min-vh-100">
        <div className="row">
          <div className="col-8 offset-2">
            <form onSubmit={(e) => handleForm(e)}>
              <h1 className="my-5 text-center">Add Books</h1>
              <div className="form-floating mb-3">
                <input
                  id="book-Title"
                  name="Title"
                  type="text"
                  className="form-control"
                  placeholder="Book Title?"
                  aria-label="Book Title?"
                  aria-describedby="basic-addon1"
                />
                <label htmlFor="book-Title">Title</label>
              </div>

              <div className="form-floating mb-3">
                <select className="form-select" id="book-Author" name="Author" aria-label="Author name">
                  <option selected>Open this select menu</option>
                  {authors.map((author, index) => {
                    return (
                      <option key={index} value={author.id}>{author.name}</option>
                    )
                  })}
                </select>

                <label htmlFor="book-Author">Author</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  id="book-ISBN"
                  name="ISBN"
                  type="number"
                  className="form-control"
                  placeholder="ISBN"
                  aria-label="ISBN"
                  aria-describedby="basic-addon1"
                />
                <label htmlFor="book-ISBN">ISBN</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  id="book-pub-date"
                  name="pub-date"
                  type="date"
                  className="form-control"
                  placeholder="pub-date"
                  aria-label="pub-date"
                  aria-describedby="basic-addon1"
                />
                <label htmlFor="book-pub-date">Published Date</label>
              </div>
              <div className="d-grid col-4 mx-auto">
                <button className="btn btn-primary btn-lg" type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default index;

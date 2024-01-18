import Footer from "../Footer";
import Navbar from "../Navbar";
import { PostAuthor } from "../../config/api/API"

function index() {
  const handleForm = (e) => {
    e.preventDefault();
    const D = new Date();
    let currentDate = D.getTime();
    PostAuthor({
      createdAt: currentDate,
      name: e.target[0].value,
      dob: D.getTime(e.target[1].value),
      bio: e.target[2].value,
    })
  }
  return (
    <>
      <Navbar />
      <div className="container min-vh-100">
        <div className="row">
          <div className="col-8 offset-2">
            <form onSubmit={(e) => handleForm(e)}>
              <h1 className="my-5 text-center">Add Author</h1>
              <div className="form-floating mb-3">
                <input
                  id="author-name"
                  name="author-name"
                  type="text"
                  className="form-control"
                  placeholder="Book Title?"
                  aria-label="Book Title?"
                  aria-describedby="basic-addon1"
                />
                <label htmlFor="book-Title">Title</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  id="author-dob"
                  name="author-dob"
                  type="date"
                  className="form-control"
                  placeholder="author-dob"
                  aria-label="author-dob"
                  aria-describedby="basic-addon1"
                />
                <label htmlFor="author-dob">Date of Birth</label>
              </div>

              <div className="form-floating">
                <textarea className="form-control" placeholder="Biography" id="author-bio" name="author-bio" style="height: 100px"></textarea>
                <label htmlFor="author-bio">Biography</label>
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

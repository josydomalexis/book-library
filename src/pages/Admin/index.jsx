import Footer from "../Footer"
import Navbar from "../Navbar"
import "./index.css"

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="container">
          <div className="p-3 mt-5 list-container border rounded">
            <h3 className="border-bottom p-3">Book List <button className="btn btn-primary mx-2 float-end">Add Book</button></h3>
            <table className="table book-list">
              <thead>
                <tr>
                  <th className="book-id" scope="col">#</th>
                  <th className="book-name" scope="col">Name</th>
                  <th className="book-author" scope="col">Author</th>
                  <th className="book-isbn" scope="col">ISBN</th>
                  <th className="book-pub-date" scope="col">Publication Date</th>
                  <th className="book-actions" scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-3 mt-5 list-container border rounded">
            <h3 className="border-bottom p-3">Author List <button className="btn btn-warning mx-2 float-end">Add Author</button></h3>
            <table className="table author-list">
              <thead>
                <tr>
                  <th className="author-id" scope="col">#</th>
                  <th className="author-name" scope="col">Name</th>
                  <th className="author-dob" scope="col">Author</th>
                  <th className="author-bio" scope="col">ISBN</th>
                  <th className="book-actions" scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Otto</td>

                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Otto</td>

                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Otto</td>
                  <td>@mdo</td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard

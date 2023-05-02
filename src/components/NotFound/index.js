import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="container-home">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="img-notfound-sizing"
      />
      <h1 className="heading-notfound">Lost Your Way?</h1>
      <p className="para-not-found">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </>
)
export default NotFound

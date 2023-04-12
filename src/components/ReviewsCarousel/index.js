// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeCarouselIndex: 0}

  leftArrow = () => {
    const {activeCarouselIndex} = this.state

    if (activeCarouselIndex > 0) {
      this.setState(prevState => ({
        activeCarouselIndex: prevState.activeCarouselIndex - 1,
      }))
    }
  }

  rightArrow = () => {
    const {reviewsList} = this.props
    const {activeCarouselIndex} = this.state

    if (activeCarouselIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeCarouselIndex: prevState.activeCarouselIndex + 1,
      }))
    }
  }

  getReviews = reviewsList => {
    const {activeCarouselIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeCarouselIndex
    ]

    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    return (
      <div className="app-container">
        <button
          type="button"
          data-testid="leftArrow"
          className="button"
          onClick={this.leftArrow}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow-image"
          />
        </button>
        {this.getReviews(reviewsList)}
        <button
          className="button"
          data-testid="rightArrow"
          type="button"
          onClick={this.rightArrow}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel

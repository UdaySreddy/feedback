import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  isButtonClicked = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    console.log(emojis, loveEmojiUrl)
    const {isClicked} = this.state
    console.log(isClicked)

    return (
      <>
        {isClicked ? (
          <div className="thanksContainer">
            <img className="image2" src={loveEmojiUrl} alt="love emoji" />
            <h1>Thank You</h1>
            <p>Thank you for your feed back we will try to imprive</p>
          </div>
        ) : (
          <div className="maincontainer">
            <h1>
              How satisfied are you with our <br />
              customer support performance?
            </h1>
            <ul className="mainList">
              {emojis.map(each => (
                <li className="listElement" key={each.id}>
                  <button
                    type="button"
                    className="buttonn1"
                    onClick={this.isButtonClicked}
                  >
                    <img
                      className="image1"
                      src={each.imageUrl}
                      alt={each.name}
                    />
                    <p>{each.name}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default Feedback

import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import './index.css'

const RegistrationForm = () => {
  const history = useHistory()
  const [dataList, setDataList] = useState([])
  const [mobileNumber, setMobileNumber] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  const handleChange = event => {
    const {name, value} = event.target

    setFormData({
      ...formData,
      mobileNumber,
      [name]: value,
    })
  }

  const formSubmit = event => {
    event.preventDefault()
    setDataList([...dataList, formData])
    history.push('/game-level')

    console.log(formData)
  }

  return (
    <div
      className="registration-form-main-container"
      data-testid="register-form"
    >
      <div>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fwallpapers%2Fsquid-game-3b.jpg&f=1&nofb=1&ipt=d4687750c91663fe1cb4acb4efab8e1d19c6f7cf10c8990208ba0ae5e249c0c1&ipo=images"
          alt="registration-game-avatar"
          className="registration-game-avatar"
        />
      </div>
      <div className="form-container">
        <form onSubmit={formSubmit}>
          <h1 className="register-heading">Register</h1>
          <div className="form-input-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="form-input-field"
            />
          </div>
          <div className="form-input-container">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <PhoneInput
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={mobileNumber}
              onChange={phone => setMobileNumber(phone)}
              placeholder="Enter your mobile number"
              country="in"
              required
              countryCodeEditable={false}
              className="phoneInput"
            />
          </div>
          <div className="form-input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="form-input-field"
            />
          </div>
          <div>
            <button
              type="submit"
              className="registration-submit-button"
              data-testid="register"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm

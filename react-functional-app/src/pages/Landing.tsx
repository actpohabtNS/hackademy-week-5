/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import '../style/landing/index.css'
import logo from '../img/logo.png'

const Landing = () => {
  return (
    <div>
      <div id="top-section">
        <div className="header bg-primary grid">
          <div className="header__logo d-flex align-items-center">
            <img src={logo} alt="logo" width="64" />
          </div>
          <div className="header__name text-white desktop-h2 d-flex align-items-center">Interactive Map</div>
          <div className="header__links d-flex justify-content-between align-items-center text-super-light desktop-h5">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Contact us</a>
          </div>
        </div>

        <div className="top-section__body grid">
          <div className="ts__picture">
          </div>

          <div className="ts__text d-flex flex-column align-items-start justify-content-center">
            <span className="d-block text-primary desktop-h3">Feel the true world of</span>
            <span className="d-block text-primary desktop-h1">Navigation</span>
            <p className="ts__p text-primary desktop-p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros vitae iaculis consectetur. Donec pulvinar ante eu tincidunt efficitur. Sed ut feugiat nisi.
            </p>

            <a href="#" className="ts__button button button-primary text-white mobile-label">Try now</a>
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="heading text-primary desktop-h2">Who are we?</div>

        <div className="about__inner grid">
          <div className="about__text d-flex flex-column justify-content-between">
            <p className="text-primary desktop-p1">We are young and innovative team, who wants to change the way we interact with maps.</p>

            <div className="about__principles">
              <span className="about__principles-heading text-primary desktop-h3 d-block">Our key principles are:</span>

              <div className="about__principles-block d-flex flex-column flex-wrap">
                <span className="text-primary desktop-accent4">Trust</span>
                <span className="text-primary desktop-accent4">Believe</span>
                <span className="text-primary desktop-accent4">Innovate</span>
                <span className="text-primary desktop-accent4">Love</span>
                <span className="text-primary desktop-accent4">Change</span>
                <span className="text-primary desktop-accent4">Relieve</span>
              </div>
            </div>
          </div>

          <div className="about__picture">
          </div>
        </div>
      </div>

      <div className="offer-section">
        <div className="heading text-primary desktop-h2">What do we offer?</div>

        <div className="offer__inner d-flex flex-column flex-wrap">
          <div className="offer-card">
            <div className="card__img img-create"></div>
            <div className="card__text">
              <span className="desktop-h3">Creating</span>
              <span className="desktop-p2">You are able to create  a route between any two points.</span>
            </div>
          </div>
          <div className="offer-card">
            <div className="card__img img-save"></div>
            <div className="card__text">
              <h3 className="desktop-h3">Saving</h3>
              <p className="desktop-p2">Once created route can be saved for future reuse.</p>
            </div>
          </div>
          <div className="offer-card">
            <div className="card__img img-share"></div>
            <div className="card__text">
              <h3 className="desktop-h3">Sharing</h3>
              <p className="desktop-p2">Share your routes with family, friends and co-workers.</p>
            </div>
          </div>
          <div className="offer-card">
            <div className="card__img img-enjoy"></div>
            <div className="card__text justify-content-center align-items-start">
              <h3 className="desktop-h3">Enjoy?</h3>
              <a href="#" className="button button-primary text-white mobile-label">Give it a try</a>
            </div>
          </div>
        </div>
      </div>

      <div className="price-section">
        <div className="header bg-primary d-flex justify-content-between align-items-center">
          <span className="desktop-h2 text-white">Pricing</span>
          <select className="form-select price__location mobile-label select-light" aria-label="Location select">
            <option value="am">America</option>
            <option selected value="eu">Europe</option>
            <option value="as">Asia</option>
          </select>
        </div>

        <div className="price__body d-flex">
          <div className="price__card default-shadow">
            <span className="desktop-h2 price-num">0 $</span>
            <h3 className="desktop-h3 price-name">Free edition</h3>
            <div className="price__features-list desktop-accent4">
              <span>Create</span>
              <span>Save</span>
              <span>Share</span>
            </div>
            <a href="#" className="button button-primary text-white mobile-label">Try now</a>
          </div>
          <div className="price__card default-shadow">
            <span className="desktop-h2 price-num">15 $</span>
            <h3 className="desktop-h3 price-name">Plus edition</h3>
            <div className="price__features-list desktop-accent4">
              <span>Free edition</span>
              <span>Like</span>
              <span>Collaborate</span>
            </div>
            <a href="#" className="button button-primary text-white mobile-label">Buy now</a>
          </div>
          <div className="price__card default-shadow">
            <span className="desktop-h2 price-num">99 $</span>
            <h3 className="desktop-h3 price-name">Genius edition</h3>
            <div className="price__features-list desktop-accent4">
              <span>Plus edition</span>
              <span>Big brain</span>
              <span>Less money</span>
            </div>
            <a href="#" className="button button-primary text-white mobile-label">Buy now</a>
          </div>
        </div>
      </div>

      <div className="contact-us-section bg-primary text-white">
        <div className="heading-white desktop-h2">Contact us</div>

        <form className="contact-us__body d-flex">
          <div className="cs__email-block">
            <label htmlFor="email" className="desktop-p1">Your email</label>
            <input placeholder="example@ex.com" type="email" className="form-control input input-light mobile-label" id="email" />
          </div>
          <div className="cs__message-block">
            <label htmlFor="message" className="desktop-p1">Your message</label>
            <input placeholder="Type here..." className="form-control input input-light mobile-label" id="message" />
          </div>
          <div className="cs__button-block">
            <label className="desktop-p1">We wait for you!</label>
            <button type="submit" className="button button-light text-white mobile-label">Buy now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Landing;
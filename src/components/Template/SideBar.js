import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/church.jpg`} alt="" />
      </Link>
      <header>
        <h2>나사렛사람 교회</h2>
        <h2>Korean Church of THE NAZARENE</h2>
        <p><a href="mailto:kcnazarene@gmail.com">kcnazarene@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>헌금 Offering</h2>
      <p>아래 버튼을 클릭하시어 헌금을 드리실 수 있습니다. Click the button below for online offering.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;

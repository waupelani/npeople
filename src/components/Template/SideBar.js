import React from 'react';
import { Link } from 'react-router-dom';

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
      <p><a target="_blank" rel="noopener noreferrer" href="https://tithe.ly/give_new/www/#/tithely/give-one-time/1908082">Online Offering</a>
      </p>
    </section>
  </section>
);

export default SideBar;

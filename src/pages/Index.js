import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Michael D'Angelo's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">예배와 모임 SERVICES & Meetings</Link></h2>
          <p>
            - 주일예배 Sunday Service - 11:00 am
          </p>
          <p>
            - 수요 기도모임 Wednesday Prayer - 8:00 pm
          </p>
          <p>
            - 화요 성경공부 Tuesday Bible Study - 10:30 am
          </p>
          <p>
            - 새벽 기도회 Early Morning Prayer - 6:15 am
          </p>
          <p>
            - 소그룹 모임 Small Groups - 한국어 소그룹 / 매 주 각 그룹별로
          </p>
          <p>
            - English Small Groups / Every Week
          </p>
        </div>
      </header>
      <p> 보스턴 시내에서 북쪽에서 15 마일
        I-95, Exit 38B 에서 2마일
      </p>
      <p> 781-439-1840 / kcnazarene@gmail.com </p>
      <p> 900 MAIN STREET, READING, MA 01867 </p>
    </article>
  </Main>
);

export default Index;

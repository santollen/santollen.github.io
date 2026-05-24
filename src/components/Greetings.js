import React from 'react';

import camera from '../assets/icons/camera.svg';
import Contact from './Contact';
import Order from './Order';

import styles from './Greetings.module.css';

function Greetings() {
  return (
    <div className={styles.greetings}>
        <p>
            두 사람이 새로운 시작을 하는 특별한 날,<br />
            소중한 당신을 초대합니다.<br />
            귀한 시간 내어주시는 만큼<br />
            감사한 마음 간직하며 살겠습니다.
        </p>

        <Contact />

        <div id="order">
          <Order />
        </div>

        <div className={styles.information}>
            <img src={camera} alt="카메라 아이콘" />
            <p>
              찬송가 620 장 - 여기에 모인우리<br/>

              여기에 모인우리 주의 은총받을자여라<br/>
              주께서 이자에 함께 계심을 아노라<br/>
              언제나 주님만을 찬양하며 따라가리니<br/>
              시험을 당할때도 함께 계심을 믿노라<br/>

              이 믿음 더욱 굳세라 주가 지켜 주신다<br/>
              어둔밤에도 주의 밝은빛 인도 하여주신다
            </p>
        </div>
    </div>
  );
}

export default Greetings;

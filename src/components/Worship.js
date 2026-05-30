import React from 'react';

import open_book from '../assets/icons/open_book.svg';
import bible_icon from '../assets/icons/bible.png';
import Order from './Order';

import styles from './Worship.module.css';

function Worship() {
  return (
    <div className={styles.worship}>
        <div id="order">
          <Order />
        </div>

        <div className={styles.information}>
            <img src={open_book} alt="찬송가 아이콘" />
            <p>
              찬송가 605 장<br/>
              - 오늘 모여 찬송함은 -<br/>
              <br/>
              오늘 모여 찬송함은 형제 자매 즐거움<br/>
              거룩하신 주 뜻대로 혼인예식 합니다<br/>
              신랑신부 이 두 사람 한 몸 되게 하시고<br/>
              온 집안이 하나 되고 한 뜻 되게 하소서<br/>
              아멘
            </p>
        </div>

        <br/>

        <div className={styles.information}>
            <img src={bible_icon} alt="성경책 아이콘" />
            <p>
              주례 말씀<br/>
              - 창세기 1장 27-28절 -<br/>
              <br/>
              27절<br/>
              하나님이 당신의 형상대로 사람을 창조하셨으니, 곧 하나님의 형상대로 사람을 창조하셨다. 하나님이 그들을 남자와 여자로 창조하셨다.
              <br/>
              <br/>
              28절<br/>
              하나님이 그들에게 복을 베푸셨다. 하나님이 그들에게 말씀하시기를 "생육하고 번성하여 땅에 충만하여라. 땅을 정복하여라. 바다의 고기와 공중의 새와 땅 위에서 살아 움직이는 모든 생물을 다스려라" 하셨다.
              <br/>
            </p>
        </div>
    </div>
  );
}

export default Worship;

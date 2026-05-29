import React from 'react';

import styles from './Order.module.css';
import commonStyles from './Common.module.css';

function Order() {
  return (
    <div className={styles.order}>
      <h3 className={commonStyles.caption}><span>식순</span></h3>

      <ul className={styles.table}>
        <li>
          <span>개식사</span>
          <span>사회자</span>
        </li>
        <li>
          <span>화촉점화</span>
          <span>양가 부모님</span>
        </li>
        <li>
          <span>입장</span>
          <span>신랑ㆍ신부</span>
        </li>
        <li>
          <span>맞절</span>
          <span>신랑ㆍ신부</span>
        </li>
        <li>
          <span>찬송가 605 장</span>
          <span>주례자ㆍ다같이</span>
        </li>
        <li>
          <span>주례사</span>
          <span>주례자</span>
        </li>
        <li>
          <span>혼인서약</span>
          <span>주례자</span>
        </li>
        <li>
          <span>성혼선포</span>
          <span>주례자</span>
        </li>
        <li>
          <span>축복기도</span>
          <span>주례자</span>
        </li>
        <li>
          <span>양가 부모님께 인사</span>
          <span>신랑ㆍ신부</span>
        </li>
        <li>
          <span>내빈께 인사</span>
          <span>신랑ㆍ신부</span>
        </li>
        <li>
          <span>폐식</span>
          <span>사회자</span>
        </li>
        <li>
          <span>사진촬영</span>
          <span>가족ㆍ지인</span>
        </li>
      </ul>
    </div>
  );
}

export default Order;

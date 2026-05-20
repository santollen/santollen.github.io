import { useState } from 'react';

import mail from '../assets/icons/mail.svg';
import copy from '../assets/icons/copy.svg';

import styles from './Account.module.css';

function Account() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedIndex(text);
        setTimeout(() => setCopiedIndex(null), 1000);
      }).catch(err => {
        alert('알 수 없는 오류가 발생했습니다.');
      });
    } else {
      alert('클립보드 API를 지원하지 않습니다.');
    }
  };

  const handleCopyClick = (text) => {
    copyToClipboard(text);
  };

  return (
    <div className={styles.account}>
      <div className={styles.box}>
        <img src={mail} alt="메일 아이콘" />

        <p>
          비대면으로 축하를 전하고자 하시는 분들을 위해<br />
          <span>계좌번호</span>를 기재하였습니다.<br />
          축하해 주시려는 따뜻한 마음에 감사드립니다.
        </p>

        <ul className={styles.list}>
          <li>
            <span className={styles.category_name}>신랑측</span>
            <ul className={styles.account_wrap}>
              <li>
                <span>김영조</span>
                <span>국민 313501-04-013095</span>
                <span onClick={() => handleCopyClick('국민 313501-04-013095')}>
                  <img src={copy} alt="복사 아이콘" className={copiedIndex === '국민 313501-04-013095' ? styles.copied : ''} />
                </span>
              </li>
              
              <li>
                <span>김영미</span>
                <span>농협 301-050-520-53906</span>
                <span onClick={() => handleCopyClick('농협 301-050-520-53906')}>
                  <img src={copy} alt="복사 아이콘" className={copiedIndex === '농협 301-050-520-53906' ? styles.copied : ''} />
                </span>
              </li>

              <li>
                <span>김산</span>
                <span>신한 110-532-593512</span>
                <span onClick={() => handleCopyClick('신한 110-532-593512')}>
                  <img src={copy} alt="복사 아이콘" className={copiedIndex === '신한 110-532-593512' ? styles.copied : ''} />
                </span>
              </li>
            </ul>
          </li>

          <li>
            <span className={styles.category_name}>신부측</span>
            <ul className={styles.account_wrap}>
              <li>
                <span>안재오</span>
                <span>하나 146-910264-89107</span>
                <span onClick={() => handleCopyClick('하나 146-910264-89107')}>
                  <img src={copy} alt="복사 아이콘" className={copiedIndex === '하나 146-910264-89107' ? styles.copied : ''} />
                </span>
              </li>

              <li>
                <span>김현옥</span>
                <span>하나 283-910180-40007</span>
                <span onClick={() => handleCopyClick('하나 283-910180-40007')}>
                  <img src={copy} alt="복사 아이콘" className={copiedIndex === '하나 283-910180-40007' ? styles.copied : ''} />
                </span>
              </li>

              <li>
                <span>안셀라</span>
                <span>하나 278-910990-59107</span>
                <span onClick={() => handleCopyClick('하나 278-910990-59107')}>
                  <img src={copy} alt="복사 아이콘" className={copiedIndex === '하나 278-910990-59107' ? styles.copied : ''} />
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Account;
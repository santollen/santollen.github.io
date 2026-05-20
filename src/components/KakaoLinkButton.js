import React, { useEffect } from 'react';

import kakaoImage from '../assets/icons/kakao.svg';

import styles from './KakaoLinkButton.module.css';

function KakaoLinkButton() {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('eafcd8a9914e42b72520c6a916e57440');
    }
  }, []);

  const onKakaoLinkButtonClick = () => {
    window.Kakao.Share.sendCustom({
      templateId: 133322,
    });
  }
  
  

  return (
    <button
      className={styles.kakao_link_button}
      onClick={onKakaoLinkButtonClick}
    >
      <img src={kakaoImage} alt="카카오톡 링크 공유 버튼" />
    </button>
  );
}

export default KakaoLinkButton;

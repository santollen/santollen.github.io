import React, { useEffect } from 'react';

import kakaoImage from '../assets/icons/kakao.svg';

import styles from './KakaoLinkButton.module.css';

function KakaoLinkButton() {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('75d69ec3e3a9b7df562d51b0515e0649');
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

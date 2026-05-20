import React from 'react';

import mobile from '../assets/icons/mobile.svg';
import styles from './Contact.module.css';

function Contact() {
    const onNameClick = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`;
    };
    
    return (
        <div className={styles.contact}>
            <ul>
                <li>
                    <span>김영조</span>
                    ㆍ
                    <span>김영미</span>
                    의 장남
                    <span>김산</span>
                </li>

                <li>
                    <span>안재오</span>
                    ㆍ
                    <span>김현옥</span>
                    의 장녀
                    <span>안셀라</span>
                </li>
            </ul>

            {/* <button className={styles.contact_button}> */}
            {/*     <img src={mobile} alt="전화 아이콘" /> */}
            {/*     연락하기 (이름 클릭) */}
            {/* </button> */}
        </div>
    );
}

export default Contact;

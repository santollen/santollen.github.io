import styles from './Contact.module.css';

function Contact() {
    return (
        <div className={styles.contact}>
            <ul>
                <li>
                    <span>김영조</span>
                    ㆍ
                    <span>김영미</span>
                    의 장남
                    <span>김{'　'}산</span>
                </li>

                <li>
                    <span>안재오</span>
                    ㆍ
                    <span>김현옥</span>
                    의 장녀
                    <span>안셀라</span>
                </li>
            </ul>
        </div>
    );
}

export default Contact;

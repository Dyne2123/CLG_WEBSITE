import styles from './anouncements.module.css'

export default function Announcement(){
    return (
        <div className={styles.Scontainer}>
            <div className={styles.messageContainer}>
                <div className={styles.messageWrapper}>
                    <div>today is holiday</div>
                    <div>Message 2</div>
                    <div>Message 3</div>
                    <div>Message 4</div>
                    <div>Message 5</div>
                    <div>Message 6</div>
                    <div>Message 7</div>
                    <div>Message 8</div>
                    <div>Message 9</div>
                    
                </div>
            </div>
        </div>
    );
}
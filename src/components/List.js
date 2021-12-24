import styles from './List.module.css';
const List = () => {
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div className={styles.ques_num}>
                    Question 1/8
                </div>
                <div className={styles.help}>
                    Need Help ?
                </div>
            </div>
        </div>
    )

}


export default List;
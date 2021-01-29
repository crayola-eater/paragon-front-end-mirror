import React from 'react'
import styles from './FlipCard.module.css'
import UserIcon from '../UserIcon'

function FlipCard({ imageSrc, personName, bio }) {
    return (
        <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                    <UserIcon imageSrc={imageSrc} />
                    <h1
                        data-testid="flipCardTest"
                        className={styles.personName}
                    >
                        {personName}
                    </h1>
                </div>
                <div className={styles.flipCardBack}>
                    <h2 className={styles.h2}>Bio:</h2>
                    <div className={styles.cohortInfoContainer}>
                        <p className={styles.bio}>{bio} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard

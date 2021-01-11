import React from 'react'
import styles from './Button.module.css'
import { FaGooglePlay } from 'react-icons/fa'
import { Button as ButtonChak } from '@chakra-ui/react'

function Button({ color, text, link }) {
    return (
        <ButtonChak
            data-testid="ButtonChak"
            borderRadius="4"
            // width="35%"
            // fontSize="1.5vw"
            leftIcon={<FaGooglePlay />}
            colorScheme={color}
            size="lg"
            variant="solid"
            className={styles.button1}
            style={{ backgroundColor: { color } }}
            onClick={() => {
                window.open(link)
            }}
        >
            {text}
        </ButtonChak>
    )
}

export default Button

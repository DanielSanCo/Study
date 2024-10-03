import Skills from '@/utils/skills'
import styles from '../styles/test.module.css'
import { useState } from 'react'

const battle = [
    "", //"Hello World"
]

export default function Fight() {
    const [player1, setPlayer1] = useState('Mihawk')
    const [player2, setPlayer2] = useState('Zoro')
    const [count, setCount] = useState(1)

    const showPower = (p1: string, p2: string) => {
        battle.push(`${p1} desliza sua espada no ar em um movimento de cima para baixo, com o objetivo de cortar o peito de ${p2}`)
        setCount(count + 1)
    }
    return (
        <div className={styles.page}>
            <div className={styles.fight}>
                {battle.map((item,index) => (
                    <div>{item}</div>
                ))}
                <div style={{opacity: 0}}>{count}</div>
            </div>
            <div className={styles.p1Skills}>
                {Skills.map((item, index) => (
                    <div className={styles.eachskill}>
                        <img src={item.img} alt="" className={styles.img} onClick={() => showPower(player1, player2)}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
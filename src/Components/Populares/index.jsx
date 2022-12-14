import React from 'react'
import styles from './Populares.module.scss'
import fotosPopulares from './fotos-populares.json'
import Botao from 'Components/Botao/Botao'

export default function Populares() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__imagens}>{fotosPopulares.map(foto =>(
            <li key={foto.id}>
                <img src={foto.path} alt={foto.alt}/>
            </li>
        ))}
        </ul>
        <Botao>Ver mais fotos</Botao>
    </aside>
  )
}

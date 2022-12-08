import React from 'react'
import style from '../../Pages/PaginaInicial/paginaInicial.module.scss'
import banner from './banner.png'

export default function Banner() {
    return (
        <div className={style.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt='terra vista do espaço' />
        </div>
    )
}

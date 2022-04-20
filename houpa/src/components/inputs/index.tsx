import React from 'react'
import { Containerinput } from './style'


//Search
import search from '../../assets/img/search.svg'

const Input = () => {
  return (
    <Containerinput>
        <input 
            type="search" 
            name="" 
            id="" 
            placeholder='Pesquisar nome do produto' />
        <button>
            <img src={search} alt="icone-search"/>
        </button>
    </Containerinput>
  )
}

export{Input}
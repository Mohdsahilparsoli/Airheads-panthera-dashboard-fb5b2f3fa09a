import React from 'react'
import LoadingImage from '../../loading.svg'


const loadingImage =  () =>{
    return(
        <>
        <img src={LoadingImage} className='loadingImage' alt='Loading'/>
        </>
    )
}

export default loadingImage
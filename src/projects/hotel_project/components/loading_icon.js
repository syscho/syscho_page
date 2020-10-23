import React from 'react'
import loadingGif from '../../../assets/img/project_imgs/hotel_img/gif/loading-gear.gif'
export default function LoadingIcon() {
    return (
        <div className='loading'>
            <p>rooms loading...</p>
            <img src={loadingGif} alt='Loading..'/>
        </div>
    )
}

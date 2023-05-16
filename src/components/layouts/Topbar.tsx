import *as React from 'react'

export default function Topbar(props:any) {

  return (
    <div className='top-header'>
        
            <div className='topbar-logo'>
            <img src={props._site.c_topBar.logo.url} height={60} width={120}/> 
            </div>

            <div className='link-left'>
                <ul className='top-lonk'>
                    <li className='inner-link'>
                <div className='inner-item'>
                    <span><img src= {props._site.c_topBar.jobLogo.url} height={10} width={40}/></span>
                    <span className='top-contnet'>{props._site.c_topBar.jobList}</span>
                </div>
                <div className='inner-item'> 
                    <span><img src= {props._site.c_topBar.locationLogo.url} height={10} width={40}/></span>
                    <span className='top-contnet'>{props._site.c_topBar.branchLocator}</span>

                </div>
                </li>
                </ul>
            </div>
            
        </div>
 
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'
import styles from './BackButton.module.scss'
export default function BackButton(props) {
    return (
        <NavLink to={`${props.path}`}>
            <div className={styles.back} style={{margin:'10px 10px'}} >
             <ArrowLeftOutlined style={{color:"#000000"}}/>
                <h5>Back</h5>
            </div>
        </NavLink>
    )
}

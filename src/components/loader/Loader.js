import React from 'react'
import styles from './Loader.module.scss'
import {SyncOutlined} from '@ant-design/icons'

const Loader = () => {
    return (
      <div className={styles.body}>
        <SyncOutlined spin />
      </div>
    )
}

export default Loader




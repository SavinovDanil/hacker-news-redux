import { RedoOutlined } from '@ant-design/icons';
import React from 'react';
import styles from './Update.module.scss';

export default function Update(props) {
  return (
    // <button className={styles.update} onClick={props.onClick}>
    <RedoOutlined onClick={props.onClick} />
    // {/* <strong> update</strong> */}
    // {/* </button> */}
  );
}

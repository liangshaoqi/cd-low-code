import React, { FC } from 'react';
import styles from './index.less'
import { CloseOutlined } from '@ant-design/icons';

type PropsType = {
  title: string, // 标题
  onCancel?: () => void, // 关闭
  show?: boolean, // 当前是否展示
  children?: React.ReactNode, // 子元素
};
const Panel: FC<PropsType> = (props: PropsType) => {
  const { title, onCancel, show, children } = props
  return (
    <div className={`${styles['panel-wrap']} ${show ? styles['show'] : ''}`}>
      <div className={styles['panel-title']}>
        <span>{title}</span>
        <span><CloseOutlined onClick={onCancel} /></span>
      </div>
      {children}
    </div>
  );
};
export default Panel
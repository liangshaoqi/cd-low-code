import React, { FC } from 'react';
import styles from './index.less'
type PropsType = {};
const RightToolBar: FC<PropsType> = (props: PropsType) => {
  // const {} = props
  return (
    <div className={styles['right-tool-bar']}>
      左侧工具栏
    </div>
  );
};
export default RightToolBar
import React, { FC } from 'react';
import styles from './index.less'
import { Space, Button, Input } from 'antd'
import { DesktopOutlined, MobileOutlined, TabletOutlined } from '@ant-design/icons';


type PropsType = {};
const TopToolBar: FC<PropsType> = (props: PropsType) => {
  // const {} = props
  return (
    <div className={styles['top-tool-bar']}>
      <div className={styles['tool-bar-left']}>
        <img src="" alt="" />
        <span>低代码平台</span>
      </div>
      <div className={styles['tool-bar-center']}>
        <Space>
          <DesktopOutlined title='pc' />
          <TabletOutlined title='pad'/>
          <MobileOutlined title='mobile'/>
        </Space>
        <Input style={{
          width: '110px',
          marginLeft: '10px'
        }} type='number' addonAfter="px" />
      </div>
      <div className={styles['tool-bar-right']}>
        <Space>
          <Button>后退</Button>
          <Button>前进</Button>
          <Button type='primary'>出码</Button>
          <Button>保存到本地</Button>
          <Button type='primary' danger>重置</Button>
          <Button type='primary'>预览</Button>
        </Space>
      </div>
    </div>
  );
};
export default TopToolBar
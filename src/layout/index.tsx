import React, { FC } from "react";
import "./index.less";
import TopToolBar from "./topToolBar";
import LeftToolBar from "./leftToolBar";
import RightToolBar from "./rightToolBar";
// 定义Props类型
type LayoutProps = {};

// 使用FC类型定义函数组件并指定Props类型
const Layout: FC<LayoutProps> = () => {
  return (
    <div className="cd-layout">
      <div className="cd-top">
        <TopToolBar></TopToolBar>
      </div>
      <div className="cd-body">
        <div className="cd-left">
          <LeftToolBar></LeftToolBar>
        </div>
        <div className="cd-workbench-center">视图区域</div>
        <div className="cd-right">
          <RightToolBar></RightToolBar>
        </div>
      </div>
    </div>
  );
};

export default Layout;

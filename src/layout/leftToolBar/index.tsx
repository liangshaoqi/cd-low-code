import React, { FC, useState } from "react";
import styles from "./index.less";
import {
  ApartmentOutlined,
  CodepenOutlined,
  DatabaseOutlined,
  EllipsisOutlined,
  QuestionCircleOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import Panel from "./panel";
import Tree from "./tree";
import CodeCom from "./code";
import ComponentStore from './componentStore'
type PropsType = {};
const LeftToolBar: FC<PropsType> = (props: PropsType) => {
  // const {} = props
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);
  const menu = [
    {
      title: "组件库",
      icon: <ShopOutlined title="组件库" />,
      component: <ComponentStore></ComponentStore>,
    },
    {
      title: "大纲树",
      icon: <ApartmentOutlined title="大纲树" />,
      component: <Tree />,
    },
    {
      title: "数据源",
      icon: <DatabaseOutlined title="数据源" />,
      component: <span>数据源</span>,
    },
    {
      title: "源代码",
      icon: <CodepenOutlined title="源代码" />,
      component: <CodeCom />,
    },
    {
      title: "Schema",
      icon: <EllipsisOutlined title="Schema" />,
      component: <span>Schema</span>,
    },
    {
      title: "使用手册",
      icon: <QuestionCircleOutlined title="使用手册" />,
      component: <span>使用手册</span>,
    },
  ];
  return (
    <div className={styles["left-tool-bar-wrap"]}>
      <div className={styles["left-tool-bar"]}>
        <div className={styles["tool-bar-menu"]}>
          <div className={styles["menu-wrap"]}>
            {
              // 渲染menu前四个
              menu.slice(0, 4).map((item, i) => {
                return (
                  <div onClick={() => setCurrentMenuIndex(i)} key={i}>
                    {item.icon}
                  </div>
                );
              })
            }
          </div>
          <div className={styles["menu-wrap"]}>
            {
              // 渲染menu最后两个
              menu.slice(4, 6).map((item, i) => (
                <div onClick={() => setCurrentMenuIndex(i)} key={i}>
                  {item.icon}
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {menu.map((item, i) => {
        return (
          <div className={styles["tool-bar-panel"]} key={i}>
            <Panel
              title={item.title}
              show={currentMenuIndex === i}
              onCancel={() => setCurrentMenuIndex(-1)}
            >
              {item.component}
            </Panel>
          </div>
        );
      })}
    </div>
  );
};
export default LeftToolBar;

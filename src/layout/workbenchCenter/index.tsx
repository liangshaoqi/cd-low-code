import React, { FC, useState } from "react";
import { Button } from "antd"

interface PropsType {}
const WorkbenchCenter: FC<PropsType> = (props: PropsType) => {
  //  const {} = props
  const [schema, setSchema] = useState<any>([])
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("放置");
    console.log(e.dataTransfer.getData("text"));
    setSchema((prevSchema: any) => {
      return [...prevSchema, e.dataTransfer.getData("text")];
    })
  };
  return (
    <div
      onDrop={onDrop}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      style={{
        height: "100%",
      }}
    >
      {
        schema.length === 0 && '请在左侧组件库拖拽至此处'
      }
      {
        schema.map((item: any, index: number) => {
          return <Button key={index}>按钮{item + index}</Button>
        })
      }
    </div>
  );
};
export default WorkbenchCenter;

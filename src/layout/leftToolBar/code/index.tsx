import React, { FC, useEffect, useRef, useState, useLayoutEffect } from "react";
import MonacoEditor from "react-monaco-editor";

type PropsType = {};
const CodeCom: FC<PropsType> = (props: PropsType) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    // 编辑器等待容器渲染完毕后加载
    if (divRef.current?.clientWidth) {
      setCompleted(true);
    }
  }, [divRef.current?.clientWidth]);

  return (
    <div ref={divRef} style={{ width: "600px", height: "100%" }}>
      {completed && (
        <MonacoEditor
          language="javascript"
          theme="vs-light"
          value=""
          // onChange={console.log}
          editorDidMount={(e) => {
            // console.log(e);
          }}
          options={{
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            cursorStyle: "line",
            automaticLayout: false,
          }}
        />
      )}
    </div>
  );
};
export default CodeCom;

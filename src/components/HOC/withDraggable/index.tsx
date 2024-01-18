import React, { FC, useRef } from "react";
interface DraggableProps {}

const withDraggable = <P extends DraggableProps>(
  WrappedComponent: React.ComponentType<P>,
  type: string
) => {
  const DragBox: FC<P> = (props: P) => {
    const componentRef = useRef<HTMLDivElement>(null);
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
      // console.log(e)
      // console.log(type)
      e.dataTransfer.setData("text", type);
    };
    return (
      <div
        draggable
        onDragStart={handleDragStart}
        style={{ cursor: "move" }}
        ref={componentRef}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };

  return DragBox;
};

export default withDraggable;

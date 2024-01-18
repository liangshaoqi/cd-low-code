import { Button, ButtonProps } from 'antd';
import React, { FC } from 'react';
import withDraggable from '@/components/HOC/withDraggable'

interface PropsType extends ButtonProps {
  
};
const CdButton: FC<PropsType> = (props: PropsType) => {
//  const {} = props
  return (
    <Button {...props}>{props.children}</Button>
  );
};
export default withDraggable<PropsType>(CdButton, 'type_str')
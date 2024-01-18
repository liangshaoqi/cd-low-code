import { Button, ButtonProps } from 'antd';
import React, { FC } from 'react';

interface PropsType extends ButtonProps {
  
};
const CdButton: FC<PropsType> = (props: PropsType) => {
//  const {} = props
  return (
    <Button {...props}>{props.children}</Button>
  );
};
export default CdButton
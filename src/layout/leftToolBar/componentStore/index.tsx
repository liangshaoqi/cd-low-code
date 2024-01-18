import React, { FC } from 'react';
import CdButton from '@/components/CdButton'

type PropsType = {};
const ConponentStore: FC<PropsType> = (props: PropsType) => {
//  const {} = props
  return (
    <div>
      <CdButton type='primary'>按钮</CdButton> 
    </div>
  );
};
export default ConponentStore
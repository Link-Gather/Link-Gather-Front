import React from 'react';
import { FlexBox } from '@elements';

interface Props {
  label?: string;
}

const CategoryTitle = (props: Props) => {
  const { label } = props;
  return (
    <FlexBox width='100%' height='20px' alignItems='center' css={{ position: 'relative' }}>
      <span css={{ fontWeight: '600' }}>{label?.replace('*', '')}</span>
      {label?.includes('*') && (
        <span css={{ color: 'red', height: '20px', marginLeft: '5px' }}>{label?.slice(-1)}</span>
      )}
    </FlexBox>
  );
};

export { CategoryTitle };

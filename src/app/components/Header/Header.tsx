import React from 'react';
import { FlexBox } from '@elements';
import palette from '@libs/theme/palettes';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <FlexBox
      width='100%'
      height='70px'
      alignItems='center'
      justifyContent='center'
      css={{
        borderBottom: `2px solid ${palette.black.main}`,
      }}
    >
      <FlexBox
        width='100%'
        height='100%'
        alignItems='center'
        justifyContent='space-between'
        css={{
          maxWidth: '1352px',
          backgroundColor: palette.primary.main,
        }}
      >
        <h1>
          <Link to='/'>Logo</Link>
        </h1>
      </FlexBox>
    </FlexBox>
  );
}

export { Header };

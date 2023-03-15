import type { Theme } from '@libs/theme';
import { CSSProperties } from 'react';

function UnderlineTitle(props: { title: string; marginBottom?: CSSProperties['marginBottom'] }) {
  // prop destruction
  const { title, marginBottom } = props;

  // lib hooks
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <h3
      css={{
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
        height: '32px',
        fontWeight: 700,
        fontSize: '32px',
        textAlign: 'center',
        lineHeight: '32px',
        marginBottom,
      }}
    >
      {title}
      <span
        css={(theme: Theme) => [
          {
            display: 'inline-block',
            width: '16px',
            height: '4px',
            backgroundColor: theme.palette.primary.main,
          },
        ]}
      />
    </h3>
  );
}

export { UnderlineTitle };

import type { Theme } from '@libs/theme';

function UnderlineTitle(props: { title: string }) {
  // prop destruction
  const { title } = props;

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
        fontWeight: 800,
        fontSize: '32px',
        textAlign: 'center',
        lineHeight: '32px',
      }}
    >
      {title}
      <span
        css={(theme: Theme) => [
          {
            display: 'inline-block',
            width: '16px',
            height: '3px',
            backgroundColor: theme.palette.primary.main,
          },
        ]}
      />
    </h3>
  );
}

export { UnderlineTitle };

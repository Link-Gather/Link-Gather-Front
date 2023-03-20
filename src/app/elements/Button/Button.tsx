import { Theme } from '@libs/theme';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

function Button(props: Props) {
  // prop destruction
  const { children, className, ...rest } = props;

  // lib hooks
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <button
      css={(theme: Theme) => [
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontWeight: '800',
          border: 'none',
          cursor: 'pointer',
          ':disabled': {
            backgroundColor: theme.palette.secondary.n40,
          },
        },
      ]}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
}

export { Button };

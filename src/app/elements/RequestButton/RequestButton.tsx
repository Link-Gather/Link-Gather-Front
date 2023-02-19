import { Theme } from '@libs/theme';

function RequestButton(props: {
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  className?: string;
  children: React.ReactNode;
}) {
  // prop destruction
  const { onClick, className, children } = props;
  // lib hooks
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <button
      css={(theme: Theme) => {
        return [
          {
            width: '94px',
            height: '50px',
            fontSize: '16px',
            textAlign: 'center',
            fontWeight: '600',
            border: `2px solid ${theme.palette.secondary.n60}`,
            borderRadius: '8px',
            color: theme.palette.secondary.n60,
            backgroundColor: theme.palette.contrastText,
            cursor: 'pointer',
            marginLeft: '10px',
          },
        ];
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export { RequestButton };

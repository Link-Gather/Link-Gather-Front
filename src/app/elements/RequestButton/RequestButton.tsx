import { Theme } from '@libs/theme';

function RequestButton(props: {
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  className?: string;
  children: React.ReactNode;
  value?: string;
  marginLeft?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}) {
  // prop destruction
  const { onClick, className, children, value, marginLeft, width, height, fontSize } = props;
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
          width: '94px',
          height: '50px',
          fontSize: '14px',
          textAlign: 'center',
          fontWeight: '600',
          border: `2px solid ${value ? theme.palette.secondary.n300 : theme.palette.secondary.n60}`,
          borderRadius: '8px',
          color: value ? theme.palette.secondary.n300 : theme.palette.secondary.n60,
          backgroundColor: theme.palette.contrastText,
          cursor: value ? 'pointer' : 'null',
          marginLeft: '10px',
        },
      ]}
      className={className}
      onClick={onClick}
      disabled={value ? false : true}
      type='button'
    >
      {children}
    </button>
  );
}

export { RequestButton };

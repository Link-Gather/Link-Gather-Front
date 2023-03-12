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
      css={(theme: Theme) => {
        return [
          {
            width,
            height,
            fontSize,
            textAlign: 'center',
            marginLeft,
            fontWeight: '600',
            border: `2px solid ${value ? theme.palette.black.main : theme.palette.secondary.n60}`,
            borderRadius: '8px',
            color: value ? theme.palette.black.main : theme.palette.secondary.n60,
            backgroundColor: theme.palette.contrastText,
            cursor: value && 'pointer',
            zIndex: '2',
          },
        ];
      }}
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

import palette from '@libs/theme/palettes';

function RequestButton(props: { onClick: () => void; className?: string; children: React.ReactNode; value: string }) {
  // prop destruction
  const { onClick, className, children, value } = props;
  // lib hooks
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <button
      css={{
        width: '94px',
        height: '50px',
        fontSize: '14px',
        textAlign: 'center',
        fontWeight: '600',
        border: `2px solid ${value ? palette.secondary.n300 : palette.secondary.n60}`,
        borderRadius: '8px',
        color: value ? palette.secondary.n300 : palette.secondary.n60,
        backgroundColor: palette.contrastText,
        cursor: value ? 'pointer' : 'null',
        marginLeft: '10px',
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

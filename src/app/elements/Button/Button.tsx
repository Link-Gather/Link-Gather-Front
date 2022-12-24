function Button(props: {
  children: React.ReactNode;
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  className?: string;
}) {
  // prop destruction
  const { children, onClick, className } = props;

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
        minWidth: '5rem',
        height: '2rem',
        fontSize: '1rem',
        color: '#FFF',
        border: 0,
        borderRadius: '0.8rem',
        backgroundColor: '#18191F',
        padding: '0 1.2rem',
        cursor: 'pointer',
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export { Button };

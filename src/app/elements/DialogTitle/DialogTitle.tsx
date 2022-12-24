function DialogTitle(props: { children: React.ReactNode }) {
  // prop destruction
  const { children } = props;

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
        height: '40px',
        lineHeight: '30px',
        fontWeight: 'bolder',
      }}
    >
      {children}
    </h3>
  );
}

export { DialogTitle };

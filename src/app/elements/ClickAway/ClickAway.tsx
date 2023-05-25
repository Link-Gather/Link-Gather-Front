function ClickAway(props: { onClick: () => void; className?: string }) {
  // prop destruction
  const { onClick, className } = props;
  // lib hooks
  // state, ref hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <div
      css={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
      }}
      onClick={onClick}
      className={className}
    />
  );
}

export { ClickAway };

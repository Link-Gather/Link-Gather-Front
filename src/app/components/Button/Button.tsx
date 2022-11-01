function Button(props: {
  children: React.ReactNode;
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      style={{ backgroundColor: '#000', color: '#FFF' }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export { Button };

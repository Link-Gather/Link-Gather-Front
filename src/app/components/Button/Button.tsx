function Button(props: {
  children: React.ReactNode;
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}) {
  return <button onClick={props.onClick}>{props.children}</button>;
}

export { Button };

import reactDom from "react-dom";

function Portal(props: { children: React.ReactNode }) {
  const element = document.getElementById("dialog");
  return reactDom.createPortal(props.children, element as HTMLElement);
}

export { Portal };

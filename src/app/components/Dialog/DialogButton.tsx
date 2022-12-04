import React, { useState } from 'react';
import { Button } from '../Button';

function DialogButton(props: { children: React.ReactNode; dialogRender: React.FC<{ onClose: () => void }> }) {
  // prop destruction
  const { children, dialogRender } = props;

  // lib hooks
  // state, ref hooks
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <>
      <Button onClick={() => setOpenDialog(true)}>{children}</Button>
      {openDialog && dialogRender({ onClose: () => setOpenDialog(false) })}
    </>
  );
}

export { DialogButton };

import React, { useState } from 'react';
import { Button } from '../Button';

function DialogButton(props: { children: React.ReactNode; DialogComponent: React.FC<{ onClose: () => void }> }) {
  // prop destruction
  const { children, DialogComponent } = props;

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
      {openDialog && DialogComponent({ onClose: () => setOpenDialog(false) })}
    </>
  );
}

export { DialogButton };

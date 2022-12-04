import React, { useState } from 'react';
import { Button } from '../../elements/Button';

function DialogButton(props: { children: React.ReactNode; render: React.FC<{ onClose: () => void }> }) {
  const { children, render } = props;

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setOpenDialog(true)}>{children}</Button>
      {openDialog && render({ onClose: () => setOpenDialog(false) })}
    </>
  );
}

export { DialogButton };

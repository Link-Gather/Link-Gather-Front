import { useState } from 'react';
import { Button } from '../Button';
import { Dialog } from './Dialog';

function DialogButton(props: {
  children: React.ReactNode;
  dialogStatus: 'confirm' | 'warning';
  dialogContents: React.ReactNode;
}) {
  const { children, dialogStatus, dialogContents } = props;
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handlerOpenDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <Button onClick={() => handlerOpenDialog()}>{children}</Button>
      {openDialog && (
        <Dialog dialogStatus={dialogStatus} onClose={() => handlerOpenDialog()}>
          {dialogContents}
        </Dialog>
      )}
    </>
  );
}

export { DialogButton };

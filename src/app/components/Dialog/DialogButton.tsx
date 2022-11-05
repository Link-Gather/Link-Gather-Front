import { useState } from 'react';
import { Button } from '../Button';
import { Dialog } from './Dialog';

function DialogButton(props: {
  children: React.ReactNode;
  dialogStatus: 'confirm' | 'warning';
  dialogContents: React.ReactNode;
}) {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handlerOpenDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <Button onClick={() => handlerOpenDialog()}>{props.children}</Button>
      {openDialog && (
        <Dialog
          dialogStatus={props.dialogStatus}
          onClose={() => handlerOpenDialog()}
        >
          {props.dialogContents}
        </Dialog>
      )}
    </>
  );
}

export { DialogButton };

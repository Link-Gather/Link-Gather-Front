import { useState } from 'react';

export const useDialog = () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  const openDialog = () => {
    setIsOpenDialog(true);
  };

  const closeDialog = () => {
    setIsOpenDialog(false);
  };

  const toggleDialog = () => {
    setIsOpenDialog(!isOpenDialog);
  };

  return { isOpenDialog, openDialog, closeDialog, toggleDialog };
};

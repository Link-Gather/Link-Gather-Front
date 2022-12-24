import { useState } from 'react';

export const useDialog = () => {
  // prop destruction
  // lib hooks
  // state, ref hooks
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  // form hook
  // query hooks
  // calculated values
  // effects

  // handlers
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

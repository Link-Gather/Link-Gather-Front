import { useState, useCallback } from 'react';

export const useDialog = () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  const openDialog = useCallback(() => {
    setIsOpenDialog(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsOpenDialog(false);
  }, []);

  const toggleDialog = useCallback(() => {
    setIsOpenDialog(!isOpenDialog);
  }, [isOpenDialog]);

  return { isOpenDialog, openDialog, closeDialog, toggleDialog };
};

import React from 'react';
import { useStoreState, useStoreActions } from '../easy_peasy/store'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';


const ConfirmDialog = () => {
  const open1 = useStoreState((state) => state.open1);
  const idx = useStoreState((state) => state.id);
  const setpopup = useStoreActions((actions) => actions.setpopup);
  const deletenote = useStoreActions((actions) => actions.deletenote);

  const handleCancel = (): void => {
    setpopup(false);
  }
  const handleConfirmDelete = (): void => {
    deletenote(idx);
    setpopup(false);
  }
  return (
    <Dialog open={open1} maxWidth="sm" fullWidth >
      <DialogTitle>Confirm the DeleteAction</DialogTitle>
      <Box position="absolute" top={0} right={0}>
        <IconButton onClick={() => handleCancel()}>
          <Close />
        </IconButton>
      </Box>
      <DialogContent>
        <Typography>Are you sure want to delete list with unique_id {idx}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleCancel()} color="primary" variant="contained">
          Cancel
        </Button>
        <Button onClick={() => handleConfirmDelete()} color="secondary" variant="contained">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;

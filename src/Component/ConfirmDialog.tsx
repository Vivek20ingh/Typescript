import React from 'react';
import { useContext } from 'react';

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
import {APPtx}from './Context/Context'


const ConfirmDialog = () => {
 
  const {id,setpopup,deletenote,open1}= useContext(APPtx)

  const handleCancel = (): void => {
    setpopup(false);
  }
  const handleConfirmDelete = (): void => {
    deletenote(id);
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
        <Typography>Are you sure want to delete list with unique_id {id}</Typography>
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

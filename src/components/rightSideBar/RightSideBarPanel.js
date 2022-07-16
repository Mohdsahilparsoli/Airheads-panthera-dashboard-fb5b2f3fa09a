import React from 'react'
import Badge from '@material-ui/core/Badge';

import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import NotificationsPopupCard from './NotificationsPopupCard';
import {setShowNotificationPopupCard} from '../../store/notifications/notificationActions'
import { useSelector, useDispatch } from "react-redux";

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}
export default function RightSideBarPanel() {
  const store = useSelector((state) => ({
    isPopupShown:         state.showNotification.showNotificationPopupCard,
  }));

  const dispatch = useDispatch();

  const [openMessage, setOpenMessage] = React.useState(false);

  const handleClickOpen = () => {
    dispatch(setShowNotificationPopupCard(true));
  };

  const handleClickMessageOpen = () => {
    setOpenMessage(true);
  };

  const handleCloseMessage = () => {
    setOpenMessage(false);
  };
  return (
    <div style ={{position: 'fixed', right: '0',width: '2.8%', height: '100vh', zIndex: '20', background: 'white', borderLeft: '1px solid rgb(187, 187, 187)'}}>
      <div style ={{margin: '90px 0 0 0', display: 'grid',  justifyItems: 'center', textAlign: 'center'}}>
      <Badge badgeContent={4} color="secondary">
      <NotificationsIcon style ={{margin: '0 0 20px 0', fontSize: '30px', color: "#000051"}} onClick={handleClickOpen}/>
      </Badge>

      {store.isPopupShown && <NotificationsPopupCard />}
    
      <MessageIcon style ={{margin: '20px 0', fontSize: '35px', color: "#000051"}}  onClick={handleClickMessageOpen}/>
      <Dialog
        open={openMessage}
        //onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          System Messages
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is just a demo System Message Service
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseMessage} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseMessage} color="primary">
            Ok, got it
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      </div>
  );
}


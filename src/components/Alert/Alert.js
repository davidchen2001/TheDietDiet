import React, {useState} from 'react';
import {Alert} from '@material-ui/lab';
import { Collapse } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const Alerts = (props) => {
    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        setVisible(false);
    }

    return (
        <Collapse in = {visible}   >
        <Alert
        severity = {props.color}
          action={
            <IconButton
              aria-label="close"
              
              size="small"
              onClick={onDismiss}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
            {props.text}
        </Alert>
        </Collapse>
    )

}

export default Alerts;
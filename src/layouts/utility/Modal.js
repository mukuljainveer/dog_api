import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import http from '../../http';
import { Grid } from '@material-ui/core';

export default function Modal({ status, handleClose,handleOpen, details }) {
    const [open, setOpen] = React.useState(status);
    const [Dogdetails, setDetails] = React.useState({ images:[]});

    const handleClickOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        setOpen(status)
    })

    useEffect(() => {
        setDetails(details)
    },[details])

    const getData = () => {
        http.get(`/breed/${details.name}/images/random/6`).then(res => {
            console.log("RESULT By BREED FILTER MODAL: ",   )
            setDetails({...details,images:res.message})
            handleOpen()
        }).catch(er=>{
            console.log("ERROR By BREED MODAL: ",  Dogdetails.name )
            if(Dogdetails.name!=undefined)
                alert("Details Not Found")
            handleClose()
        })
    }

    useEffect(() => {
        getData()
    }, [details])

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{details.name}</DialogTitle>
                <DialogContent>
                    <Grid spacing={2} container>
                        {Dogdetails.images.map(image=>{
                            return (
                                <Grid xs={6} sm={4} item>
                                    <img style={{ height: "200px", width: "100%" }} src={image} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
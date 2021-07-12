import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from "../layouts/utility/Modal";
import ChartComponent from "../layouts/utility/ChartComponent";
import { Grid, Card, Box, Select, MenuItem } from "@material-ui/core";
import http from '../http';

const useStyles = makeStyles((theme) => ({

}));

const Home = () => {
    const classes = useStyles();
    const [status, setStatus] = useState(false)
    const [dogDetails, setDogDetails] = useState({
        name:"",
        images:[]
    })
    const [data, setData] = useState([])
    const [listOfBreed, setListOfBreed] = useState([])
    const [filter, setFilter] = useState('')

    const getData = () => {
        if (filter == '') {
            http.get(`/breeds/image/random/20`).then(res => {
                console.log("RESULT: ", res)
                setData(res.message)
            })
        } else {
            http.get(`/breed/${filter}/images/random/20`).then(res => {
                console.log("RESULT By BREED FILTER: ", res)
                setData(res.message)
            })
        }
    }

    const listAllBreed = () => {
        http.get(`/breeds/list/all`).then(res => {
            console.log("RESULT ALL BREED: ", res)
            setListOfBreed(Object.keys(res.message))
        })
    }

    useEffect(() => {
        listAllBreed()
    }, [])

    useEffect(() => {
        getData()
    }, [filter])

    return (
        <>
            <Modal details={dogDetails} status={status} handleOpen={()=> setStatus(true)} handleClose={() => {
                setStatus(false)
            }} />
            <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                    <Card>
                        <ChartComponent width="100%" type="bar" />
                    </Card>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Card>
                        <ChartComponent width="100%" type="area" />
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex">
                        <Box display="flex" alignItems="center">
                            <Box paddingRight="20px"><b>by breed</b></Box>
                            <Select
                                value={filter}
                                onChange={(e) => {
                                    setFilter(e.target.value)
                                }}
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {listOfBreed.map(item => {
                                    return <MenuItem value={item}>{item}</MenuItem>
                                })}
                            </Select>
                        </Box>
                    </Box>
                </Grid>
                {data.map(dogData => {
                    return (
                        <Grid item sm={3} xs={12}>
                            <Card onClick={() => {
                                console.log("dogDataURL: "+dogData.split('/')[4])
                                setDogDetails({...dogDetails,name:dogData.split('/')[4]})
                            }}>
                                <img style={{ height: "400px", width: "100%" }} src={dogData} />
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export default Home
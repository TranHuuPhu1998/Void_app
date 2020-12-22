import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import FormComponent from './Form/Form'
import ListComponent from './List/List'
import useStyles from './styles'

const ExpenseTracker  = () => {
    const classes = useStyles()
    return (
        <div>
            <Card className={classes.root}>
                <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
                <CardContent>
                    <Typography align="center" variant="h5">Total Balance </Typography>
                    <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    </Typography>
                    <Divider className={classes.divider} />
                    <FormComponent />
                </CardContent>
                <CardContent className={classes.cartContent}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <ListComponent/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}
export default ExpenseTracker;
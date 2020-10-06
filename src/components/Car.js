import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(5, 10, 0, 20),
        padding: theme.spacing(2),
        width: theme.spacing(50),
        maxHeight: theme.spacing(100)
      },
    },
  }));

const Car = (props) => {
    const classes = useStyles();
    let id = props.match.params.id
    const car = cars.find(car => car.id === Number(id))
    let carName = car.Name.toUpperCase();
    return (
        <Container maxWidth='md' className={classes.root} id='container'>
            <Paper  square elevation={3}>
                <h1>{carName}</h1>
                <Chip label={`ID: ${id}`} />
                <Chip label={`Name: ${carName}`}/>
                <Chip label={`Year: ${car.Year}`}/>
                <Chip label={`Place of Origin: ${car.Origin}`}/>
                <Chip label={`MPG: ${car.Miles_per_Gallon}`}/>
                <Chip label={`Cylinders: ${car.Cylinders}`}/>
                <Chip label={`Horsepower: ${car.Horsepower}`}/>
                <Chip label={`Weight(lbs): ${car.Weight_in_lbs}`}/>
                <Chip label={`Acceleration: ${car.Acceleration}`}/> 
                <Chip label={`Displacement: ${car.Displacement}`}/>              
            </Paper>
        </Container>
     )
}

export default Car
import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,Dropdown,
    Tab,Label
} from 'semantic-ui-react'
import ClassifiedTile from './ClassifiedTile'
const description = [
    'Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their',
    'tiny stature, and even others for their massive size.',
  ].join(' ')
const data = [
    {
        title:"Maruthi",
        image:"images/swift.png",
        type:"Car",
        model:"Desire",
        year:"2004",
        price:"1000",
        contact:"554554",
        description:description
    },
    {
        title:"Bugatti",
        image:"images/super-cars.png",
        type:"Car",
        model:"Chevr",
        year:"2012",
        price:"1000000",
        contact:"55455ff4",
        description:description
    },
    {
        title:"iPhone 7",
        image:"images/iphone.jpg",
        type:"Mobile",
        model:"iPhone 7",
        year:"2015",
        price:"100000",
        contact:"554554",
        description:description
    },
    {
        title:"Bullet Desert Storm",
        image:"images/bullet.png",
        type:"Bike",
        model:"Deset Storm 500",
        year:"2016",
        price:"200000",
        contact:"554554",
        description:description
    }
]
export default class Classifieds extends Component {


    render() {
        return (
            <div>
                <Segment style={{ padding: '6em 0em' }} vertical>
                    <Grid container stackable verticalAlign='top'>
                    <Grid.Row id="clasifiedTile">
                      <Grid.Column width={2}>
                       </Grid.Column>
                       <Grid.Column width={12}>
                         <ClassifiedTile data={data}/>
                        </Grid.Column>
                         
                    </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}
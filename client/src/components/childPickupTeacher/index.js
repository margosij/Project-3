import React, { Component } from 'react'
// import { Container, Column, Row } from '../Grid'
import { AppProvider, Page } from '@shopify/polaris'
import DataTable from './DataTable'
// import './style.css'

class childPickupTeacher extends Component {
    render() {

        const headers = [
            parentID,
            parent,
            child,
            pickedUp
        ];
        const rows = [
        [    
            12345,
            'beth',
            'demon spawn',
            'yes/no'
        ],
        [
            543346,
            'steven',
            'robert',
            'yes/no'
        ]
    ]

        return(
            <AppProvider>
                <Page title="Data Table">
                    <DataTable headings={ headings } rows={ rows } />
                </Page>
            </AppProvider>
            // <Container>
            //     <Column size="xs-8 sm-9">
            //         <Column size="xs-8 sm-9">
            //             <Column size="xs-8 sm-9">
            //                 <Row>

            //                 </Row>
            //             </Column>
            //         </Column>
            //     </Column>
            // </Container>
        )
    }

}

export default childPickupTeacher
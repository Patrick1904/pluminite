import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;

    .left {
        font-size: 30px;
        font-weight: 300;
    }

    .button {
        :first-of-type {
            margin-right: 20px;
        }
    }
`

export default function Navigation() {
    return (
        <Container>
            <div className='left'>
                Pluminite
            </div>
            <div className='right'>
                <Link to='/sign-up' className='button'>Publish Art</Link>
                <Link to='/sign-up' className='button'>Buy Art</Link>
            </div>
        </Container>
    )
}
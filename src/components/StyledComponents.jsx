import styled from 'styled-components'
import { Box, Button, Card, Grid } from '@mui/material'

export const StyledContainerProducts = styled(Box)`
    background-color: #bbdefb;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 160px;
    margin-bottom: 20px;
`;

export const StyledButtonCard = styled(Button)`
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    box-shadow: '0 3px 5px 2 rgba(255, 105, 135, .3';
    font-weight: ${props => props.size === 'small' ? 'small' : 'large'};
    
    &:hover {
        color: #e8eaf6;
        background-color: #757de8;
        border-bottom: 2px solid #757ce8;
    }
`;

export const StyledCard = styled(Card)`
    width: 250px;
    margin: 10px 5px;
    transition: transform 0.5s ease-out;

    &:hover {
        transform: scale(1.03)
    }

    .MuiCardMedia-root {
        height: 250px;
        margin-bottom: 0
    }

    .MuiCardContent-root {
        margin-bottom: 0;

        h5 {
            height: 100px;
            font-weight: bold
        }

        div {
            display: flex;
            justify-content: space-between;
            padding-top: 1
        }
        
        span {
            font-style: italic
        }
    }
    
    .MuiBox-root {
        margin-bottom: 0
    }

    .MuiCardActions-root {
        justify-content: end;
        margin-bottom: 0
    }
`;

export const StyledContainerCardDetail = styled(Card)`
    margin-top: 10px;
    margin-bottom: 10px;
    transition: transform 0.5s ease-out;
    background-color: #757de8;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;

    &:hover {
        transform: scale(1.03)
    }
`;

export const Img = styled('img')`
    margin: auto;
    display: block;
    width: 100%
`;

export const BoxItemDetail = styled(Box)`
    width: 80%;
    margin: 120px auto 0;

    > div {
        margin-left: auto;
        margin-right: auto;
    }
`;

export const BoxCartCount = styled(Box)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const BoxHomeBarraOpciones = styled(Box)`
    display: flex;  
    justify-content: center;
    align-items: center;
    background-color: #bbdefb;
    height: 100px;
    margin-bottom: 40px;
`;

export const GridContainerFooter = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bbdefb;
`;

export const GridContainerFooterNavbar = styled(Grid)`
    background-color: #1976d2;
    display: flex;
    justify-content: center;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-self: start;
        margin-bottom: 40px;
    }
`;
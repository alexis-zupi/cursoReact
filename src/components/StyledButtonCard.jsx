import styled from 'styled-components'
import { Button, Card } from '@mui/material'

export const StyledButtonCard = styled(Button)`
    color: #757ce8;
    font-weight: ${props => props.size === 'small' ? 'small' : 'large'};
    
    &:hover {
        color: #e8eaf6;
        background-color: #757de8;
        border-bottom: 2px solid #757ce8;
    }
`;

export const StyledConainerCard = styled(Card)`
    width: 350;
    background: #cdd2ea;
    height: 520;
    marginTop: 10;
    marginBottom: 10;
    marginTop: 40;
    marginBottom: 40;
    transition: transform 0.5s ease-out;

    &:hover {
        transform: scale(1.03)
    }
`;
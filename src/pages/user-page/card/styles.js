import styled, { css } from 'styled-components'

export const Shadow = styled.div`
    ${props => props.isBeingDragged && 
        css`
            background-color: ${({theme}) => theme.colors.cardShadow};
            border-radius: ${({theme}) => theme.borderRadius.medium};
            height: 140px;
            margin-bottom: 10px;
         `
    }
`

export const Wrapper = styled.div`
    background: ${({theme}) => theme.colors.white};
    border-radius: ${({theme}) => theme.borderRadius.medium};
    box-shadow: ${({theme}) => theme.boxShadow.card};
    display: flex;
    flex-direction: column;
    min-height: 75px;
    word-break: break-all;

    :hover {
        cursor: pointer;
    }
    
    ${props => props.isBeingDragged && 
        css`
            opacity: 0%;
        `
    }
    
    & {
        margin-bottom: 10px;
    }
`

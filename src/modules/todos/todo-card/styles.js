import styled, { css } from 'styled-components'

export const CardShadow = styled.div`
    ${props => props.isBeingDragged && 
        css`
            background-color: ${({theme}) => theme.colors.cardShadow};
            border-radius: ${({theme}) => theme.borderRadius.medium};
            height: 140px;
            margin-bottom: 10px;
         `
    }
`

export const CardWrapper = styled.div`
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

export const CardContent = styled.div`
    color: ${({theme}) => theme.colors.black};
    display: flex; 
    flex-direction: column;
    gap: 10px;
    padding: 12px 10px 12px 10px;
`

export const CardHeader = styled.header`
    background-color: ${({theme}) => theme.colors.grey.light};
    border-radius: inherit;
    display: flex;
    align-items: center;
    padding: 5px;
    height: 20px;
`

export const Title = styled.h1`
    font-size: ${({theme}) => theme.fontSizes.medium};
    margin-bottom: 3px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`

export const PropertyWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const PropertyHeader = styled.header`
    color: ${({theme}) => theme.colors.fontColors.label};
    font-size: ${({theme}) => theme.fontSizes.smallMedium};
    display: flex;
    background-color: inherit;
    margin-bottom: 2px;
`

export const Label = styled.label`
    font-size: ${({theme}) => theme.fontSizes.verySmall};
    margin-left: 5px;
    align-self: flex-end;
`

export const Span = styled.span`
    color: ${({theme}) => theme.colors.fontColors.label};
    font-size: ${({theme}) => theme.fontSizes.small};
    text-indent: 20px;
    cursor: pointer;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`

export const Priority = styled.div`
    display: flex;
    font-weight: bold;
    font-size: 11px;
    padding: 2px 5px 2px 5px;
    margin-left: auto;
    border-radius: ${({theme}) => theme.borderRadius.large};

    ${props => {
        if(props.priority === 'Alta') {
            return css`
                color: ${({theme}) => theme.colors.white};
                background-color: ${({theme}) => theme.colors.red};
            `
        }
        if(props.priority === 'Baixa') {
            return css`
                color: ${({theme}) => theme.colors.white};
                background-color: ${({theme}) => theme.colors.blue.light};
            `
        }
        if(props.priority === 'Media') {
            return css`
                color: ${({theme}) => theme.colors.black};
                background-color: ${({theme}) => theme.colors.yellow};
            `
        }
    }};
`




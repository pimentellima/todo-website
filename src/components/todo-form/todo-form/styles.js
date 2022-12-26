import styled, { css } from 'styled-components';
import Popup from 'reactjs-popup';

export const Form = styled.form`
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: ${({theme}) => theme.boxShadow.form};
    border-radius: ${({theme}) => theme.borderRadius.medium};
    display: flex;
    flex-direction: column;
    width: 540px;
    padding: 30px;
    z-index: 9999;
`

export const Title = styled.p`
    font-size: ${({theme}) => theme.fontSizes.veryLarge};
    margin-bottom: 18px;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`

export const Error = styled.p`
    color: ${({theme}) => theme.colors.red};
    display: flex;
    text-align: start;
    font-size: ${({theme}) => theme.fontSizes.small};
`

export const Label = styled.label`
    color: ${({theme}) => theme.colors.fontColors.primary};
    font-size: ${({theme}) => theme.fontSizes.medium};
    display: flex;
    justify-content: space-between;
    margin: 12px 0 8px 0;
`

export const PrioritySelect = styled.select`
    background-color: ${({theme}) => theme.colors.background};
    border: 1px solid ${({theme}) => theme.colors.background};
    border-radius: ${({theme}) => theme.borderRadius.medium};
    font-size: ${({theme}) => theme.fontSizes.medium};
    transition: ${({theme}) => theme.transitions.buttonHover};
    color: ${({theme}) => theme.colors.fontColors.placeholder};
    height: 50px;
    text-indent: 7px;
    width: 100%;

    ${props => props.selected && 
        css`
            color: ${({theme}) => theme.colors.fontColors.secondary};
        `
    }  
    
    :hover, :active {
        background-color: ${({theme}) => theme.colors.white};
        border-color: ${({theme}) => theme.colors.blue.light};
        cursor: pointer;
    }
`

export const AddFieldsDiv = styled.div`
    display: flex;
    margin-top: 15px;
    gap: 6px;
`

export const CalendarButton = styled.button`
    background-color: ${({theme}) => theme.colors.background};
    border: 1px solid ${({theme}) => theme.colors.background};
    border-radius: ${({theme}) => theme.borderRadius.medium};
    font-size: ${({theme}) => theme.fontSizes.medium};
    transition: ${({theme}) => theme.transitions.buttonHover};
    color: ${({theme}) => theme.colors.fontColors.placeholder};
    display: flex;
    align-items: center;
    height: 50px;
    text-indent: 10px;
    width: 100%;

    ${props => props.selected && 
        css`
            color: ${({theme}) => theme.colors.fontColors.secondary};
        `
    }  
        
    :hover, :active {
        background-color: ${({theme}) => theme.colors.white};
        border-color: ${({theme}) => theme.colors.blue.light};
        cursor: pointer;
    }
`

export const AddFieldButton = styled.button`
    color: ${({theme}) => theme.colors.fontColors.primary};
    border-radius: ${({theme}) => theme.borderRadius.medium};
    font-size: ${({theme}) => theme.fontSizes.smallMedium};
    transition: ${({theme}) => theme.transitions.buttonHover};
    background-color: inherit;  
    border: none;
    padding: 4px 6px;
    text-align: center;

    :hover {
        background-color: ${({theme}) => theme.colors.blue.default};
        color: ${({theme}) => theme.colors.white};
        cursor: pointer;
    }
`


export const SubmitButton = styled.button`
    border-radius: ${({theme}) => theme.borderRadius.medium};
    background-color: ${({theme}) => theme.colors.blue.default};
    transition: ${({theme}) => theme.transitions.buttonHover};
    font-size: ${({theme}) => theme.fontSizes.large};
    color: ${({theme}) => theme.colors.white};
    height: 45px;
    width: 100%;
    border: none;
    padding: 4px;
    margin-top: 25px;

    :hover {
        background-color: ${({theme}) => theme.colors.blue.dark};
        cursor: pointer;
    }   
`

export const CalendarPopup = styled(Popup)`
    &-content {
        background-color: ${({theme}) => theme.colors.white};
        padding: 8px 4px;
        border: 1px solid ${({theme}) => theme.colors.border.default};
        border-radius: ${({theme}) => theme.borderRadius.small};
        width: 300px;
        height: 300px;
        box-shadow: ${({theme}) => theme.boxShadow.default};
        
        .react-calendar__navigation {
            display: flex;
    
            .react-calendar__navigation__label {
                color: ${({theme}) => theme.colors.fontColors.label};
                font-weight: bold;
                font-size: ${({theme}) => theme.fontSizes.medium};
            }
    
            .react-calendar__navigation__arrow {
                flex-grow: 0.333;
            }
        }
    
        .react-calendar__month-view__weekdays {
            font-size: ${({theme}) => theme.fontSizes.smallMedium};
            color: ${({theme}) => theme.colors.fontColors.label};
            margin: 16px 0 5px 0;   
            text-align: center;
            
            abbr {
                text-decoration: none;
            }
        }
        
        button {
            background-color: ${({theme}) => theme.colors.white};
            color: ${({theme}) => theme.colors.fontColors.secondary};
            border-radius: ${({theme}) => theme.borderRadius.veryLarge};
            transition: ${({theme}) => theme.transitions.buttonHover};
            font-weight: bold;   
            margin: 2px;
            padding: 8px;
            border: none;
          
            &:hover {
                background-color: ${({theme}) => theme.colors.grey.veryLight};
                cursor: pointer;
            }
    
        }
    
      .react-calendar__month-view__days {
            display: grid !important;
            grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 
        
        .react-calendar__tile {
            max-width: initial !important;
        }
    
        .react-calendar__tile--range {
            background-color: #0b66ff;
            color: white;
        }
      }
    
      .react-calendar__month-view__days__day--neighboringMonth {
        color: #b5c9d8;
      }
    
      .react-calendar__year-view__months, .react-calendar__decade-view__years, .react-calendar__century-view__decades {
        display: grid !important;
        grid-template-columns: 20% 20% 20% 20% 20%;
    
        &.react-calendar__year-view__months {
          grid-template-columns: 33.3% 33.3% 33.3%;
        }
        
        .react-calendar__tile {
          max-width: initial !important;
        }
    }
  
  }
`
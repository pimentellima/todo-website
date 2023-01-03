import styled from "styled-components";

import Popup from 'reactjs-popup';

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.textColor};
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    margin: 12px 0 8px 0;
    
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

        
    :hover, :active {
        background-color: ${({theme}) => theme.colors.white};
        border-color: ${({theme}) => theme.colors.blue.light};
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

import styled from 'styled-components';
import Popup from 'reactjs-popup';

export const OpenDatepickerButton = styled.button`
    background-color: ${({theme}) => theme.colors.background};
    border: 1px solid ${({theme}) => theme.colors.background};
    border-radius: ${({theme}) => theme.borderRadius.medium};
    font-size: ${({theme}) => theme.fontSizes.medium};
    transition: ${({theme}) => theme.transitions.buttonHover};
    display: flex;
    align-items: center;
    height: 50px;
    text-indent: 10px;
    width: 100%;
    color: ${({theme, selected}) => 
        selected ? 
        theme.colors.fontColors.primary :
        theme.colors.fontColors.placeholder
    };
    
    :hover, :active {
        background-color: ${({theme}) => theme.colors.white};
        border-color: ${({theme}) => theme.colors.blue.light};
        cursor: pointer;
    }
`
export const RemoveDeadlineButton = styled.button`
    align-self: center;
    font-size: ${({theme}) => theme.fontSizes.smallMedium};
    border-radius: ${({theme}) => theme.borderRadius.small};
    color: ${({theme}) => theme.colors.fontColors.primary};
    background-color: ${({theme}) => theme.colors.white};
    transition: ${({theme}) => theme.transitions.buttonHover};
    padding: 7px 20px;
    border: none;

    :hover {
        background-color: ${({theme}) => theme.colors.blue.default};;
        color: ${({theme}) => theme.colors.white};
        cursor: pointer;
    }
`

export const DatepickerPopup = styled(Popup)`
    &-content {
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: ${({theme}) => theme.colors.white};
        border: 1px solid ${({theme}) => theme.colors.border.default};
        border-radius: ${({theme}) => theme.borderRadius.small};
        box-shadow: ${({theme}) => theme.boxShadow.default};
        padding: 8px 4px;
        
        .react-calendar button {
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

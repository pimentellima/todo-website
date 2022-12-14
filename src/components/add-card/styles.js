import styled, { css } from 'styled-components';
import Popup from 'reactjs-popup';


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 540px;
    padding: 30px;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const TitleLabel = styled.label`
    color: #101820;
    font-size: 22px;
    margin-bottom: 30px ;
`

export const Input = styled.input`
    height: 50px;
    padding-left: 10px;
    width: 100%;
    font-size: 15px;
    color: black;
    border: 1px solid;
    transition: border-color 0.2s ease-in;

    ${props => props.isInvalid ? 
        css`
            border-color: #f00;
        ` 
        :
        css`
            border-color: #c0d0e6;
            
            :focus-within {
                border-color: rgba(0,0,0,0.3);
            }
        `
    };
    
    ::placeholder {
        color: #849aac;
    }
`
export const PrioritySelect = styled.select`
    width: 100%;
    border-color: #c0d0e6;
    height: 50px;
    transition: border-color 0.2s ease-in;
    font-size: 15px;
    text-indent: 7px;
    ${props => props.selectChanged ? 
        css`
            color: black;
        ` :
        css`
            color: #849aac;
        `}
    
    :focus {
        border-color: rgba(0,0,0,0.3);
    }
`

export const PriorityOption = styled.option`
    color: black;
    
`
export const SubmitButton = styled.button`
    width: 100%;
    height: 50px;
    background-color: #3b5bfd;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    transition: opacity 0.15s linear;
    margin-top: 15px;

    :hover {
        opacity: 85%;
        cursor: pointer;
    }
`

export const Error = styled.p`
    display: flex;
    text-align: start;
    font-size: 12px;
    color: #e04a31;
`

export const CalendarLabel = styled.label`
    display: flex;
    flex-direction: column;
    color: #849aac;
    justify-content: center;
    border: 1px solid #c0d0e6;
    height: 50px;
    background-color: white;
    transition: border-color 0.2s ease-in;
    font-size: 15px;
    text-indent: 10px;
    
    :hover {
        cursor: pointer;
    }

    :focus {
        border-color: rgba(0,0,0,0.3);
    }

`

export const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  margin-top: 20px;
  background-color: white;
  padding: 8px 4px;
  border: 1px solid #c0d0e6;
  width: 300px;
  height: 300px;
  border-radius: 3px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  
  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
      display: flex;
      .react-calendar__navigation__label {
            color: #4d6673;
            font-weight: bold;
            font-size: 15px;
        }

        .react-calendar__navigation__arrow {
            flex-grow: 0.333;
        }
}
/* ~~~ label styles ~~~ */
    .react-calendar__month-view__weekdays {
        margin: 16px 0 5px 0;   
        text-align: center;
        font-size: 14px;
        color: #4d6673;

        abbr {
            text-decoration: none;
        }
    }
  /* ~~~ button styles ~~~ */
  button {
    margin: 2px;
    padding: 8px;
    background-color: white;
    font-weight: 600;   
    border: none;
    border-radius: 15px;
    color: #232323;
    transition: background-color 0.15s linear;
    
    &:hover {
        background-color: #e9f1ff;
        cursor: pointer;
    }
    &:active {
        color: white;
        background-color: #b5c9d8;
    }
  }
  /* ~~~ day grid styles ~~~ */
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
  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
      color: #b5c9d8;
  }
  .react-calendar__month-view__days__day--weekend {
  }
  /* ~~~ other view styles ~~~ */
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
`;
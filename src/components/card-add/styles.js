import styled, { css } from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    `

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 540px;
    padding: 30px;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const Title = styled.p`
    font-size: 20px;
    margin-bottom: 18px;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`
export const Label = styled.label`
    display: flex;
    color: #101820;
    font-size: 15px;
    margin: 12px 0 8px 0;

    :hover >:nth-child(1) {
        visibility: visible; 
    }
`

export const Input = styled.input`
    font-size: 16px;
    padding: 13px 10px;
    border: 1px solid #eef2f8;
    border-radius: 4px;
    background-color: #eef2f8;
    transition: border-color 0.1s ease-out ;

    ${props => props.isInvalid ? 
        css`
            border-color: #f00 ;
        `
        :
        css`
            :hover, :focus, :active {
                border-color: #3b5bfd;
            }
        `
    }

    :hover, :focus, :active {
        background-color: white;
    }
    
    ::placeholder {
        font-size: 15px;
        font-weight: normal;
        color: #849aac; 
    }
`
export const AddFieldDiv = styled.div`
    display: flex;
    margin-top: 15px;
    gap: 6px;
`

export const AddButton = styled.button`
    padding: 4px 6px;
    text-align: center;
    background-color: white;
    border: 1px solid #c0d0e6;
    border-radius: 8px;
    color: #849aac;
    font-size: 15px;
    transition: border-color 0.1s ease-out, color 0.1s ease-out;

    :hover {
        border-color: #3b5bfd;
        color: #3b5bfd;
        cursor: pointer;
    }
`

export const Select = styled.select`
    border-color: #c0d0e6;
    border-radius: 6px;
    height: 50px;
    font-size: 15px;
    text-indent: 7px;
    transition: border-color 0.1s ease-out;
    color: #849aac;
    
    :hover, :active {
        background-color: white;
        border-color: #3b5bfd;
        cursor: pointer;
    }
`
export const Option = styled.option`
    color: black;
`
export const SubmitButton = styled.button`
    height: 45px;
    width: 100%;
    background-color: #3b5bfd;
    border: none;
    padding: 4px;
    border-radius: 3px;
    color: white;
    font-size: 16px;
    transition: opacity 0.15s linear;
    margin-top: 25px;

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

export const CalendarButton = styled.button`  
    display: flex;
    flex-direction: column;
    color: #849aac;
    justify-content: center;
    border: 1px solid #c0d0e6;
    border-radius: 6px;
    height: 50px;
    background-color: white;
    transition: border-color 0.15s linear;
    font-size: 15px;
    text-indent: 10px;

    ${props => props.active &&
        css`
            background-color: white;
            border-color: #3b5bfd;
        `
    }
    
    :hover {
        background-color: white;
        border-color: #3b5bfd;
        cursor: pointer;
    }

`

export const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
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
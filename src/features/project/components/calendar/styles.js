import styled from "styled-components"

export const Button = styled.button`
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

  :focus-within {
    background-color: white;
    border-color: #3b5bfd;
  }
    
  :hover {
      background-color: white;
      border-color: #3b5bfd;
      cursor: pointer;
  }
`
export const Container = styled.div`
  background-color: white;
  padding: 8px 4px;
  border: 1px solid #c0d0e6;
  width: 300px;
  height: 300px;
  border-radius: 3px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  
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

    .react-calendar__month-view__weekdays {
      margin: 16px 0 5px 0;   
      text-align: center;
      font-size: 14px;
      color: #4d6673;

      abbr {
        text-decoration: none;
      }
    }

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
`
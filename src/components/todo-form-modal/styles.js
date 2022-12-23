import styled from "styled-components"

export const HideScreen  = styled.div`
    position: fixed;
    top:0; 
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(119,126,131, 0.5);
    z-index: -999;
`

export const Content = styled.div`
    display: flex;
    z-index: 9999;
`

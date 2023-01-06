import React from "react";
import { GrTextAlignLeft, GrCalendar } from "react-icons/gr";
import styled from "styled-components";

const Content = ({ title, description, deadline }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            {description && 
                <PropertyWrapper>
                    <PropertyHeader> 
                        <GrTextAlignLeft/>
                        <Label>
                            DESCRIÇÃO
                        </Label>
                    </PropertyHeader>
                    <Span>{description}</Span>
                </PropertyWrapper>
                }
            {deadline &&
                <PropertyWrapper>
                    <PropertyHeader> 
                        <GrCalendar/>
                        <Label>
                            PRAZO
                        </Label>
                    </PropertyHeader>
                    <Span>{deadline}</Span>
                </PropertyWrapper> 
                }
    </Wrapper>
    )
};

const Wrapper = styled.div`
    color: ${({theme}) => theme.colors.black};
    display: flex; 
    flex-direction: column;
    gap: 10px;
    padding: 12px 10px 12px 10px;
`

const Title = styled.h1`
    font-size: ${({theme}) => theme.fontSizes.medium};
    margin-bottom: 3px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`

const PropertyWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const PropertyHeader = styled.header`
    color: ${({theme}) => theme.colors.fontColors.label};
    font-size: ${({theme}) => theme.fontSizes.smallMedium};
    display: flex;
    background-color: inherit;
    margin-bottom: 2px;
`

const Label = styled.label`
    font-size: ${({theme}) => theme.fontSizes.verySmall};
    margin-left: 5px;
    align-self: flex-end;
`

const Span = styled.span`
    color: ${({theme}) => theme.colors.fontColors.label};
    font-size: ${({theme}) => theme.fontSizes.small};
    text-indent: 20px;
    cursor: pointer;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`

export default Content;
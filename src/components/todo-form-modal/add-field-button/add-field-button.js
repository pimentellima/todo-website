import React from "react";

export const AddFieldButton = ({ children, name, onClick }) => {

    return(
        <S.AddFieldButton 
            name={name} 
            type='button' 
            hidden={true} 
            onClick={onClick}
            >
            {children}
        </S.AddFieldButton>
    )
}
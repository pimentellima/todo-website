import React from "react";
import PopupMenu from "../../popup-menu/popup-menu";
import * as S from './styles';

const FormField = ({ label, hidden, onHideField, children }) => {

    return(
        <div hidden={hidden}>
            <S.Label htmlFor="">
                {label}
                <PopupMenu 
                    position='bottom right'
                    options={[
                        {
                            label: 'Remover campo', 
                            handler: onHideField
                        }
                ]}/>
            </S.Label>
           {children}
        </div>
    )
}

export default FormField;
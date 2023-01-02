import React from 'react';

import * as S from './styles';

const FieldButton = (props) => {
    const { label, buttonLabel, hidden, handleHide } = props;

    return(
        <S.Button 
            hidden={!hidden} 
            type="button" 
            onClick={() => handleHide(label, false)}
            >
            {buttonLabel}
        </S.Button>
    )
};

export default FieldButton;
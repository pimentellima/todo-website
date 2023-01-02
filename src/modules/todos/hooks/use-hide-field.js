import { useState } from "react";

export const useHideFields = () => {
    const [hideFields, setHideFields] = useState({
        description: true,
        deadline: true,
        priority: true,
    });

    const toggleHide = (fieldName) => {
        setHideFields({
           ...hideFields,
            [fieldName]:!hideFields[fieldName],
        });	
    };
    
    return [hideFields, toggleHide];
};
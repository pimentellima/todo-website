import { useState } from "react";

export const useHideFields = () => {
    const [hideFields, setHideFields] = useState({
        priority: true,
        deadline: true,
        description: true,
    });

    const toggleHide = (fieldName) => {
        setHideFields({
           ...hideFields,
            [fieldName]:!hideFields[fieldName],
        });	
    };
    
    return [hideFields, toggleHide];
};
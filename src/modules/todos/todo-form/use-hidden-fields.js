import { useState } from "react";

export const useHiddenFields = () => {
    const [hiddenFields, setHiddenFields] = useState({
        priority: true,
        deadline: true,
        description: true,
    });

    const toggleHide = (field) => {
        setHiddenFields({
           ...hiddenFields,
            [field]:!hiddenFields[field],
        });	
    };
    
    return [hiddenFields, toggleHide];

};
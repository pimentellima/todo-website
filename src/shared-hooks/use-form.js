import { useState } from 'react';

export const useForm = (initialConfig, onSubmit) => {
    const [form, setForm] = useState(initialConfig);

    const handleChange = (name, value) => {
        setForm({...form, 
            fields: {...form.fields, 
                [name]: {...form.fields[name], 
                    value: value, errorMessage: ''
                }
            }
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = form.validate(form.fields);
        
        if (Object.keys(errors).length > 0) {
            const newFields = {...form.fields};
            Object.keys(errors).forEach(key => {
                newFields[key] = {
                    ...newFields[key], errorMessage: errors[key]};
            })
            setForm(form => ({...form, fields: newFields}));
            return;
        };
        onSubmit(form.fields);
        setForm(initialConfig);
    };

    return ({ fields: form.fields, handleChange, handleSubmit })
};

import React from 'react';

import TitleField from '../components/form-fields/title-field/title-field'
import DescriptionField from '../components/form-fields/description-field/description-field'
import DeadlineField from '../components/form-fields/deadline-field/deadline-field'
import PriorityField from '../components/form-fields/priority-field/priority-field'
import FieldButton from '../components/field-button/field-button'

const TodoFormInitialConfig = () => {
    return {
        title: {
            renderInput: ({ value, label, error, handleChange }) => {
                return ( 
                    <TitleField
                        key={label}
                        value={value}
                        error={error}
                        handleChange={handleChange}
                        />
                )
            },
            renderButton: ({buttonLabel}) => {
                return(
                    <div key={buttonLabel}/>
                )
            },
            label: 'title',
            buttonLabel: '',
            value: '',
            error: '',
            hidden: null,
        },
        description: {
            renderInput: ({value, label, hidden, handleChange, handleHide}) => {
                return (
                    <DescriptionField
                        key={label}
                        value={value}
                        hidden={hidden}
                        handleChange={handleChange}
                        handleHide={handleHide}
                        />
                    )
            },
            renderButton: ({label, buttonLabel, hidden, handleHide}) => {
                return(
                    <FieldButton
                        key={buttonLabel}
                        label={label}
                        buttonLabel={buttonLabel}
                        hidden={hidden}
                        handleHide={handleHide}
                        />
                )
            },
            label: 'description',
            value: '',
            error: null,
            buttonLabel: '+ adicionar descrição',
            hidden: true,
        },
        deadline: {
            renderInput: ({value, label, hidden, handleChange, handleHide}) => {
                return (
                    <DeadlineField
                        key={label}
                        value={value}
                        hidden={hidden}
                        handleChange={handleChange}
                        handleHide={handleHide}
                        />
                )
            },
            renderButton: ({label, buttonLabel, hidden, handleHide}) => {
                return(
                    <FieldButton
                        key={buttonLabel}
                        label={label}
                        buttonLabel={buttonLabel}
                        hidden={hidden}
                        handleHide={handleHide}
                        />
                )
            },
            label: 'deadline',
            value: '',
            error: null,
            buttonLabel: '+ adicionar prazo',
            hidden: true,
        },
        priority: {
            renderInput: ({value, label, hidden, handleChange, handleHide}) => {
                return (
                    <PriorityField
                        key={label}
                        value={value}  
                        hidden={hidden}
                        handleChange={handleChange}
                        handleHide={handleHide}
                        />
                )
            },
            renderButton: ({label, buttonLabel, hidden, handleHide}) => {
                return(
                    <FieldButton
                        key={buttonLabel}
                        label={label}
                        buttonLabel={buttonLabel}
                        hidden={hidden}
                        handleHide={handleHide}
                        />
                )
            },
            label: 'priority',
            value: '',
            error: null,
            buttonLabel: '+ adicionar prioridade',
            hidden: true,
        }
    }
};

export default TodoFormInitialConfig;

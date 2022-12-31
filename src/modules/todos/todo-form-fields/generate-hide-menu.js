import React from 'react';
import PopupMenu from '../../../components/popup-menu/popup-menu';

export const generateHideMenu = (label, onHide) => (
    <PopupMenu 
        position='bottom right'
        options={[
            {
                label: 'Remover campo', 
                handler: () => onHide(label, true)
            }]}
        />
);
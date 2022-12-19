import React, { useContext } from 'react';

import List from '../list'
import * as C from './styles'
import { UserContext } from '../../contexts/UserContext';
import { useSections } from '../../hooks/useSections';

const Board = () => {
    const { logout } = useContext(UserContext)

    const { sections } = useSections()

    return (
        <C.Container>
            <C.Header>
                mathasks
                <C.Button onClick={() => logout()}>Sair</C.Button>
            </C.Header>
            <C.SectionsContent>
                {sections.map((content, index) =>
                    <List  
                        section={content.name} 
                        data={content.data} 
                        listIndex={index} 
                        key={index}/>)}
            </C.SectionsContent>
        </C.Container>
    );
};

export default Board;
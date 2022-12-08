import React, { useContext } from 'react';

import List from '../list'
import { Container } from './styles'

import { SectionContext } from '../../contexts/SectionContext';

const Board = () => {
    const { sections } = useContext(SectionContext)
    
    return (
        <Container>
            {sections.map((content, index) => 
                <List  
                    section={content.name} 
                    data={content.data} 
                    listIndex={index} 
                    key={index}/>)}
        </Container>
    );
};

export default Board;
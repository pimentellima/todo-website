import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const useSections = () => {
    const { user, setUser } = useContext(UserContext);

    const setSections = ( newSections ) => {
        const usersStorage = JSON.parse(localStorage.getItem("users"))
        const newUser = {...user, sections: newSections}
        const newStorage = usersStorage.filter(item => item.username != user.username)
        newStorage.push(newUser)
        localStorage.setItem("users", JSON.stringify(newStorage))
        setUser(newUser)
    }

    const addCard = (card, listIndex) => {
        const copySections = [...user.sections]
        const section = copySections[listIndex]
        section.data.push(card)
        copySections.splice(listIndex, 1, section)
        setSections(copySections)
    }

    const editCard = (params) => {
        const listIndex = params.listIndex 
        const index = params.index
        const card = params.card
        const copySections = [...user.sections]
        const section = copySections[listIndex]
        section.data.splice(index, 1, card)
        copySections.splice(listIndex, 1, section)
        setSections(copySections)
    }

    const moveToIndex = (from, to) => {
        const copySections = [...user.sections]
        const fromSection = copySections[from.listIndex]
        const toSection = copySections[to.listIndex]
        const fromItem = fromSection.data[from.index]

        fromSection.data.splice(from.index, 1)
        toSection.data.splice(to.index, 0, fromItem)

        copySections.splice(from.listIndex, 1, fromSection)
        copySections.splice(to.listIndex, 1, toSection)
        
        setSections(copySections)  
    } 

    const moveToList = (from, listIndex) => {
        const copySections = [...user.sections]
        const fromSection = copySections[from.listIndex]
        const toSection = copySections[listIndex]
        const fromItem = fromSection.data[from.index]
        fromSection.data.splice(from.index, 1)
        toSection.data.push(fromItem)
        copySections.splice(from.listIndex, 1, fromSection)
        copySections.splice(listIndex, 1, toSection)
        setSections(copySections)
    }


    return { sections: user.sections, addCard, editCard, moveToIndex, moveToList };
}

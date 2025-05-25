export const toggleSection = (
    sectionId: string,
    setOpenSectionIds: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setOpenSectionIds(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId) 
        : [...prev, sectionId]
    );
  };
  
  export const toggleCard = (
    cardId: string,
    setSelectedQuestionCards: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelectedQuestionCards(prev => 
      prev.includes(cardId)
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };
import { useState } from "react";

export const useToggle = () => {
    const [selectedQuestionCards, setSelectedQuestionCards] = useState<string[]>([]);
  const [openSectionIds, setOpenSectionIds] = useState<string[]>([]);
  const toggleSection = (sectionId: string) => {
    setOpenSectionIds(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId) 
        : [...prev, sectionId]
    );
  };

  const toggleCard = (cardId: string) => {
    setSelectedQuestionCards(prev => 
      prev.includes(cardId)
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };
  return {
    toggleSection,
    toggleCard,
    selectedQuestionCards,
    openSectionIds
  }
}

'use client'
import React, { createContext, useContext, useState } from 'react';

interface PlatformContextType {
  isSelectedPlatform: boolean;
  setIsSelectedPlatform: (platform: boolean) => void;
}

const PlatformContext = createContext<PlatformContextType | undefined>(undefined);

export const PlatformProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSelectedPlatform, setIsSelectedPlatform] = useState<boolean>(false);

  return (
    <PlatformContext.Provider value={{ isSelectedPlatform, setIsSelectedPlatform }}>
      {children}
    </PlatformContext.Provider>
  );
};

export const usePlatform = () => {
    const context = useContext(PlatformContext);
    if (!context) {
      throw new Error('usePlatform must be used within a PlatformProvidr');
    }
    return context;
  };
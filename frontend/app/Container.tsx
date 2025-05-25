interface ContainerProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
    return (
      <div className="flex justify-center w-full bg-white">
        <div className={`w-full max-w-[1440px] px-4 md:px-6 xl:px-0 ${className}`}>
          {children}
        </div>
      </div>
    );
  };
  

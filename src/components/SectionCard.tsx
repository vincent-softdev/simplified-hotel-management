import React, { createContext, useContext, PropsWithChildren } from "react";

// first create type, this type will only use once,
// so no need to create separately
type TSectionCard = {
  title: string;
  description: string;
};

// now we create context
const SectionCardContext = createContext<{ data: TSectionCard } | undefined>(
  undefined
);

const useSectionCardContext = () => {
  const context = useContext(SectionCardContext);
  if (!context) {
    throw new Error("useSectionCardContext must be used within SectionCard");
  }

  return context;
};

type SectionCardProps = PropsWithChildren &
  React.HTMLAttributes<HTMLElement> & {
    data: TSectionCard;
  };

const SectionCard = ({
  children,
  data,
  className,
  ...rest
}: SectionCardProps) => {
  return (
    <SectionCardContext.Provider value={{ data }}>
      <section className={`${className} section-card`} {...rest}>
        {children}
      </section>
    </SectionCardContext.Provider>
  );
};

export default SectionCard;

SectionCard.Title = function SectionCardTitle() {
  const { data } = useSectionCardContext();

  return <h1 className="section-card__title">{data.title}</h1>;
};

SectionCard.Description = function SectionCardDescription() {
  const { data } = useSectionCardContext();

  return <p className="section-card__description">{data.description}</p>;
};

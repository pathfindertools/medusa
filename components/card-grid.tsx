import { Section } from "./section";
import { Content } from "./content";


export const CardGrid = ({ data, children, parentField }) => {

  const gridCols = {
    "1": "grid-cols-1",
    "2": "grid-cols-2",
    "3": "grid-cols-3",
    "4": "grid-cols-4",
    "5": "grid-cols-5",
    "6": "grid-cols-5",
  }
  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div className={`max-w-desktop-full mx-auto ${data.style?.padding} ${data.style?.textAlignment} ${data.style?.minHeight}`}>
        <Content
            data = {data}
            styles = {data.style}
            alignment = {data.style?.alignment}            
            width = {data.style?.contentWidth}
            parentField = {parentField}
          />
        <div className={`grid sm:block gap-10 ${gridCols[data.style?.columns]}`}>
          {children}
        </div>
      </div>
    </Section>
  );
};

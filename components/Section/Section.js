import PropTypes from "prop-types";
import TextGrid from "/components/Text/TextGrid";
import TextGrid2 from "/components/Text/TextGrid2";

// Styles
import styles from "styles/Home.module.css";

function Sections({ data }) {
  return (
    <>
      {data.map((d) => (
        <Section 
          title={d.fields?.sectionName} 
          size={d.fields?.size} 
          color={d.fields?.color} 
          component={d.fields?.component} 
          key={d?.sys?.id} />
      ))}
    </>
  );
}

Sections.propTypes = {
  data: PropTypes.array,
};

export default Sections;
function Section({ title, color, size, component }) {

  let sectionPadding = '';

  switch(size[0]) {
    case "Small":
      sectionPadding = 'py-10';
      break;
    case "Medium":
      sectionPadding = 'py-20';
      break;
    case "Large":
      sectionPadding = 'py-32';
      break;
    default :
      sectionPadding = 'py-20';
  }

  let sectionBackground = '';

  switch(color[0]) {
    case "White":
      sectionBackground = 'bg-neutral-50';
      break;
    case "Dark":
      sectionBackground = 'bg-gray-900 text-white';
      break;
    case "Green":
      sectionBackground = 'bg-green-500 text-white';
      break;
    case "Grey":
      sectionBackground = 'bg-gray-100 ';
      break;
    default :
      sectionBackground = 'bg-neutral-50';
  }

  let isTextGrid = false;
  let isTextGrid2 = false;

  switch(component?.fields?.internalName) {
  
    case 'Get the best database experience':
      isTextGrid = true;
      break;

    case 'anotherone':
      isTextGrid2 = true;
      break;
  }

  return (
    <div className={sectionPadding + ' ' + sectionBackground}>
    <div className={'container mx-auto'}>
      { isTextGrid ? <TextGrid data={component}/> : '' }
      { isTextGrid2 ? <TextGrid2 data={component}/> : '' }
    </div>
    </div>
  );


}

Section.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  component: PropTypes.object,
};

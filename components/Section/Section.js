import PropTypes from "prop-types";

// Styles
import styles from "styles/Home.module.css";

function Sections({ data }) {
  return (
    <div className={styles.grid}>
      {data.map((d) => (
        <Section title={d.fields?.sectionName} key={d?.sys?.id} />
      ))}
    </div>
  );
}

Sections.propTypes = {
  data: PropTypes.array,
};

export default Sections;
function Section({ title }) {
  return (
    <a className={styles.card}>
      <h2>{title} &rarr;</h2>
      <p>Find in-depth information about Next.js features and API.</p>
    </a>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

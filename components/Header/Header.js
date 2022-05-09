import PropTypes from "prop-types";

// Styles
import styles from "styles/Home.module.css";

function Header({ title, slug }) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>
        Slug <code className={styles.code}>{slug}</code>
      </p>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
};

export default Header;

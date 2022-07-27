import PropTypes from 'prop-types'
import styles from '../Filter/Filter.module.css'
export const Filter = ( {onChange}) => {
  return (
    
      <label className={styles.label}>
        Find contacts by name
        <input  className={styles.input} type="text" onChange={onChange}  name='filter'/>
      </label>
    
  );
};
Filter.propTypes={
  onChange: PropTypes.func.isRequired,
}
import css from '../styles.css'

const FilterSection = () => (
  <div>
    <h3>Color:</h3>
    <div className={css.colorFilters}>
      <a>Red</a>
      <a>Green</a>
      <a>Blue</a>
      <a>Orange</a>
      <a>Purple</a>
      <a>Yellow</a>
      <a>White</a>
      <a>Black</a>
    </div>
  </div>
)

export default FilterSection;
import css from '../styles.css'
import Link from 'next/link'

const ColorFilter = (props) => { 
// if this color is included in the query/params, this link 
    // should remove the color from the query/params
// else this color should be added to the params/query
    // the link includes the color
  const paramLink = '/?color=' // + whatever is decided in logic above
  return (
    <Link href={paramLink}>
      <a>{props.color}</a>
    </Link>
  )
}


const FilterSection = () => (
  <div>
    <h3>Color:</h3>
    <div className={css.colorFilters}>
      <ColorFilter color='red' />
      <ColorFilter color='green' />
      <ColorFilter color='blue' />
      <ColorFilter color='orange' />
      <ColorFilter color='purple' />
      <ColorFilter color='yellow' />
      <ColorFilter color='white' />
      <ColorFilter color='black' />
    </div>
  </div>
)

export default FilterSection;
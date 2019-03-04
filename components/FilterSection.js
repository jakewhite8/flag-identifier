import css from '../styles.css'
import Link from 'next/link'

const ColorFilter = (props) => { 
  let paramLink = '/?colors=';

  // if this color is included in the query, this link 
  // should remove the color from the query
  if (props.params.includes(props.color)) {
    if (props.params.length === 1) {
      paramLink = '/';
    } else {
      // Create an array with the removed color
      const updatedParams = props.params.filter((color) => color !== props.color);
      for (var i = 0; i < updatedParams.length; i++) {
        paramLink += i === 0 ? updatedParams[i] : '+' + updatedParams[i];
      }
    }
  } else {
  // else this color should be added to the params/query
  // the link includes the color
    paramLink += props.color;
    if (props.params.length) {
      for (var i = 0; i < props.params.length; i++) {
        paramLink += '+' + props.params[i];
      }
    }
  }

  return (
    <Link href={paramLink}>
      <a>{props.color}</a>
    </Link>
  )
}


const FilterSection = (props) => (
  <div>
    <h3>Color:</h3>
    <div className={css.colorFilters}>
      <ColorFilter
        color='red' 
        params={props.query}
      />
      <ColorFilter
        color='green' 
        params={props.query}
      />
      <ColorFilter
        color='blue' 
        params={props.query}
      />
      <ColorFilter
        color='orange' 
        params={props.query}
      />
      <ColorFilter
        color='purple' 
        params={props.query}
      />
      <ColorFilter
        color='yellow' 
        params={props.query}
      />
      <ColorFilter
        color='white' 
        params={props.query}
      />
      <ColorFilter
        color='black' 
        params={props.query}
      />
    </div>
  </div>
)

export default FilterSection;
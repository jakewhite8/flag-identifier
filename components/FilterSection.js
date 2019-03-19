import css from '../styles.css'
import Link from 'next/link'

const ColorFilter = (props) => { 
  let paramLink = '/?colors=';

  // if this color is included in the query, this link 
  // should remove the color from the query
  if (props.colorParams.includes(props.color)) {
    if (props.colorParams.length === 1) {
      paramLink = '/';
    } else {
      // Create an array with the removed color
      const updatedParams = props.colorParams.filter((color) => color !== props.color);
      for (var i = 0; i < updatedParams.length; i++) {
        paramLink += i === 0 ? updatedParams[i] : '+' + updatedParams[i];
      }
    }
  } else {
  // else this color should be added to the params/query
  // the link includes the color
    paramLink += props.color;
    if (props.colorParams.length) {
      for (var i = 0; i < props.colorParams.length; i++) {
        paramLink += '+' + props.colorParams[i];
      }
    }
  }

  //If the color's filter is active - display accordingly
  const activeButton = props.colorParams.includes(props.color) ? css.activeFilter : css.nonActiveFilter;

  return (
    <Link href={paramLink}>
      <button className={activeButton}>{props.color}</button>
    </Link>
  )
}

const CrestFilter = (props) => {

  let crestLink = '/?crest=true'
  let nonCrestLink = '/?crest=false'

  return (
    <div>
      <h3 align="center">Crest:</h3>
      <div align='center' className={css.colorFilters}>
        <Link href={nonCrestLink}>
          <button>No Crest</button>
        </Link>
        <Link href={crestLink}>
          <button>Crest</button>
        </Link>
      </div>
    </div>
  )

}

const StarFilter = (props) => {

  let starLink = '/?star=true'
  let nonStarLink = '/?star=false'

  return (
    <div>
      <h3 align="center">Star(s):</h3>
      <div align='center' className={css.colorFilters}>
        <Link href={nonStarLink}>
          <button>No Stars</button>
        </Link>
        <Link href={starLink}>
          <button>Stars</button>
        </Link>
      </div>
    </div>
  )
}


const FilterSection = (props) => (
  <div>
    <h3 align="center">Color:</h3>
    <div align='center' className={css.colorFilters}>
      <ColorFilter
        color='red' 
        colorParams={props.query.colors}
      />
      <ColorFilter
        color='green' 
        colorParams={props.query.colors}
      />
      <ColorFilter
        color='blue' 
        colorParams={props.query.colors}
      />
      <ColorFilter
        color='orange' 
        colorParams={props.query.colors}
      />
      <ColorFilter
        color='purple' 
        colorParams={props.query.colors}
      />
      <ColorFilter
        color='yellow' 
        colorParams={props.query.colors}
      />
      <ColorFilter
        color='white' 
        colorParams={props.query.colors}
      />
      <ColorFilter
        color='black' 
        colorParams={props.query.colors}
      />
    </div>
    <CrestFilter 
      params={props.query}
      />
    <StarFilter 
      params={props.query}
      />
  </div>
)

export default FilterSection;
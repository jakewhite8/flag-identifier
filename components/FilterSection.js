import css from '../styles.css'
import Link from 'next/link'

const ColorFilter = (props) => { 
  
  let paramLink = props.buildLink('color', props.color)

  //If the color's filter is active - display accordingly
  const activeButton = props.colorParams.includes(props.color) ? css.activeFilter : css.nonActiveFilter;

  return (
    <Link href={paramLink}>
      <button className={activeButton}>{props.color}</button>
    </Link>
  )
}

const CrestFilter = (props) => {

  let routeWithCrest = props.buildLink('crest', true)
  let routeWithoutCrest = props.buildLink('crest', false)

  return (
    <div>
      <h3 align="center">Crest:</h3>
      <div align='center' className={css.colorFilters}>
        <Link href={routeWithoutCrest}>
          <button>No Crest</button>
        </Link>
        <Link href={routeWithCrest}>
          <button>Crest</button>
        </Link>
      </div>
    </div>
  )

}

const StarFilter = (props) => {

  let routeWithStar = props.buildLink('star', true)
  let routeWithoutStar = props.buildLink('star', false)

  return (
    <div>
      <h3 align="center">Star(s):</h3>
      <div align='center' className={css.colorFilters}>
        <Link href={routeWithoutStar}>
          <button>No Stars</button>
        </Link>
        <Link href={routeWithStar}>
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
        queryObject={props.queryObject}
        buildLink={props.buildLink}
        colorParams={props.queryObject.colors}
      />
      <ColorFilter
        color='green' 
        buildLink={props.buildLink}
        queryObject={props.queryObject}
        colorParams={props.queryObject.colors}
      />
      <ColorFilter
        color='blue' 
        buildLink={props.buildLink}
        queryObject={props.queryObject}
        colorParams={props.queryObject.colors}
      />
      <ColorFilter
        color='orange' 
        buildLink={props.buildLink}
        queryObject={props.queryObject}
        colorParams={props.queryObject.colors}
      />
      <ColorFilter
        color='purple' 
        buildLink={props.buildLink}
        queryObject={props.queryObject}
        colorParams={props.queryObject.colors}
      />
      <ColorFilter
        color='yellow' 
        buildLink={props.buildLink}
        queryObject={props.queryObject}
        colorParams={props.queryObject.colors}
      />
      <ColorFilter
        color='white' 
        buildLink={props.buildLink}
        queryObject={props.queryObject}
        colorParams={props.queryObject.colors}
      />
      <ColorFilter
        color='black' 
        buildLink={props.buildLink}
        queryObject={props.queryObject}
        colorParams={props.queryObject.colors}
      />
    </div>
    <CrestFilter 
      buildLink={props.buildLink}
      />
    <StarFilter 
      buildLink={props.buildLink}
      />
  </div>
)

export default FilterSection;
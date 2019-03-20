import css from '../styles.css'
import Link from 'next/link'

const ColorFilter = (props) => { 
  
  let paramLink = props.buildLink('color', props.color);

  //If the color's filter is active - display accordingly
  const activeButton = props.colorParams.includes(props.color) ? css.activeFilter : css.nonActiveFilter;

  return (
    <Link href={paramLink}>
      <button className={activeButton}>{props.color}</button>
    </Link>
  )
}

const CrestFilter = (props) => {

  let routeWithCrest = props.buildLink('crest', true);
  let routeWithoutCrest = props.buildLink('crest', false);

  const crestActiveButton = props.crestParams ? css.activeFilter : css.nonActiveFilter;
  const noCrestActiveButton = props.crestParams === false ?  css.activeFilter : css.nonActiveFilter;

  return (
    <div>
      <h3 align="center">Crest:</h3>
      <div align='center' className={css.colorFilters}>
        <Link href={routeWithoutCrest}>
          <button className={noCrestActiveButton}>No Crest</button>
        </Link>
        <Link href={routeWithCrest}>
          <button className={crestActiveButton}>Crest</button>
        </Link>
      </div>
    </div>
  )

}

const StarFilter = (props) => {

  let routeWithStar = props.buildLink('star', true);
  let routeWithoutStar = props.buildLink('star', false);

  const starActiveButton = props.starParams ? css.activeFilter : css.nonActiveFilter;
  const noStarActiveButton = props.starParams === false ?  css.activeFilter : css.nonActiveFilter;

  return (
    <div>
      <h3 align="center">Star(s):</h3>
      <div align='center' className={css.colorFilters}>
        <Link href={routeWithoutStar}>
          <button className={noStarActiveButton}>No Stars</button>
        </Link>
        <Link href={routeWithStar}>
          <button className={starActiveButton}>Stars</button>
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
        buildLink={props.buildLink}
        colorParams={props.queryObject.colors}
      />
      <ColorFilter
        color='green' 
        buildLink={props.buildLink}
        colorParams={props.queryObject.colors}
      />
      <ColorFilter
        color='blue' 
        buildLink={props.buildLink}
        colorParams={props.queryObject.colors}
      />
      <ColorFilter
        color='orange' 
        buildLink={props.buildLink}
        colorParams={props.queryObject.colors}
      />
      <ColorFilter
        color='purple' 
        buildLink={props.buildLink}
        colorParams={props.queryObject.colors}
      />
      <ColorFilter
        color='yellow' 
        buildLink={props.buildLink}
        colorParams={props.queryObject.colors}
      />
      <ColorFilter
        color='white' 
        buildLink={props.buildLink}
        colorParams={props.queryObject.colors}
      />
      <ColorFilter
        color='black' 
        buildLink={props.buildLink}
        colorParams={props.queryObject.colors}
      />
    </div>
    <CrestFilter 
      buildLink={props.buildLink}
      crestParams={props.queryObject.crest}
      />
    <StarFilter 
      buildLink={props.buildLink}
      starParams={props.queryObject.star}
      />
  </div>
)

export default FilterSection;
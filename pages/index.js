import {withRouter} from 'next/router'
import flags from '../flagData'
import FilterSection from '../components/FilterSection'
import FlagSection from '../components/FlagSection'

const Home = withRouter((props) => {

  // Organize the color params into an array
  function organizeColorParams(props) {
    const routeParameters = props.router  && props.router.query && props.router.query.colors
    if (routeParameters) {
      if (props.router.query.colors.includes(" ")) {
        return props.router.query.colors.split(" ");
      } else {
        return props.router.query.colors.split();
      }
    } else {
      return [];
    }
  }

  let colorParams = organizeColorParams(props);

  let crestParam = props.router && props.router.query && props.router.query.crest
  if (crestParam === 'true') {
    crestParam = true
  } else if (crestParam ==='false') {
    crestParam = false
  }

  let starParam = props.router && props.router.query && props.router.query.star
  if (starParam === 'true') {
    starParam = true
  } else if (starParam ==='false') {
    starParam = false
  }



  let queryObject = {
    "colors": colorParams,
    "crest": crestParam,
    "star": starParam
  }

  return (
    <div>
      <h1 align="center">Flag Identifier</h1>
      <FilterSection
        query={queryObject}
      />
      <FlagSection 
        query={queryObject}
      />
    </div>
  )
})

export default Home;
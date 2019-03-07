import {withRouter} from 'next/router'
import flags from '../flagData'
import FilterSection from '../components/FilterSection'
import FlagSection from '../components/FlagSection'

const Home = withRouter((props) => {
  // Organize the URL params into an array
  let colorParams = [];
  const routeParameters = props.router  && props.router.query && props.router.query.colors
  if (routeParameters) {
    if (props.router.query.colors.includes(" ")) {
      colorParams = props.router.query.colors.split(" ");
    } else {
      colorParams = props.router.query.colors.split();
    }
  }

  return (
  	<div>
  		<h1 align="center">Flag Identifier</h1>
  		<FilterSection
        query={colorParams}
      />
      <FlagSection 
        query={colorParams}
      />
		</div>
	)
})

export default Home;
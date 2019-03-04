import {withRouter} from 'next/router'
import flags from '../flagData'
import FilterSection from '../components/FilterSection'
import FlagSection from '../components/FlagSection'

const Home = withRouter((props) => {
  const colorParams = props.router.query.colors ? props.router.query.colors.split() : []
  return (
  	<div>
  		<h1>Flag Identifier</h1>
  		<FilterSection />
      <FlagSection 
        query={colorParams}
      />
		</div>
	)
})

export default Home;
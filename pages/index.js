import {withRouter} from 'next/router'
import flags from '../flagData'
import FilterSection from '../components/FilterSection'

const Home = withRouter((props) => {
  if (props.router.query.colors) {
    console.log("colors: ")
    console.log(props.router.query.colors)
  } else {
    console.log('no colors selected')
  }
  return (
  	<div>
  		<h1>Flag Identifier</h1>
  		<FilterSection />
  		<img src="https://www.countryflags.io/AD/flat/64.png" />
		</div>
	)
})

export default Home;
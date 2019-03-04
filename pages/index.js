import flags from '../flagData'
import FilterSection from '../components/FilterSection'

const Home = () => {
	console.log(flags)
  return (
  	<div>
  		<h1>Flag Identifier</h1>
  		<FilterSection />
  		<img src="https://www.countryflags.io/AD/flat/64.png" />
		</div>
	)
}

export default Home;
import flags from '../flagData'
import css from '../styles.css'


function calculateActiveFlags (query) {
  // Iterate through all flags in the flagData dataset and return which ones match the criteria
  
  function containsAllColors(paramColors, flagColors) {
    for (var j = 0; j < paramColors.length; j++) {
      if (!flagColors.includes(paramColors[j])) return false
    }
    return true
  }

  let activeFlags = []
  let flagArray = Object.keys(flags)
  for (var i = 0; i < flagArray.length; i++) {
    let currentFlag = flags[flagArray[i]]

    let satisfyColorRequirements = !query.colors || containsAllColors(query.colors, currentFlag["colors"])
    let satisfyCrestRequirements = (undefined == query.crest) || query.crest == currentFlag["crest"]
    let satisfyStarRequirements = (undefined == query.star) || query.star == currentFlag["star"]

    if (satisfyColorRequirements && satisfyCrestRequirements && satisfyStarRequirements) {
      activeFlags.push(flags[flagArray[i]].code)
    }
  }
  return activeFlags
}

const FlagSection = (props) => {
  const currentFlags = calculateActiveFlags(props.query)
  return (
    <div className={css.flagSection}>
      <h1 align="center">Flag Identifier</h1>
      {currentFlags.map((flag) => (
        <img title={flag} className={css.flagImage} key={flag} src={`https://www.countryflags.io/${flag}/flat/64.png`} />
      ))}
    </div>
  )
}

export default FlagSection;
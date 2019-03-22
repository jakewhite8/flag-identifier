import {withRouter} from 'next/router'
import flags from '../flagData'
import FilterSection from '../components/FilterSection'
import FlagSection from '../components/FlagSection'

const Home = withRouter((props) => {

  // Organize the color params into an array
  function organizeColorParams(propsActions) {
    const routeParameters = propsActions.router  && propsActions.router.query && propsActions.router.query.colors
    if (routeParameters) {
      if (propsActions.router.query.colors.includes(" ")) {
        return propsActions.router.query.colors.split(" ");
      } else {
        return propsActions.router.query.colors.split();
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

  let route = props && props.router && props.router.asPath

  
  let queryObject = {
    "colors": colorParams,
    "crest": crestParam,
    "star": starParam
  }


  function buildLink(filter, input) {

    let newLink = '?'


    let colorsActive = queryObject && queryObject["colors"];
    // if building a link for color 
    if (filter ==='color') {
      // are there active colors?
      if (colorsActive.length > 0) {
        // are we currently building the link of an active color
        if (colorsActive.includes(input)) {
          //remove it and add others

          //get active colors without current color included
          let updatedColorsActive = colorsActive.filter(color => color !== input)
          if (updatedColorsActive.length > 0) {
            newLink += 'colors=';
            for (let i = 0; i < updatedColorsActive.length; i++) {
              newLink += updatedColorsActive[i];
              if (i !== updatedColorsActive.length - 1) {
                newLink += '+';
              }
            } 
          }
        } else {
          // add active colors as well as the input and move on
          newLink += 'colors='
          for (let i = 0; i < colorsActive.length; i++) {
            newLink += colorsActive[i] + '+'
          }
          newLink += input
        }
      } else {
      // no active colors - add input and move on
        newLink += 'colors=' + input
      }
    } else if (colorsActive.length > 0) {
      //for each active color param add it to the newLink
      newLink += 'colors='
      for (let i = 0; i < colorsActive.length; i++) {
        newLink += colorsActive[i]
        if (i !== colorsActive.length - 1) {
          newLink += '+'
        }
      }
    }


    let starActive = queryObject && queryObject['star']
    if (filter === 'star') {
      // if the star filter is not active add it
      // or if parameter is not active, need to change the current star parameter
      if (starActive == undefined || starActive != input) {
        if (newLink !== '?') {
          newLink += '&'
        }
        newLink += 'star=' + input
      }
    } else if (starActive !== undefined) {
      // if we are not building a star link but there is one active
      // add active star parameter to newLink
      if (newLink !== '?') {
        newLink += '&'
      }
      newLink += 'star=' + starActive
    }

    let crestActive = queryObject && queryObject['crest']
    if (filter === 'crest') {
      // if the crest filter is not active add it
      // or if parameter is not active, need to change the current crest parameter
      if (crestActive == undefined || crestActive != input) {
        if (newLink !== '?') {
          newLink += '&'
        }
        newLink += 'crest=' + input
      }
    } else if (crestActive !== undefined) {
      // if we are not building a crest link but there is one active
      // add active crest parameter to newLink
      if (newLink !== '?') {
        newLink += '&'
      }
      newLink += 'crest=' + crestActive
    }


    if (newLink == '?') {
      return '/'
    } else {
      return newLink
    }
  }


  return (
    <div>
      <FilterSection
        queryObject={queryObject}
        route={route}
        buildLink={buildLink}
      />  
      <FlagSection 
        query={queryObject}
      />
    </div>

  )
})

export default Home;
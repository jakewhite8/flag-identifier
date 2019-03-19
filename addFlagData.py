import json

persist = True

while persist:

  countryName = countryCode = countryCrestInput = countryStarInput = ''
  color_array = []
  countryCrest = countryStar = confirm = None
  new_object = {}

  countryName = raw_input("What is the Country Name? ")
  type(countryName)

  countryCode = raw_input("What is the Country Code? ")
  type(countryCode)

  color_array = list()
  num = raw_input("Enter how many colors are in the flag: ")
  print 'Enter colors in array: '
  for i in range(int(num)):
      color = raw_input("color: ")
      color_array.append(color)
  print 'ARRAY: ',color_array

  def createBoolean(input):
    if input == 'y':
      return True
    elif input == 'n':
      return False
    else:
      print "response not recognized"
      exit(0)

  countryCrestInput = raw_input("Is there a crest in the flag? (y/n): ")
  type(countryCrestInput)

  countryCrest = createBoolean(countryCrestInput)

  countryStarInput = raw_input("Is a star present in the flag? (y/n): ")
  type(countryStarInput)

  countryStar = createBoolean(countryStarInput)

  print "Confirm:"
  print "Country Name: " + countryName
  print "Country Code: " + countryCode
  print "Country Colors: ", color_array
  print "Country Crest: " + str(countryCrest)
  print "Country Star: " + str(countryStar)

  confirm = createBoolean(raw_input('Continue? (y/n): '))

  if confirm:
    new_object = {
      countryName : {
        "code": countryCode,
        "colors": color_array,
        "crest": countryCrest,
        "star": countryStar
      }
    }

    with open('flagData.json') as f:
      data = json.load(f)

    data.update(new_object)

    with open('flagData.json', 'w') as f:
      json.dump(data, f)

  persist = createBoolean(raw_input("New data Entry? (y/n): "))

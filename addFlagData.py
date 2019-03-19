import json

countryName = raw_input("What is the Country Name? ")
type(countryName)

countryCode = raw_input("What is the Country Code? ")
type(countryCode)

color_array = list()
num = raw_input("Enter how many colors are in the flag:")
print 'Enter colors in array: '
for i in range(int(num)):
    color = raw_input("color: ")
    color_array.append(color)
print 'ARRAY: ',color_array

countryCrest = raw_input("Is there a crest in the flag? (y/n): ")
type(countryCrest)

if countryCrest == 'y':
  countryCrest = True
elif countryCrest == 'n':
  countryCrest = False
else:
  print "response not recognized"
  exit(0)

countryStar = raw_input("Is a star present in the flag? (y/n): ")
type(countryStar)

if countryStar == 'y':
  countryStar = True
elif countryStar == 'n':
  countryStar = False
else:
  print "response not recognized"
  exit(0)

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
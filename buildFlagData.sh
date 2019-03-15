echo -n "Type the country name: "
read countryName

echo -n "Type the country code: "
read countryCode

array=()
while IFS= read -r -p "Insert Flag Colors (end with an empty line): " line; do
    [[ $line ]] || break  # break if line is empty
    array+=("$line")
done

printf '%s\n' "Items read:"
printf '  «%s»\n' "${array[@]}"
echo 'array:'
echo ${array[@]}


crestPresent=;

echo -n "Crest present? (y/n): "
read -n 1 crest 
if [[ $crest == [yY] ]]; then
  crestPresent=true
elif [[ $crest == [nN] ]]; then
  crestPresent=false
else
  echo "Crest not recognized"
  crestPresent=false
fi

starPresent=;

echo -n "Star present? (y/n): "
read -n 1 star 
if [[ $star == [yY] ]]; then
  starPresent=true
elif [[ $star == [nN] ]]; then
  starPresent=false
else
  echo "Star not recognized"
  starPresent=false
fi

echo "Country: $countryName"
echo "Code: $countryCode"
echo "Colors: ${array[@]}"
echo "Crest: $crestPresent"
echo "Star: $starPresent"








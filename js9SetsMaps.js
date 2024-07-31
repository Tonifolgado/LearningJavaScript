//Set is a collection of elements. Set can only contains unique elements
const companies = new Set()
console.log(companies) //this is an empty set

//creating a set from an array
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  console.log(setOfLanguages)

  //Set(4) {"English", "Finnish", "French", "Spanish"}
//Set is an iterable object and we can iterate through each elements
for (const language of setOfLanguages) {
    console.log(language)
  }

console.log(companies.size) // 0
  
  companies.add('Google') // add element to the set
  companies.add('Facebook')
  companies.add('Amazon')
  companies.add('Oracle')
  companies.add('Microsoft')
  console.log(companies.size) // 5 elements in the set
  console.log(companies)

//Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}
//Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

console.log(companies.delete('Google'))
console.log(companies.size) // 4 elements left in the set

console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true

companies.clear()
console.log(companies)
//Set(0) {}

const langSet = new Set(languages)
  console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
  console.log(langSet.size) // 4
  
  const counts = []
  const count = {}
  
  for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })
  }
  console.log(counts)

/*
[
  { lang: 'English', count: 3 },
  { lang: 'Finnish', count: 1 },
  { lang: 'French', count: 2 },
  { lang: 'Spanish', count: 1 },
]
*/

//Union of sets
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

//Intersection of sets
let aa = [1, 2, 3, 4, 5]
let bb = [3, 4, 5, 6]

let AA = new Set(aa)
let BB = new Set(bb)

let cc = aa.filter((num) => BB.has(num))
let CC = new Set(cc)

console.log(CC)

//Difference of sets
let aaa = [1, 2, 3, 4, 5]
let bbb = [3, 4, 5, 6]

let AAA = new Set(aaa)
let BBB = new Set(bbb)

let ccc = aaa.filter((num) => !BBB.has(num))
let CCC = new Set(ccc)

console.log(CCC)

// MAP
const mapa = new Map()
console.log(mapa)
//Map(0) {}

//Creating a map from an array
countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(countries)
  console.log(map)
  console.log(map.size)

//Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}

const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

//Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}

console.log(countriesMap.get('Finland'))
//Helsinki
console.log(countriesMap.has('Finland'))
//true

//Getting all values from map using loop
for (const country of countriesMap) {
    console.log(country)
  }

/*
(2) ["Finland", "Helsinki"]
(2) ["Sweden", "Stockholm"]
(2) ["Norway", "Oslo"]
*/
for (const [country, city] of countriesMap){
    console.log(country, city)
   }






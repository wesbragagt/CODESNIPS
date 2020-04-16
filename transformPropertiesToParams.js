const input = {
  ENTITY_NAME: "wes_test1",
  ACTIVE_YN: true,
  ENTITY_TYPE_ID: 5,
  PARENT_ENTITY_ID: 1295,
  ENTITY_ADDRESS_1: "somewhere",
  ENTITY_CITY: "Los Angeles",
  ENTITY_STATE: "CA",
  ENTITY_ZIP: "12345",
  TIME_ZONE_ID: 4,
  USE_DST_YN: true,
  SESSION_TIMEOUT_INTERVAL: 90,
  ENTITY_SUBDOMAIN: "westest1"
};
const obj = {
  sEntityName: input.ENTITY_NAME,
  bActiveYN: input.ACTIVE_YN,
  nEntityTypeId: input.ENTITY_TYPE_ID,
  nParentEntityId: input.PARENT_ENTITY_ID,
  sEntityAddress1: input.ENTITY_ADDRESS_1,
  sEntityAddress2: input.ENTITY_ADDRESS_2,
  sEntityCity: input.ENTITY_CITY,
  sEntityState: input.ENTITY_STATE,
  sEntityZip: input.ENTITY_ZIP,
  nTimeZoneId: input.TIME_ZONE_ID,
  bUseDSTYN: input.USE_DST_YN,
  nSessionTimeoutInterval: input.SESSION_TIMEOUT_INTERVAL,
  sEntitySubdomain: input.ENTITY_SUBDOMAIN
};

function transformPropertiesToParams(obj){
  const capitalize = str => {
  const firstLetter = str.charAt(0);
  return firstLetter.toUpperCase() + str.slice(1);
};

const charType = value => {
  const type = typeof value
  return type.charAt(0)
}

const addTypeLetter = letter => str => letter + str

let newObj = {}
for (let key in obj) {
  const value = obj[key]
  const letter = charType(value)
  
  const newKey = letter + key
    .toLowerCase()
    .split("_")
    .map(capitalize)
    .join("")
    
    
  console.log(newKey)
       
    newObj = Object.assign({},newObj, {[newKey]: value})
}
  return newObj
}

transformPropertiesToParams(input)







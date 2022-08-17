// Character Map

function buildCharacterMap(str) {
  const characterMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase());
  characterMap[char] = characterMap[char] + 1 || 1;

  return characterMap
}

function isAnagram(stringA, stringB) {
  const stringAMap = buildCharacterMap(stringA);
  const stringBMap = buildCharacterMap(stringB);

  for (let char in stringAMap) {
    if (stringA[char] !== stringBMap[char]) return false;
  }

  if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) {
    return false;
  }
  return true;
}

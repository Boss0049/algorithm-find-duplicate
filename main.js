function findDuplicate(stringList) {
  if (stringList.length === 0) {
    return "";
  }

  let prefix = stringList[0];

  for (let i = 1; i < stringList.length; i++) {
    while (stringList[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);

      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
}

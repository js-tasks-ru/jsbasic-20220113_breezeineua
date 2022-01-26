function ucFirst(str) {
  if (str.length >= 1) {
    str = str[0].toUpperCase() + str.substring(1);
  }
  return str;
}

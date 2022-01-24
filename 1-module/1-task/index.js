function factorial(n) {
  if (n == 0) {
    return 1;
  } 
  multi = 1;
  for (let i = n; i > 1; i--) {
    multi = multi * i;
  }
  return multi;
}
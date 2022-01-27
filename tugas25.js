function panggil() {
  var array1 = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  console.log("Sebelumnya :", array1.toString());
  var asc = array1.sort();
  console.log("Ascending :", asc.toString());
  var desc = array1.reverse();
  console.log("Descending :", desc.toString());

  let result = array1.filter((arr) => {
    return arr > 10;
  });
  console.log("Filter > 10 :", result.toString());
}

panggil();

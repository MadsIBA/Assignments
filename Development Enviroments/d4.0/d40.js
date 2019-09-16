//task 1-5
/*
function outputArray(theArray) {
  let placesToVisit = ["NY", "LA", "San Francisco", "Chicago", "Seattle"]

  placesToVisit.push("Jackson");

  for (let i=0; i<placesToVisit.length; i++) {


    document.write(placesToVisit[i] + "<br />");
  }
}
*/

//task 6, 8, 9, 10
function outputArray(placesToVisit) {
  placesToVisit = ["NY", "LA", "San Francisco", "Chicago", "Seattle"]
  placesToVisit.push("Jackson");
  placesToVisit.splice(0,2);
  placesToVisit.sort();

  for (let i=0; i<placesToVisit.length; i++) {
    document.write(placesToVisit[i] + "<br />");
  }
}
outputArray();

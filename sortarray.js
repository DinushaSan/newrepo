let onedirection = ["Harry", "Louis", "Liam", "Niall", "Zayn"];
//sort an array
onedirection.sort();
console.log(onedirection);
onedirection = ["Harry", "Louis", "Liam", "Niall", "Zayn"];
//reverse an array
onedirection.reverse();
console.log(onedirection);

//numbers sort
let points = [3,1,2,4,5];
points.sort(function(a,b){
    return a - b;
})
console.log(points);

points.sort(function(a,b){
    return b - a;
})
console.log(points);
let myString = "1,2,3,AA,h,m,e,d,,,_,S,a,y,e,d,_,T,a,l,i,b,1,2,0,Z";

let solution = "?????";

solution = myString.split("").filter(function(ele){
    return isNaN(parseInt(ele));
}).filter(function (nC){
    return nC !== ",";

}).map(function(ele){
    return ele === "_" ?  " " : ele ;

}).reduce(function(acc,curr,index){
    
    return acc+curr; 
});

solution = solution.slice(1,-1);



console.log(solution);// Ahmed Sayed Talib

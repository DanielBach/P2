var arrAvg = function(n) {
"use strict";
var total = 0;
var i;
var average;

for (i = 0; i < n.length; i++){
	total = total + n[i];
}

average = total/n.length;
return average; 
}

var arrMax= function(n) {
"use strict";
var currentMax = 0;
var i;

for (i = 0; i < n.length; i++){
	if(n[i] > currentMax){
		currentMax = n[i];
}
}
return currentMax;
}

var isMember = function(a , s) {
"use strict";
var trueOrFalse = false; 
var i; 

for (i = 0; i < a.length; i++){
	if(a[i] == s){
		trueOrFalse = true;
}

}
return trueOrFalse;
}
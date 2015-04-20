var isArmstrong = function(n) {
"use strict";
var sum = 0;
n = String(n);
for(var i = 0; i<n.length; ++i) {
sum = sum + Math.pow( ( parseInt( n[i] ) ),n.length)
}
if(n==sum) {
return true;
}
else {
	return false;
}	
}

var allArmstrongs = function() {
"use strict";
var result = "";
	for(var k = 1; k < 99999; ++k) {
	if(isArmstrong(k)) {
		result = result + k + " ";
	}	
	}
	return result;
}

var allSubstrings1 = function(s) {
"use strict";
var result = "";
for(var i = 0; i<s.length+1; ++i) {
	for(var k=i; k<s.length+1; ++k) {
		if(i!=k){
		result = result + s.substring(i,k) + ",";
		}		
	}
}
return result;
}

var allSubstrings2 = function(s) {
"use strict";
var result = [];
for(var i = 0; i<s.length+1; ++i) {
	for(var k=i; k<s.length+1; ++k) {
		if(i!=k){
		result.push(s.substring(i,k));
	}
	}
}
return result;
}

var maxWord = function(s) {
"use strict";
var myArray = s.split(" ");
var current = 0;
var result = "";

for(var i = 0; i< myArray.length; ++i) {
if(myArray[i].length > current) {
	current = myArray[i].length;
	result = myArray[i]; 
}
}
return result;
}
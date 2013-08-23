//Models

/*
This script stores data information

*/
(function(window,Splash){
//define Models here

var Model = {};

Model.datatype = {
	
	number:function(){
		return typeof value === "number"? true : false;
	},
	
	string:function(maxRange){
		
		var check = function(value){
			if (maxRange && value.length > maxRange){
				return false
			}
			
			if (typeof value === 'string'){
				return true;
			}			
			else {
				return false;
			}
		}
		
		return check;
	},
	
	
	enum: function()
			
	



	
	
})(window,Splash);

//Models

/*
This script stores data information

*/
(function(window,Splash){
//define Models here

var Model = {
	
	//Define ERRORS HERE 
	Error : { 
		
			argumentError : function(method_name){
				try {
						//Given method must be given an argument.
						return "ArgumentError :" + method_name + "method must be given an argument.";
				}
				catch(e){
					return "ArgumentError :method must be given an argument.";
				}
			}
			
	}
};


//Defigning Model datatype
Model.datatype = {
	
	//Prop
	number:function(value){
		return typeof value === "number" ? true : false;
	},
	
	
	
	string:function(maxRange){
		
		var check = function(value){
			
			var flag = false;
			if (maxRange && value.length > maxRange){
				return flag;
			}
			
			if (typeof value === 'string'){
				flag = true
				
			}			
			return flag;
		}
		
		return check;
	},
	
	
	
	enum: function(){
		try{
			if (arguments.length === 0){
				throw(Model.Error.argumentError('Model.datatype.enum()'));
			}
		}
		//Storing optional values
		var possibleValues = Array.prototype.slice.call(arguments,0);
		return function(value){
			var flag = false;
			if (!value){
				//Argument Error
				throw(Error[1]());
			}
			for (var i=0;i<possibleValues.length;i++){
				if(value === possibleValues[i]){
					flag = true;
				}
			}
			//Return flag value
			return flag;
		};
		
	},
	
	
	
	//use it like prop
	array: function(value){
		
		var flag=false;
		if (typeof value === "object" && value instanceof Array)
		{
			flag=true
		}
		return flag;
	},
	
	
	//custom should accept a custom datatype function as argument and returns boolean
	//fn would accept an value argument and must return a boolean
	custom: function(fn){
		return fn;
	}
		
};



Model.constraint = {
	
	Null : true,
	PrimaryKey : true,
	
	//Foreign Key
	
	
};



	
	
})(window,Splash);

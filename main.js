/*
Splash.js
July-11-2013
Robins Kumar Gupta
*/

/**
 *@module splash
 * 
 */


(function( window ){
	
//main function for writing script..
var _$,Splash;

//Create new methods for Objects, Arrays and Functions here..

{
	

	if(typeof Object.create!=='function'){
		/**
		* Returns an new object that uses an old object as its prototype.
		* @param {object} object old object.
		* @returns {object}  new object that uses an old object as its prototype. 
		*/
		Object.create = function (object) {
			var func = function(){};
			func.prototype = object;
			return new func();
			};
		}
		
		
		
	/**
	* Adding <i>method</i> method which makes that method available to all different objects.
	* @method Object.method
	* @param {string} name name of method
	* @param {function} func function of the method
	* @returns {object} returns the same object on which method is added to faciliate chaining.
	* @instance  
	*/
	Object.prototype.method=function(name,func){
		
		if(!this.prototype[name]){
			this.prototype[name]=func;
		}
		return this;
	}
	/**
	 * Adds static methods  to object or functions
	 * @method Object.static_method
	 * @param {object} obj object containing all static methods.
	 * @param {boolean} hasOwnProperty <h5>Default value is <i>false</i>.</h5>This flag if set true will add only those methods which  is truely a member of object and not found in prototype chain.
	 * @returns {object} Returns object with  added static methods.
	 * @instance
	 */
	Object.prototype.static_method=function(obj,hasOwnProperty=false){
		for(name in obj){
			if(hasOwnProperty){
				//add only true methods
				if(obj.hasOwnProperty(name)){ 
				this[name]=obj[name];
				}
			}
			else{
				//add all found methods.
				this[name]=obj[name];
			}
			return this;
		}
		
	
	

	/**
	 * @namespace
	 * @name String
	 */
	String.method('trim',
		/**
		 * Removes whitespace from the ends of a string.
		 * @name trim
		 * @function trim
		 * @memberof String
		 * @returns {string} returns same string with removed spaces from the ends.
		 */
		function(){
			return this.replace(/^\s+|\s+$/g,'');
	});
	
		


}


/** _$  Returns an HTML element or a collection of HTML elements .
 * @name _$
 * @class An abstract class
 * @constructor
 * @param {string} markers An HTML element or Class of element or Id of element.
 * @returns {An html elements array} 
 */
_$ ={ };




_$.method('create_instance', 
	  /** 
	   * Creates an instance of class. <h5>_$.prototype.create_instance(<i>func</i>)</h5>
	   * @name create_instance
	   * @function create_instance
	   * @memberof _$.prototype
	   * @param {function} func function class which instance is to be created
	   * @param {any type} addtional_arguments arguments for class initialization.
	   * @returns {object} object with new prototype values set to its chain..
	   */
	function(func){
		if (arguments.length>1){
			//We are not using apply because new doesnot work for apply.So we are using bind.
			for(var i=1;i<arguments.length;i++){
				func=func.bind(this,arguments[i]);
			}
		}
		return new func();
});
		  
//Creating a child object Splash  using _$ as prototype
Splash=Object.create(_$)


//Exposing Splash globally..
window.Splash = window._ = Splash;
})( window );
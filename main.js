/*
Splash.js
July-11-2013
Robins Kumar Gupta
*/

/**
 *@module splash
 * 
 */


(function( window ) {
	
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
	* @param {function|Any type} func function or any type that need to be added of the method.
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
	 * Adds static methods  to object or function.
	 * @method Object.staticMethod
	 * @param {string} name Name of function or object that need to be added.
	 * @param {function|Any Type} func function or Any type which needs to be added.
	 * @returns {object} Returns object with  added static method.
	 * @instance
	 */
	Object.prototype.staticMethod=function(name,func){
		
		if(!this[name]){
			this[name]=func;
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
		 * @memberOf String.prototype
		 * @returns {string} returns same string with removed spaces from the ends.
		 */
		function(){
			return this.replace(/^\s+|\s+$/g,'');
	});
	
		


}


/** 
 * @namespace  Its a Prototype that act as a primary container for all methods of Splash.js . 
 */
_$ = {
	/**
	 * @constructor
	 * Returns html element object of class,id,name,tag name provided as css selectors.
	 * @param {Array[string]} markers array of <i>HTML element</i>. 
	 * @returns {object} Returns obect with "{object}.elements" property added to the object.Which contains array of html element objects. 
	 */
	Init:function(markers){
		//This code needs to be modified.
		this.elements=[];
		for(var i=0,len=markers.length;i<len;++i){
			var element = markers[i];
			if(typeof element === 'string'){
				element = document.getElementById(element);
			}
			this.elements.push(element);
		}
		return this;
	},
	
	
};

//Add only  those methods here which needs HTML ELEMENTS OBJECT to perform. 
/* DOM.
 * EVENTS.
 * ELSE LIKE LOOP FOR LOOPING INSIDE ELEMENTS.
 * AJAX AND WEBSOCKET.
 * COLOR.
 * ITERATORS.
 * ANIMATION.
 * CSS PROPERTIES.
 * VISUAL EFFECTS.
 */
//NOTE _$.Init.prototype.createInstance method is only to expalin how documentation works for _$.Init.prototype methods  and has no use.So delete it when you start writing methods to Init. 
_$.Init.method('createInstance', 
	/** 
	 * Creates an instance of class. <h5>_$.Init.createInstance(<i>func</i>)</h5>
	 * @memberOf _$.Init.prototype
	 * @name createInstance
	 * @function createInstance
	 * @instance
	 * @param {function} func constructor method of which instance is to be created
	 * @param {any type} additional_arguments arguments for class Initialization.
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
		
	}); //Form a chaining of methods here.. 



//Define all static members here..using _$.staticMethod and forming a chain 
/*
 * JS ERRORS.
 * JS COOKIES.
 * JS DATE.
 * JS STACK.
 * JS QUEUE.
 */

_$.staticMethod('createInstance', 
	/** 
	 * Creates an instance of class. <h5>_$.Init.createInstance(<i>func</i>)</h5>
	 * @memberOf _$
	 * @name createInstance
	 * @function createInstance
	 * @static
	 * @param {function} func constructor method of which instance is to be created
	 * @param {any type} additional_arguments arguments for class initialization.
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
		
	}); //Form a chaining of methods here.. 

	
	


//Creating prototypal inheritence of _$ Object
Splash = Object.create(_$);



//Overriding the Init method of _$
Splash.Init = function(){
	
	return new Splash.Init(arguments);
};





		  



//Exposing Splash globally..
window.Splash = window._ = Splash;
})( window );
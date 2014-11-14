/**
 * Created by dsmiley on 11/13/14.
 */
/*
* create namespace, I generally always use a namespace when creating objects that will be used in production systems.
* */
var OntTest = function(){

}

/**
 * Manages Text Selection events and editing.
 */
OntTest.TestPlugin = function(element, options, jQueryInstance){
    //non bindable properties
    this.options = $.extend(OntTest.TestPlugin .DEFAULTS, this.data, options);
    this.element = $(element);
    //I don't like using selectors and generally prefer dependency injection or params
    this.form = this.options.form;
    this.outputContainer = this.options.outputContainer;
    this.input = this.options.input;
    //make sure this is scoped properly, could use native bind function here too
    this.submitProxy = $.proxy(this.onSubmit, this);
    //IMPORTANT: Lavender JS is an open source JS framework I created and maintain on git.
    //It includes object level data binding, object level event dispatching, HTTP service abstraction, and much more
    //Check it out at https://github.com/doriansmiley/lavenderJS
    this.binder = new Lavender.Binder();//binding utility
    /*example of how to handle css passed in options
     this.element.css({
     color: this.options.color,
     backgroundColor: this.options.backgroundColor,
     fontSize: this.options.fontSize
     });
     */

    if( this.form === undefined || this.form === null || this.form.length <= 0 ){
        throw new Error('OntTest.TestPlugin: form element is required');
    }

    if( this.outputContainer === undefined || this.outputContainer === null || this.outputContainer.length <= 0 ){
        throw new Error('OntTest.TestPlugin: output container element is required');
    }

    if( this.input === undefined || this.input === null || this.input.length <= 0 ){
        throw new Error('OntTest.TestPlugin: input element is required');
    }

    //expose public methods, destory would be cool but could collide with another framework
    jQueryInstance.destroyOntPlugin = $.proxy(this.destroyOntPlugin, this);

    //always implement a builder pattern for object construction
    //code will be much dryer when you need to change a behavior in a subclass
    this.init();
}

OntTest.TestPlugin.prototype.init = function(){
    this.addEventListeners();
}

OntTest.TestPlugin.prototype.addEventListeners = function(){
    this.form.on('submit', this.submitProxy);
}

OntTest.TestPlugin.prototype.onSubmit = function( event ){
    event.preventDefault();
    var seconds = new Date().getSeconds();
    this.outputContainer.prepend('<p>'+ this.input.val() + ' - ' + seconds +'</p>');
}

OntTest.TestPlugin.prototype.destroyOntPlugin = function(){
    if( console !== undefined && console !== null ){
        console.log('OntTest.TestPlugin.destroyOntPlugin called')
    }
    this.options = null;
    this.element = null;
    this.formSelector = null;
    this.outputContainerSelector = null;
    this.binder = null;
}

OntTest.TestPlugin.DEFAULTS = {};

//IMPORTANT: Lavender JS is an open source JS framework I created and maintain on git.
//It includes object level data binding, object level event dispatching, HTTP service abstraction, and much more
//Check it out at https://github.com/doriansmiley/lavenderJS
Lavender.ObjectUtils.plugInJQuery($, 'ontTest', OntTest.TestPlugin);
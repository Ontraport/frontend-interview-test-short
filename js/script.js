// Ontraport Test
// Author: Abdullah Tariq(fahadabdullahtariq@gmail.com)
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load'.
    bindEvents: function() {
        window.addEventListener("load", function load(event){
                window.removeEventListener("load", load, false); //remove listener, no longer needed
                app.onDOMReady();  
            },false);
    },
    // Window Load Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDOMReady: function() {
        var el = document.querySelector('form');
        el.addEventListener("submit", app.insertText, false);
    },
    // Trigger event on basis of DOM state
    insertText: function(evt) {
        evt.preventDefault();
        var inputvalue = document.querySelector('[name="post"]').value;
        // Valide if Input is not empty
        if(inputvalue.trim() !== "" ){
            if(page.innerHTML.trim() == ""){
                        app.appendText(inputvalue);
                    }else{
                        app.preppendText(inputvalue);
                    }
        }
        else{
            alert('Please Enter value');
        }
    },
     // Append Value to Div   
    appendText: function(value){
         var page = document.getElementById('page');
         var seconds = app.getSeconds();
         var appendp = document.createElement("p");
        // Give the new p some content
          appendp.innerHTML = value + ' - ' + seconds;
         page.appendChild(appendp);
    },
    // Prepend Value to Div
    preppendText: function(value){
        var page = document.getElementById('page');
         var seconds = app.getSeconds();
         var appendp = document.createElement("p");
         appendp.innerHTML = value + ' - ' + seconds;
         page.insertBefore(appendp, page.firstChild);
    },
    // Get current time in seconds    
    getSeconds: function(){
        var unixtime = new Date();
        var seconds = unixtime.getSeconds();
        return seconds;
    }  
};

app.initialize();
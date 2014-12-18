
window.onload = (function(d) {
      
  function SkillsTest() {
   
    this.cache = {
      form:  d.forms[0],
      input: d.forms[0].elements[0],
      page:  d.getElementById('page')      
    };
    
    this.init();
  }
  
  SkillsTest.prototype = {
    
    init: function() {    
      this.setHandlers();      
    },
    
    
    setHandlers: function() {      
      var this_ = this;
      
      this.assignHandler(this.cache.form, 'submit', function(evt) {
        
        evt.preventDefault();
        
        var input     = this_.cache.input,
            page      = this_.cache.page,
            sThoughts = input.value,
            nSeconds  = new Date().getSeconds(),
            newDiv    = document.createElement('div');            
            
        newDiv.innerHTML = this_.toHTMLEntities(sThoughts) + ' - ' + nSeconds;            
        page.insertBefore(newDiv, page.firstElementChild);        
        input.value = '';   // clear input textfield box
                
      }, false);            
    },
    
    assignHandler: function(el, evt, fn, bubble) {    
      el.addEventListener(evt, fn, bubble || false);      
    },
    
    toHTMLEntities: function(str) {      
      return str.replace(/./gm, function(s) {
        return "&#" + s.charCodeAt(0) + ";";
      });      
    },
    
    fromHtmlEntities: function(str) {
      return (str+"").replace(/&#\d+;/gm,function(s) {
        return String.fromCharCode(s.match(/\d+/gm)[0]);
      });
    }
  }
        
  new SkillsTest();
    
})(document);
var Post = function(val){

  this.create = function(){

    $('#page').append(
      '<article class="post post-'+this.id+'">' +
        '<h2>'+this.val+'</h2>'+
        '<aside>'+this.id+'</aside>'+
        '<span class="fa fa-times delete delete-'+this.id+'"></span>'+
      '</article>'
    );

    $('body').one('click','.delete-' + this.id, this.onClickDelete)

    setTimeout(function(){
      $('.post-'+ this.id).addClass('active')
    }.bind(this),250);

  };

  this.onClickDelete = function(e){
    $('.post-'+ this.id).remove();
  }.bind(this);

  this.init = function(){
    this.id = new Date().getSeconds();
    this.val = val;

    this.create();
  };

  this.init();
};

$(document).ready(function(){

  $('form').submit(function(e){
    e.preventDefault();

    var val = $('[name="post"]').val();

    $('#page').append(new Post(val));

  })

});
// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },
  toggleDescription:function(){
  	this.Model.on('click',function(){this.set(!this.get('displayInfo'))}
  		,this)
  	this.render();
  }

});

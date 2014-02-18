var HomeView = function (adapter, template, listItemTemplate) {

    this.initialize = function () {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('keyup', '.search-key', this.findByName);
        this.el.on('keyup', '.search-key', function(){try{
          alert("device.uuid " + device.uuid )
          }catch(e){
            alert(e);
          }
          ;});
    };

    this.render = function() {
        this.el.html(template());
        return this;
    };

    this.findByName = function() {
        adapter.findByName($('.search-key').val()).done(function(employees) {
            $('.employee-list').html(listItemTemplate(employees));
        });
    };

    this.initialize();

}
// DO NOT REQUIRE jQuery or jQuery-ujs in this file!
// DO NOT REQUIRE TREE!

// CRITICAL that vendor-bundle must be BEFORE bootstrap-sprockets and turbolinks
// since it is exposing jQuery and jQuery-ujs

//= require vendor-bundle
//= require app-bundle

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// require jquery
// require jquery_ujs
//= require dataTables/jquery.dataTables
//= require dataTables/bootstrap/3/jquery.dataTables.bootstrap
//= require bootstrap-sprockets
//= require material
//= require ripples
//= require turbolinks
//= require syntax-highlighter-rails/shCore
//= require syntax-highlighter-rails/shBrushSql
//= require select2
//= require clipboard
//= require dropzone
//= require flatpickr
//= require dataTables/jquery.dataTables
//= require dataTables/bootstrap/3/jquery.dataTables.bootstrap
//= require froala_editor.min.js
//= require bootstrap-tour
//= require ag-grid/dist/ag-grid
// require_tree .

$.material.init()

$(document).ready(function(){  
  var clip = new Clipboard('.btn');

    $.material.init();

});
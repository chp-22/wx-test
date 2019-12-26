//index.js

const util = require("../../utils/util");
const app = getApp()

Page({
  data: {
    
  },

  onLoad: function () {
    // var openPage = '/love/annivery/annivery'
    var openPage = '/demo/function_list/function_list'
    util.mustlogin(openPage, function(data) {
      
    })
  },

})

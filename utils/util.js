const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function showmodal(t, con, fun, ifc, fun1) {
  if (!con) {
    con = "";
  }
  wx.showModal({
    title: t,
    content: con,
    showCancel: ifc,
    success: function (res) {
      if (!ifc) {
        typeof fun == "function" && fun();
      } else {
        if (res.confirm) {
          typeof fun == "function" && fun();
        } else {
          typeof fun1 == "function" && fun1();
        }
      }
    }
  })
}

//警告
function alert1(c, v, fun) {
  var t = "提示";
  if (v) {
    t = v;
  }
  showmodal(t, c, fun, false);
}

//确认
function confirm1(c, v, fun, fun1) {
  var t = "确认";
  if (v) {
    t = v;
  }
  showmodal(t, c, fun, true, fun1);
}

function reto(url, fun) {
  wx.navigateTo({
    url: url,
    success: function () {
      typeof fun == "function" && fun();
    },
    fail: function () {
      if (wx.reLaunch) {
        wx.reLaunch({
          url: url,
          success: function () {
            typeof fun == "function" && fun();
          },
          fail: function () {
            wx.switchTab({
              success: function () {
                typeof fun == "function" && fun();
              },
              url: url
            })
          }
        });
      } else {
        wx.redirectTo({
          url: url,
          success: function () {
            typeof fun == "function" && fun();
          },
          fail: function () {
            wx.switchTab({
              success: function () {
                typeof fun == "function" && fun();
              },
              url: url
            })
          }
        })
      }
    }
  })
}

//获取当前页面地址
function cur_page1(e, isurl) {
  if (isurl) {
    var page = isurl;
  } else {
    var page = getCurrentPages()[getCurrentPages().length - 1].__route__;
  }
  if (typeof e == "object") {
    for (var a in e) {
      if (page.indexOf('?') == -1) {
        page = page + '?' + a + '=' + e[a];
      } else {
        page = page + '&' + a + '=' + e[a];
      }

    }
  }
  return page;
}

//倒计时
function GetRTime1(v) {
  var EndTime = new Date(v);
  var NowTime = new Date();
  var t = EndTime.getTime() - NowTime.getTime();
  if (t >= 0) {
    var d = 0;
    var h = 0;
    var m = 0;
    var s = 0;
    d = Math.floor(t / 1000 / 60 / 60 / 24);
    h = Math.floor(t / 1000 / 60 / 60 % 24);
    m = Math.floor(t / 1000 / 60 % 60);
    s = Math.floor(t / 1000 % 60);
  } else {
    return false;
  }
  return {
    d: d,
    h: h,
    m: m,
    s: s
  }
}

//数组操作函数 判断是否存在某个值
function in_array1(search, array, isv) {
  for (var i in array) {
    if (isv) {
      if (array[i][isv] == search) return true;
    } else if (array[i] == search) {
      if (array[i] == search) return true;
    }
  }
  return false;
}

//数组操作函数,获取键值
function indexOf_array(search, arr, isv) {
  var isi = -1;
  for (var i = 0; i < arr.length; i++) {
    if (isv) {
      if (arr[i][isv] == search) return i;
    } else {
      if (arr[i] == search) return i;
    }
  }
  return isi;
}

//获取数组的值
function get_array(id, arr, isv) {
  var i = indexOf_array(id, arr, isv);
  if (i > -1) {
    return arr[i];
  }
  return null;
}

//数组交换顺序
function change_array(id, arr, isv, ist) {
  var i = indexOf_array(id, arr, isv);
  var l = arr.length;
  var temp = arr;
  if (i > -1) {
    if (!ist) {
      var j = i + 1;
      if (j >= l) {
        return arr;
      }
    } else {
      var j = i;
      i = i - 1;
      if (i < 0) {
        return arr;
      }
    }
    var a = arr[i];
    var b = arr[j];
    temp[i] = b;
    temp[j] = a;

  }
  return temp;
}

//删除数组的值
function del_array(id, arr, isv) {
  var i = indexOf_array(id, arr, isv);
  if (i > -1) {
    arr.splice(i, 1);
  }
  return arr;
}

function delall_array(id, arr, isv) {
  var i = indexOf_array(id, arr, isv);
  if (i > -1) {
    arr.splice(i, 1);
    return delall_array(id, arr, isv);
  } else {
    return arr;
  }
}

/**
* 获取url上面参数值
* name: url参数的key
* by ghw
**/
const getQueryVariable = function (name) {
  var reg = new RegExp("[?&]" + name + "=([^&#]*)", "i");
  var res = window.location.href.match(reg);

  if (res && res.length > 1) {
    return decodeURIComponent(res[1]);
  }
  return '';
}

/**
* 获取url中参数,返回（json对象）
* url: http:// ...
* by ghw
**/
function getParams(url) {
  try {
    var index = url.indexOf('?');
    url = index > -1 ? url.match(/\?([^#]+)/)[1] : url;
    var obj = {}, arr = url.split('&');
    for (var i = 0; i < arr.length; i++) {
      var subArr = arr[i].split('=');
      var key = decodeURIComponent(subArr[0]);
      var value = decodeURIComponent(subArr[1]);
      obj[key] = value;
    }
    // alert('获取路径')
    return obj;

  } catch (err) {
    return null;
  }
}
/**
* json 转为url参数str
＊ data： json, noencode:是否加编码
* by ghw
**/
function parseParams(data, noencode) {
  try {
    var tempArr = [];
    for (var i in data) {
      var key = noencode ? i : encodeURIComponent(i);
      var value = noencode ? data[i] : encodeURIComponent(data[i]);
      tempArr.push(key + '=' + value);
    }
    var urlParamsStr = tempArr.join('&');
    return urlParamsStr;
  } catch (err) {
    return '';
  }
}

function mustlogin1(isurl, fun) {
  let have = wx.getStorageSync('haveIn')
  console.log(have)
  var page = isurl
  if (!have) {
    page = '/pages/mustLogin/mustLogin'
  }
  console.log(page)
  wx.reLaunch({
    url: page,
  })
  typeof fun == "function" && fun();
}


module.exports = {
  formatTime: formatTime,
  alert: alert1,
  confirm: confirm1,
  reto: reto,
  cur_page: cur_page1,
  GetRTime: GetRTime1,
  in_array: in_array1,
  indexOf_array: indexOf_array,
  get_array: get_array,
  change_array: change_array,
  del_array: del_array,
  delall_array: delall_array,
  getQueryVariable: getQueryVariable,
  getParams: getParams,
  parseParams: parseParams,
  mustlogin: mustlogin1
}

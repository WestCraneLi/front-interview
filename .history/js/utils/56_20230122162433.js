// 1、实现原生AJAX封装
const ajax = {
  get(url, fn) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        fn(xhr.responseText)
      }
    }
    xhr.send()
  },
  post(url, fn, data) {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-type', 'applicatin/x-www-urlencoded')
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        fn(xhr.responseText)
      }
    }
    xhr.send(data)
  }
}

// 实现一个new过程
function myNew(fn, ...args) {
  const obj = {}
  obj.__proto__ = fn.prototype
  
}
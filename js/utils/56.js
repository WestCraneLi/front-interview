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

// 2、实现一个new过程
function myNew(fn, ...args) {
  const obj = {}
  obj.__proto__ = fn.prototype
  fn.apply(obj, args)
  return obj
}

// 3、打乱一个数组
// 方法1
function shuffle(arr) {
  return arr.sort(() => {
    return Math.random() > 0.5 ? 1 : -1
  })
}
// 方法2
function shuffleTwo(arr) {
  let len = arr.length
  while(len) {
    let tmp = Math.floor(Math.random() * i--)
    [arr[j], arr[i]] = [arr[i], arr[j]]
  }
  return arr
}

// 4、防抖
function debounce(fn, delay = 200) {
  let timer
  return function(...args) {
    if(timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      clearTimeout(timer)
      timer = null
    }, delay)
  }
}

// 5、节流
function throttle(fn, delay = 200) {
  let flag = true
  return function(...args) {
    if(!flag) {
      return
    }
    flag = false
    let timer = setTimeout(() => {
      fn.apply(this, args)
      flag = true
      clearTimeout(timer)
    }, delay)
  }
}

// 6、数组去重
function unique(arr) {
  return [...new Set(arr)]
}

// 7、setTimout实现setInterval
function mySetInterval(fn, delay) {
  let timer = null
  const interval = () => {
    fn()
    timer = setTimeout(interval, delay)
  }
  timer = setTimeout(interval, delay)
  return {
    cancel: () => {
      clearTimeout(timer)
    }
  }
}

// 8、setInterval 实现 setTimeout
function mySetTimeout(fn ,delay) {
  const timer = setInterval(() => {
    fn()
    clearInterval(timer)
  }, delay)
}

// 9、compose函数
function fn(x) {
  return x + 1
}
function fn1(x) {
  return x + 2
}
function fn2(x) {
  return x + 3
}
function fn3(x) {
  return x + 4
}
function compose(...fns) {
  if(fns.length === 0) return (num) => num
  if(fns.length === 1) return fns[0]
  return fns.reduce((pre, next) => {
    return (num) => {
      return pre(next(num))
    }
  })
}

// 10、curring函数
const add = (a, b, c) => a + b + c
function curring(fn, ...args) {
  let allArgs = [...args]
  const num = fn.length
  const res = (...args2) => {
    allArgs = [...allArgs, ...args2]
    if(allArgs.length === num) {
      return fn(...allArgs)
    } else {
      return res
    }
  }
  return res
}

// 11、LRU算法

// 12、发布订阅算法

// 13、dom转对象
function domTotree(node) {
  const obj = {}
  obj.tag = node.tagName
  obj.children = []
  node.childNodes.forEach(child => obj.children.push(domTotree(child)))
  return obj
}
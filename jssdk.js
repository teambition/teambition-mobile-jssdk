// Teambition 移动端 Javascript Bridge 封装
;(function () {
  'use strict'
  // if (typeof window !== 'object' || !window.WebViewJavascriptBridge) {
  //   return
  // }

  if (typeof Promise !== 'function' || !!window.TeambitionMobileSDK) {
    return
  }

  function defineProperty (ctx, key, value) {
    Object.defineProperty(ctx, key, {
      enumerable: true,
      configurable: false,
      writable: false,
      value: value
    })
  }

  const bridge = window.WebViewJavascriptBridge
  const TeambitionMobileSDK = {}
  defineProperty(window, 'TeambitionMobileSDK', TeambitionMobileSDK)
  defineProperty(TeambitionMobileSDK, 'register', function (name, method) {
    defineProperty(TeambitionMobileSDK, name, method)
  })

  TeambitionMobileSDK.register('call', function (funcName, jsonRequest) {
    return new Promise(function (resolve, reject) {
      const requestStr = JSON.stringify(jsonRequest)

      bridge.callHandler(funcName, requestStr, function (response) {
        try {
          const result = JSON.parse(response)
          if (result.isSuccess) {
            resolve(result.data)
          } else {
            const err = new Error('window.TeambitionMobileSDK called failure')
            err.data = result

            if (result.error) {
              err.name = result.error.name
              err.message = result.error.message
            }
            reject(err)
          }
        } catch (err) {
          err.data = response
          reject(err)
        }
      })
    })
  })
})()

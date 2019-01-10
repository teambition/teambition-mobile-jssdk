# teambition-mobile-jssdk
Teambition mobile JavaScript SDK.

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

## Installation

**browser:**

```html
<script src="/pathTo/jssdk.js"></script>
```

## API

### window.TeambitionMobileSDK.call(funcName: string, jsonRequest: Object): Promise
JS SDK 的基础函数，在 Teambition 移动端的 WebView 中可以调用所有的 SDK 能力。

```js
if (!window.TeambitionMobileSDK) {
  return
}

const sdk = window.TeambitionMobileSDK
sdk.call('getAuthCode', {
  client_id: YOUR_APP_ID,
  audience: ORGANIZATION_ID
})
.then((authResponse) => {
  console.log(authResponse)
  // authResponse
  // {
  //   "code": "AUTHORIZATION_CODE", // 免登授权码，5分钟有效，且只能使用一次
  //   "expires_in": 300
  // }
})
.catch((err) => {
  console.error(err)
  // error response
  // {
  //   "name": "NotFound", // 错误代码
  //   "message": "app not found" // 错误消息
  //   "data": SDK_RESPONSE_DETAIL // for debug...
  // }
})
```

## License

teambition-mobile-jssdk is licensed under the [MIT](https://github.com/teambition/teambition-mobile-jssdk/blob/master/LICENSE) license.
Copyright &copy; 2019 Teambition.

[npm-url]: https://npmjs.org/package/teambition-mobile-jssdk
[npm-image]: http://img.shields.io/npm/v/teambition-mobile-jssdk.svg

[downloads-url]: https://npmjs.org/package/teambition-mobile-jssdk
[downloads-image]: http://img.shields.io/npm/dm/teambition-mobile-jssdk.svg?style=flat-square

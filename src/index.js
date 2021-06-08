/**
 * Object prototype function.
 *
 * @type {Function}
 */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Object prototype function.
 *
 * @type {Function}
 */
const toString = Object.prototype.toString

/**
 * RegExp prototype default source.
 *
 * @type {String}
 */
const source = RegExp.prototype.source

/**
 * Checks if the given value is empty.
 * @param {*} value The thing to be checked.
 * @param {Boolean} strict Strict mode.
 * @returns {Boolean} A boolean value which indicates if the given value is empty.
 * @public
 */
export function isEmpty (value, strict = false) {
  // `null` and `undefined` check
  if (value === null || typeof value === 'undefined') {
    return true
  }

  // `array` check
  if (Array.isArray(value)) {
    return value.length === 0
  }

  // `number` check
  if (typeof value === 'number') {
    if (!strict) {
      return false
    }

    return value === 0
  }

  // `bigint` check
  if (typeof value === 'bigint') {
    if (!strict) {
      return false
    }

    return value === BigInt(0)
  }

  // `boolean` check
  if (typeof value === 'boolean') {
    return false
  }

  // `string` check
  if (typeof value === 'string') {
    if (strict) {
      return value.trim() === ''
    }

    return value === ''
  }

  // `object` check
  if (typeof value === 'object') {
    switch (toString.call(value)) {
      case '[object RegExp]':
        // regexp source is the default source?
        if (value.source === source) {
          return true
        }

        return false
      case '[object WeakMap]':
      case '[object WeakSet]':
        // `WeakMap`s and `WeakSet`s are not iterable
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#why_weakmap
        return false
      case '[object Int8Array]':
      case '[object Uint8Array]':
      case '[object Uint8ClampedArray]':
      case '[object Int16Array]':
      case '[object Uint16Array]':
      case '[object Int32Array]':
      case '[object Uint32Array]':
      case '[object Float32Array]':
      case '[object Float64Array]':
      case '[object BigInt64Array]':
      case '[object BigUint64Array]':
        return value.length === 0
      case '[object ArrayBuffer]':
      case '[object SharedArrayBuffer]':
      case '[object DataView]':
        return value.byteLength === 0
      case '[object Map]':
      case '[object Set]':
        return value.size === 0
      case '[object Object]':
        for (const prop in value) {
          // TODO: use `hasOwn` instead `hasOwnProperty.call` when its available
          // https://github.com/tc39/proposal-accessible-object-hasownproperty#motivation
          if (hasOwnProperty.call(value, prop)) {
            return false
          }
        }

        if (strict) {
          // if the object only contains Symbol(s)
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symbols_and_for...in_iteration
          if (Object.getOwnPropertySymbols(value).length) {
            return false
          }
        }

        return true
    }
  }

  // for others? (function etc.)
  return !value
}

/**
 * Checks if the given value is not empty.
 * @param {*} value The thing to be checked.
 * @param {Boolean} strict Strict mode.
 * @returns {Boolean} A boolean value which indicates if the given value is not empty.
 * @public
 */
export function isNotEmpty (value, strict = false) {
  return !isEmpty(value, strict)
}

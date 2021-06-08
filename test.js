import test from 'ava'

import { isEmpty, isNotEmpty } from './src/index.js'

// test cases

test('isEmpty `null` check', t => {
  t.is(isEmpty(null), true)
})

test('isNotEmpty `null` check', t => {
  t.is(isNotEmpty(null), false)
})

test('isEmpty `undefined` check', t => {
  t.is(isEmpty(undefined), true)

  let _undefined
  t.is(isEmpty(_undefined), true)
})

test('isNotEmpty `undefined` check', t => {
  t.is(isNotEmpty(undefined), false)

  let _undefined
  t.is(isNotEmpty(_undefined), false)
})

test('isEmpty `array` check', t => {
  t.is(isEmpty([]), true)

  t.is(isEmpty([1]), false)
  t.is(isEmpty(['']), false)
  t.is(isEmpty(['_']), false)
  t.is(isEmpty([{}]), false)
  t.is(isEmpty([{ mardin: 47 }]), false)
  t.is(isEmpty([Symbol('huop')]), false)
  t.is(isEmpty([5n]), false)
  t.is(isEmpty([null]), false)
  t.is(isEmpty([undefined]), false)
  t.is(isEmpty([true]), false)
})

test('isNotEmpty `array` check', t => {
  t.is(isNotEmpty([]), false)

  t.is(isNotEmpty([1]), true)
  t.is(isNotEmpty(['']), true)
  t.is(isNotEmpty(['_']), true)
  t.is(isNotEmpty([{}]), true)
  t.is(isNotEmpty([{ mardin: 47 }]), true)
  t.is(isNotEmpty([Symbol('huop')]), true)
  t.is(isNotEmpty([5n]), true)
  t.is(isNotEmpty([null]), true)
  t.is(isNotEmpty([undefined]), true)
  t.is(isNotEmpty([true]), true)
})

test('isEmpty `number` check', t => {
  t.is(isEmpty(0), false)
  t.is(isEmpty(0.0), false)
  t.is(isEmpty(1), false)
  t.is(isEmpty(0.1), false)
  t.is(isEmpty(0.001), false)
  t.is(isEmpty(3.5), false)
})

test('isNotEmpty `number` check', t => {
  t.is(isNotEmpty(0), true)
  t.is(isNotEmpty(0.0), true)
  t.is(isNotEmpty(1), true)
  t.is(isNotEmpty(0.1), true)
  t.is(isNotEmpty(0.001), true)
  t.is(isNotEmpty(3.5), true)
})

test('isEmpty `number` strict mode check', t => {
  t.is(isEmpty(0, true), true)
  t.is(isEmpty(0.0, true), true)

  t.is(isEmpty(1, true), false)
  t.is(isEmpty(0.1, true), false)
  t.is(isEmpty(0.001, true), false)
  t.is(isEmpty(3.5, true), false)
})

test('isNotEmpty `number` strict mode check', t => {
  t.is(isNotEmpty(0, true), false)
  t.is(isNotEmpty(0.0, true), false)

  t.is(isNotEmpty(1, true), true)
  t.is(isNotEmpty(0.1, true), true)
  t.is(isNotEmpty(0.001, true), true)
  t.is(isNotEmpty(3.5, true), true)
})

test('isEmpty `bigint` check', t => {
  t.is(isEmpty(BigInt(0)), false)
  t.is(isEmpty(0n), false)
  t.is(isEmpty(BigInt(1)), false)
  t.is(isEmpty(5n), false)
  t.is(isEmpty(1n), false)
  t.is(isEmpty(900719925124740999n), false)
})

test('isNotEmpty `bigint` check', t => {
  t.is(isNotEmpty(BigInt(0)), true)
  t.is(isNotEmpty(0n), true)
  t.is(isNotEmpty(BigInt(1)), true)
  t.is(isNotEmpty(5n), true)
  t.is(isNotEmpty(1n), true)
  t.is(isNotEmpty(900719925124740999n), true)
})

test('isEmpty `bigint` strict mode check', t => {
  t.is(isEmpty(BigInt(0), true), true)
  t.is(isEmpty(0n, true), true)

  t.is(isEmpty(BigInt(1), true), false)
  t.is(isEmpty(5n, true), false)
  t.is(isEmpty(1n, true), false)
  t.is(isEmpty(900719925124740999n, true), false)
})

test('isNotEmpty `bigint` strict mode check', t => {
  t.is(isNotEmpty(BigInt(0), true), false)
  t.is(isNotEmpty(0n, true), false)

  t.is(isNotEmpty(BigInt(1), true), true)
  t.is(isNotEmpty(5n, true), true)
  t.is(isNotEmpty(1n, true), true)
  t.is(isNotEmpty(900719925124740999n, true), true)
})

test('isEmpty `boolean` check', t => {
  t.is(isEmpty(Boolean(0)), false)
  t.is(isEmpty(Boolean(1)), false)
  t.is(isEmpty(true), false)
  t.is(isEmpty(false), false)
})

test('isNotEmpty `boolean` check', t => {
  t.is(isNotEmpty(Boolean(0)), true)
  t.is(isNotEmpty(Boolean(1)), true)
  t.is(isNotEmpty(true), true)
  t.is(isNotEmpty(false), true)
})

test('isEmpty `string` check', t => {
  t.is(isEmpty(''), true)

  t.is(isEmpty(' '), false)
  t.is(isEmpty(String.fromCharCode(160)), false)
  t.is(isEmpty('qwerty'), false)
  t.is(isEmpty('0'), false)
  t.is(isEmpty('true'), false)
  t.is(isEmpty('false'), false)
  t.is(isEmpty('{}'), false)
  t.is(isEmpty('[]'), false)
  t.is(isEmpty('\uD83D\uDE00'), false)
  t.is(isEmpty('\u2700'), false)
  t.is(isEmpty('😸'), false)
})

test('isNotEmpty `string` check', t => {
  t.is(isNotEmpty(''), false)

  t.is(isNotEmpty(' '), true)
  t.is(isNotEmpty(String.fromCharCode(160)), true)
  t.is(isNotEmpty('qwerty'), true)
  t.is(isNotEmpty('0'), true)
  t.is(isNotEmpty('true'), true)
  t.is(isNotEmpty('false'), true)
  t.is(isNotEmpty('{}'), true)
  t.is(isNotEmpty('[]'), true)
  t.is(isNotEmpty('\uD83D\uDE00'), true)
  t.is(isNotEmpty('\u2700'), true)
  t.is(isNotEmpty('😸'), true)
})

test('isEmpty `string` strict mode check', t => {
  t.is(isEmpty('', true), true)
  t.is(isEmpty(' ', true), true)
  t.is(isEmpty(String.fromCharCode(160), true), true)

  t.is(isEmpty('qwerty', true), false)
  t.is(isEmpty('0', true), false)
  t.is(isEmpty('true', true), false)
  t.is(isEmpty('false', true), false)
  t.is(isEmpty('{}', true), false)
  t.is(isEmpty('[]', true), false)
  t.is(isEmpty('\uD83D\uDE00', true), false)
  t.is(isEmpty('\u2700', true), false)
  t.is(isEmpty('😸', true), false)
})

test('isNotEmpty `string` strict mode check', t => {
  t.is(isNotEmpty('', true), false)
  t.is(isNotEmpty(' ', true), false)
  t.is(isNotEmpty(String.fromCharCode(160), true), false)

  t.is(isNotEmpty('qwerty', true), true)
  t.is(isNotEmpty('0', true), true)
  t.is(isNotEmpty('true', true), true)
  t.is(isNotEmpty('false', true), true)
  t.is(isNotEmpty('{}', true), true)
  t.is(isNotEmpty('[]', true), true)
  t.is(isNotEmpty('\uD83D\uDE00', true), true)
  t.is(isNotEmpty('\u2700', true), true)
  t.is(isNotEmpty('😸', true), true)
})

test('isEmpty `object` check', t => {
  const _obj1 = {}
  t.is(isEmpty(_obj1), true)

  const _obj2 = {
    [Symbol('nusaybin')]: true
  }
  t.is(isEmpty(_obj2), true)

  const _obj3 = Object.create({})
  t.is(isEmpty(_obj3), true)

  const _obj4 = Object.create(null)
  t.is(isEmpty(_obj4), true)

  const _obj5 = {
    home: '127.0.01'
  }
  t.is(isEmpty(_obj5), false)

  const _obj6 = {
    0: 'katana'
  }
  t.is(isEmpty(_obj6), false)
})

test('isNotEmpty `object` check', t => {
  const _obj1 = {}
  t.is(isNotEmpty(_obj1), false)

  const _obj2 = {
    [Symbol('nusaybin')]: true
  }
  t.is(isNotEmpty(_obj2), false)

  const _obj3 = Object.create({})
  t.is(isNotEmpty(_obj3), false)

  const _obj4 = Object.create(null)
  t.is(isNotEmpty(_obj4), false)

  const _obj5 = {
    home: '127.0.01'
  }
  t.is(isNotEmpty(_obj5), true)

  const _obj6 = {
    0: 'katana'
  }
  t.is(isNotEmpty(_obj6), true)
})

test('isEmpty `object` strict mode check', t => {
  const _obj1 = {}
  t.is(isEmpty(_obj1, true), true)

  const _obj2 = Object.create({})
  t.is(isEmpty(_obj2, true), true)

  const _obj3 = Object.create(null)
  t.is(isEmpty(_obj3, true), true)

  const _obj4 = {
    [Symbol('nusaybin')]: true
  }
  t.is(isEmpty(_obj4, true), false)

  const _obj5 = {
    home: '127.0.01'
  }
  t.is(isEmpty(_obj5, true), false)

  const _obj6 = {
    0: 'katana'
  }
  t.is(isEmpty(_obj6, true), false)
})

test('isNotEmpty `object` strict mode check', t => {
  const _obj1 = {}
  t.is(isNotEmpty(_obj1, true), false)

  const _obj2 = Object.create({})
  t.is(isNotEmpty(_obj2, true), false)

  const _obj3 = Object.create(null)
  t.is(isNotEmpty(_obj3, true), false)

  const _obj4 = {
    [Symbol('nusaybin')]: true
  }
  t.is(isNotEmpty(_obj4, true), true)

  const _obj5 = {
    home: '127.0.01'
  }
  t.is(isNotEmpty(_obj5, true), true)

  const _obj6 = {
    0: 'katana'
  }
  t.is(isNotEmpty(_obj6, true), true)
})

test('isEmpty `map` check', t => {
  const _map1 = new Map()
  t.is(isEmpty(_map1), true)

  const _map2 = new Map()
  _map2.set('guney', 'aral')
  t.is(isEmpty(_map2), false)

  const _map3 = new Map()
  _map3.set(Symbol('zeynep'), 'abbas')
  t.is(isEmpty(_map3), false)
})

test('isNotEmpty `map` check', t => {
  const _map1 = new Map()
  t.is(isNotEmpty(_map1), false)

  const _map2 = new Map()
  _map2.set('guney', 'aral')
  t.is(isNotEmpty(_map2), true)

  const _map3 = new Map()
  _map3.set(Symbol('zeynep'), 'abbas')
  t.is(isNotEmpty(_map3), true)
})

test('isEmpty `set` check', t => {
  const _set1 = new Set()
  t.is(isEmpty(_set1), true)

  const _set2 = new Set()
  _set2.add('mezopotamya')
  t.is(isEmpty(_set2), false)

  const _set3 = new Set()
  _set3.add(Symbol('firat'))
  t.is(isEmpty(_set3), false)
})

test('isNotEmpty `set` check', t => {
  const _set1 = new Set()
  t.is(isNotEmpty(_set1), false)

  const _set2 = new Set()
  _set2.add('mezopotamya')
  t.is(isNotEmpty(_set2), true)

  const _set3 = new Set()
  _set3.add(Symbol('firat'))
  t.is(isNotEmpty(_set3), true)
})

test('isEmpty `weakmap` check', t => {
  const _weakmap1 = new WeakMap()
  t.is(isEmpty(_weakmap1), false)

  const _weakmap2 = new WeakMap()
  _weakmap2.set({}, 21)
  t.is(isEmpty(_weakmap2), false)

  const _weakmap3 = new WeakMap()
  _weakmap3.set(function () {}, 'azerty')
  t.is(isEmpty(_weakmap3), false)
})

test('isNotEmpty `weakmap` check', t => {
  const _weakmap1 = new WeakMap()
  t.is(isNotEmpty(_weakmap1), true)

  const _weakmap2 = new WeakMap()
  _weakmap2.set({}, 21)
  t.is(isNotEmpty(_weakmap2), true)

  const _weakmap3 = new WeakMap()
  _weakmap3.set(function () {}, 'azerty')
  t.is(isNotEmpty(_weakmap3), true)
})

test('isEmpty `weakset` check', t => {
  const _weakset1 = new WeakSet()
  t.is(isEmpty(_weakset1), false)

  const _weakset2 = new WeakSet()
  _weakset2.add({})
  t.is(isEmpty(_weakset2), false)

  const _weakset3 = new WeakSet()
  _weakset3.add(function () {})
  t.is(isEmpty(_weakset3), false)
})

test('isNotEmpty `weakset` check', t => {
  const _weakset1 = new WeakSet()
  t.is(isNotEmpty(_weakset1), true)

  const _weakset2 = new WeakSet()
  _weakset2.add({})
  t.is(isNotEmpty(_weakset2), true)

  const _weakset3 = new WeakSet()
  _weakset3.add(function () {})
  t.is(isNotEmpty(_weakset3), true)
})

test('isEmpty `function` check', t => {
  const _func1 = () => {}
  t.is(isEmpty(_func1), false)

  const _func2 = () => { return 'hit me one more time' }
  t.is(isEmpty(_func2), false)

  const _func3 = () => { return 0 }
  t.is(isEmpty(_func3), false)
})

test('isNotEmpty `function` check', t => {
  const _func1 = () => {}
  t.is(isNotEmpty(_func1), true)

  const _func2 = () => { return 'hit me one more time' }
  t.is(isNotEmpty(_func2), true)

  const _func3 = () => { return 0 }
  t.is(isNotEmpty(_func3), true)
})

test('isEmpty `nan` check', t => {
  t.is(isEmpty(Number.NaN), false)
})

test('isNotEmpty `nan` check', t => {
  t.is(isNotEmpty(Number.NaN), true)
})

test('isEmpty `infinity` check', t => {
  t.is(isEmpty(Infinity), false)
})

test('isNotEmpty `infinity` check', t => {
  t.is(isNotEmpty(Infinity), true)
})

test('isEmpty `symbol` check', t => {
  t.is(isEmpty(Symbol('renault')), false)
})

test('isNotEmpty `symbol` check', t => {
  t.is(isNotEmpty(Symbol('renault')), true)
})

test('isEmpty `date` check', t => {
  t.is(isEmpty(new Date()), false)
})

test('isNotEmpty `date` check', t => {
  t.is(isNotEmpty(new Date()), true)
})

test('isEmpty `regexp` check', t => {
  t.is(isEmpty(new RegExp()), true)
  t.is(isEmpty(/alphab+et/i), false)
})

test('isNotEmpty `regexp` check', t => {
  t.is(isNotEmpty(new RegExp()), false)
  t.is(isNotEmpty(/alphab+et/i), true)
})

test('isEmpty `int8array` check', t => {
  t.is(isEmpty(new Int8Array()), true)
  t.is(isEmpty(new Int8Array(0)), true)
  t.is(isEmpty(new Int8Array(2)), false)
  t.is(isEmpty(new Int8Array([7, 81])), false)
})

test('isNotEmpty `int8array` check', t => {
  t.is(isNotEmpty(new Int8Array()), false)
  t.is(isNotEmpty(new Int8Array(0)), false)
  t.is(isNotEmpty(new Int8Array(2)), true)
  t.is(isNotEmpty(new Int8Array([7, 81])), true)
})

test('isEmpty `uint8array` check', t => {
  t.is(isEmpty(new Uint8Array()), true)
  t.is(isEmpty(new Uint8Array(0)), true)
  t.is(isEmpty(new Uint8Array(2)), false)
  t.is(isEmpty(new Uint8Array([7, 70])), false)
})

test('isNotEmpty `uint8array` check', t => {
  t.is(isNotEmpty(new Uint8Array()), false)
  t.is(isNotEmpty(new Uint8Array(0)), false)
  t.is(isNotEmpty(new Uint8Array(2)), true)
  t.is(isNotEmpty(new Uint8Array([7, 70])), true)
})

test('isEmpty `uint8clampedarray` check', t => {
  t.is(isEmpty(new Uint8ClampedArray()), true)
  t.is(isEmpty(new Uint8ClampedArray(0)), true)
  t.is(isEmpty(new Uint8ClampedArray(2)), false)
  t.is(isEmpty(new Uint8ClampedArray([new Uint8ClampedArray(1), 70])), false)
})

test('isNotEmpty `uint8clampedarray` check', t => {
  t.is(isNotEmpty(new Uint8ClampedArray()), false)
  t.is(isNotEmpty(new Uint8ClampedArray(0)), false)
  t.is(isNotEmpty(new Uint8ClampedArray(2)), true)
  t.is(isNotEmpty(new Uint8ClampedArray([new Uint8ClampedArray(1), 70])), true)
})

test('isEmpty `int16array` check', t => {
  t.is(isEmpty(new Int16Array()), true)
  t.is(isEmpty(new Int16Array(0)), true)
  t.is(isEmpty(new Int16Array(2)), false)
  t.is(isEmpty(new Int16Array([0, 5])), false)
})

test('isNotEmpty `int16array` check', t => {
  t.is(isNotEmpty(new Int16Array()), false)
  t.is(isNotEmpty(new Int16Array(0)), false)
  t.is(isNotEmpty(new Int16Array(2)), true)
  t.is(isNotEmpty(new Int16Array([0, 5])), true)
})

test('isEmpty `uint16array` check', t => {
  t.is(isEmpty(new Uint16Array()), true)
  t.is(isEmpty(new Uint16Array(0)), true)
  t.is(isEmpty(new Uint16Array(2)), false)
  t.is(isEmpty(new Uint16Array([9, 8])), false)
})

test('isNotEmpty `uint16array` check', t => {
  t.is(isNotEmpty(new Uint16Array()), false)
  t.is(isNotEmpty(new Uint16Array(0)), false)
  t.is(isNotEmpty(new Uint16Array(2)), true)
  t.is(isNotEmpty(new Uint16Array([9, 8])), true)
})

test('isEmpty `int32array` check', t => {
  t.is(isEmpty(new Int32Array()), true)
  t.is(isEmpty(new Int32Array(0)), true)
  t.is(isEmpty(new Int32Array(2)), false)
  t.is(isEmpty(new Int32Array([1, 5])), false)
})

test('isNotEmpty `int32array` check', t => {
  t.is(isNotEmpty(new Int32Array()), false)
  t.is(isNotEmpty(new Int32Array(0)), false)
  t.is(isNotEmpty(new Int32Array(2)), true)
  t.is(isNotEmpty(new Int32Array([1, 5])), true)
})

test('isEmpty `uint32array` check', t => {
  t.is(isEmpty(new Uint32Array()), true)
  t.is(isEmpty(new Uint32Array(0)), true)
  t.is(isEmpty(new Uint32Array(2)), false)
  t.is(isEmpty(new Uint32Array([3, 66])), false)
})

test('isNotEmpty `uint32array` check', t => {
  t.is(isNotEmpty(new Uint32Array()), false)
  t.is(isNotEmpty(new Uint32Array(0)), false)
  t.is(isNotEmpty(new Uint32Array(2)), true)
  t.is(isNotEmpty(new Uint32Array([3, 66])), true)
})

test('isEmpty `float32array` check', t => {
  t.is(isEmpty(new Float32Array()), true)
  t.is(isEmpty(new Float32Array(0)), true)
  t.is(isEmpty(new Float32Array(2)), false)
  t.is(isEmpty(new Float32Array([21, 31])), false)
})

test('isNotEmpty `float32array` check', t => {
  t.is(isNotEmpty(new Float32Array()), false)
  t.is(isNotEmpty(new Float32Array(0)), false)
  t.is(isNotEmpty(new Float32Array(2)), true)
  t.is(isNotEmpty(new Float32Array([21, 31])), true)
})

test('isEmpty `float64array` check', t => {
  t.is(isEmpty(new Float64Array()), true)
  t.is(isEmpty(new Float64Array(0)), true)
  t.is(isEmpty(new Float64Array(2)), false)
  t.is(isEmpty(new Float64Array([53, 73])), false)
})

test('isNotEmpty `float64array` check', t => {
  t.is(isNotEmpty(new Float64Array()), false)
  t.is(isNotEmpty(new Float64Array(0)), false)
  t.is(isNotEmpty(new Float64Array(2)), true)
  t.is(isNotEmpty(new Float64Array([53, 73])), true)
})

test('isEmpty `bigint64array` check', t => {
  t.is(isEmpty(new BigInt64Array()), true)
  t.is(isEmpty(new BigInt64Array(0)), true)
  t.is(isEmpty(new BigInt64Array(2)), false)
  t.is(isEmpty(new BigInt64Array([1n, 7n])), false)
})

test('isNotEmpty `bigint64array` check', t => {
  t.is(isNotEmpty(new BigInt64Array()), false)
  t.is(isNotEmpty(new BigInt64Array(0)), false)
  t.is(isNotEmpty(new BigInt64Array(2)), true)
  t.is(isNotEmpty(new BigInt64Array([1n, 7n])), true)
})

test('isEmpty `biguint64array` check', t => {
  t.is(isEmpty(new BigUint64Array()), true)
  t.is(isEmpty(new BigUint64Array(0)), true)
  t.is(isEmpty(new BigUint64Array(2)), false)
  t.is(isEmpty(new BigUint64Array([4n, 7n])), false)
})

test('isNotEmpty `biguint64array` check', t => {
  t.is(isNotEmpty(new BigUint64Array()), false)
  t.is(isNotEmpty(new BigUint64Array(0)), false)
  t.is(isNotEmpty(new BigUint64Array(2)), true)
  t.is(isNotEmpty(new BigUint64Array([4n, 7n])), true)
})

test('isEmpty `arraybuffer` check', t => {
  t.is(isEmpty(new ArrayBuffer()), true)
  t.is(isEmpty(new ArrayBuffer(0)), true)
  t.is(isEmpty(new ArrayBuffer(2)), false)
})

test('isNotEmpty `arraybuffer` check', t => {
  t.is(isNotEmpty(new ArrayBuffer()), false)
  t.is(isNotEmpty(new ArrayBuffer(0)), false)
  t.is(isNotEmpty(new ArrayBuffer(2)), true)
})

test('isEmpty `sharedarraybuffer` check', t => {
  t.is(isEmpty(new SharedArrayBuffer()), true)
  t.is(isEmpty(new SharedArrayBuffer(0)), true)
  t.is(isEmpty(new SharedArrayBuffer(1024)), false)
})

test('isNotEmpty `sharedarraybuffer` check', t => {
  t.is(isNotEmpty(new SharedArrayBuffer()), false)
  t.is(isNotEmpty(new SharedArrayBuffer(0)), false)
  t.is(isNotEmpty(new SharedArrayBuffer(1024)), true)
})

test('isEmpty `dataview` check', t => {
  t.is(isEmpty(new DataView(new ArrayBuffer())), true)
  t.is(isEmpty(new DataView(new ArrayBuffer(0))), true)
  t.is(isEmpty(new DataView(new ArrayBuffer(2))), false)
})

test('isNotEmpty `dataview` check', t => {
  t.is(isNotEmpty(new DataView(new ArrayBuffer())), false)
  t.is(isNotEmpty(new DataView(new ArrayBuffer(0))), false)
  t.is(isNotEmpty(new DataView(new ArrayBuffer(2))), true)
})

# empty-utils
> Two utils to check the given value is empty or not.

[![Downloads](https://img.shields.io/npm/dm/empty-utils.svg)](https://npmjs.com/empty-utils)
[![install size](https://packagephobia.com/badge?p=empty-utils)](https://packagephobia.com/result?p=empty-utils)

## Install
```
$ npm install empty-utils
```

## Usage

```js
import { isEmpty, isNotEmpty } from 'empty-utils'

// will return "true"
isEmpty(null)
isEmpty(undefined)
isEmpty('')
isEmpty([])
isEmpty({})
isEmpty(Object.create(null))
isEmpty({ [Symbol('foo')]: 'bar' })
isEmpty(new Map())
isEmpty(new Set())
isEmpty(new RegExp())

// will return "false"
isEmpty(0)
isEmpty(5)
isEmpty(0.0)
isEmpty(0.1)
isEmpty(BigInt(0))
isEmpty(3n)
isEmpty(true)
isEmpty(false)
isEmpty(' ')
isEmpty('😸')
isEmpty([1])
isEmpty([{}])
isEmpty(['hello'])
isEmpty(new WeakMap())
isEmpty(new WeakSet())
isEmpty(function () {})
isEmpty(Number.NaN)
isEmpty(Infinity)
isEmpty(Symbol('bar'))
isEmpty(new Date())
isEmpty(/kurdish/)
```

## Strict mode?

Once the strict mode is enabled 0 (zero) as `Number` or `BigInt` and `String`s filled with spaces will be evaluated as empty. However the objects only contains `Symbol`(s) will be evaluated as not empty.

```js
// strict mode
isEmpty(0, true)    // true
isEmpty(0n, true)   // true
isEmpty(' ', true)  // true

isEmpty({ [Symbol('foo')]: 'bar' }, true)  // false
```

## Available utils

| Name           | Description                                                                    |
| ---            | ---                                                                            |
| `isEmpty`      | A function who checks if the given value is empty.                             |
| `isNotEmpty`   | A function who checks if the given value is not empty.                         |


## Options

| Name           | Type          | Default        | Description                                   |
| ---            | ---           | ---            | ---                                           |
| value          | `any`         | -              | The thing to be checked.                      |
| strict         | `boolean`     | `false`        | Strict mode                                   |

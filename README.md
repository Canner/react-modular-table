# react-modular-table [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> table in modular, build your table in components!

## Installation

```sh
$ npm install --save react-modular-table
```

## Usage

```js
import {DivRow, DivTable, DivCell} from 'react-modular-table';

ReactDOM.render(
  <DivTable>
  	<DivRow>
  		<DivCell>
  			row1, column1
  		</DivCell>
  		<DivCell>
  			row1, column2
  		</DivCell>
  	</DivRow>
  	<DivRow>
  		<DivCell>
  			row2, column1
  		</DivCell>
  		<DivCell>
  			row2, column2
  		</DivCell>
  	</DivRow>
  	<DivRow>
  		<DivCell>
  			row3, column1
  		</DivCell>
  		<DivCell>
  			row3, column2
  		</DivCell>
  	</DivRow>
  </DivTable>
, document.getElementById('root'));


```

## Components for **\<Div/\>** Table

### \<DivTable/\>

Using `<div/>` to build your table, it's children **should only be** `<DivRow/>`

| **props** | **type** | **required** | **default** | **description**  |
|-----------|----------|--------------|-------------|------------------|
| style     | object   | false        | {}          | customize styles |
| width     | number   | true         | 350         | table width      |
| height    | number   | true         | 350         | table height     |

other props (other than the props above) send to `<DivTable/>` will pass to the `<div/>` directly.

In other words, `<DivTable/>` is just like `<table/>`.

### \<DivRow/\>

Using `<div/>` to build your table row, it's children **should only be** `<DivCell/>`

| **props** | **type** | **required** | **default** | **description**  |
|-----------|----------|--------------|-------------|------------------|
| style     | object   | false        | {}          | customize styles |
| outterStyle  | object   | false         | {}         | customize outerStyles      |

other props (other than the props above) send to `<DivRow/>` will pass to the `<div/>` directly.

In other words, `<DivRow/>` is just like `<tr/>`.

### \<DivCell/\>

the smallest component for the div table. Use to define the cells.

| **props** | **type** | **required** | **default** | **description**  |
|-----------|----------|--------------|-------------|------------------|
| style     | object   | false        | {}          | customize styles |
| outterStyle  | object   | false         | {}         | customize outerStyles      |

other props (other than the props above) send to `<DivCell/>` will pass to the `<div/>` directly.

In other words, `<DivCell/>` is just like `<td/>`.

## Start example server

```
node devServer.js
```

## License

MIT © [Canner](https://github.com/canner)


[npm-image]: https://badge.fury.io/js/react-modular-table.svg
[npm-url]: https://npmjs.org/package/react-modular-table
[travis-image]: https://travis-ci.org/Canner/react-modular-table.svg?branch=master
[travis-url]: https://travis-ci.org/Canner/react-modular-table
[daviddm-image]: https://david-dm.org/Canner/react-modular-table.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Canner/react-modular-table

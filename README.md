# react-modular-table [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> table in modular

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

## Components for **<Div/>** Table

### <DivTable/>

Using `<div/>` to build your table, it's children should be only `<DivRow/>`

### <DivRow/>

Using `<div/>` to build your table row, it's children should be only `<DivCell/>`

### <DivCell/>

the smallest component for the div table. Use to define the cells.

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

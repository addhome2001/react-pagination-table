# react-pagination-table

[![Build Status](https://travis-ci.org/addhome2001/react-pagination-table.svg?branch=master)](https://travis-ci.org/addhome2001/react-pagination-table)

[![Known Vulnerabilities](https://snyk.io/test/github/addhome2001/react-pagination-table/badge.svg)](https://snyk.io/test/github/addhome2001/react-pagination-table)

> Table components for React with pagination

## Install
```
 npm install react-pagination-table
```

## Test
```
npm test
```

## Usage

>The module contain `two` component, I will show you below.

### [Demo](https://addhome2001.github.io/react-pagination-table/)

If you get a data like this.

````javascript

const data = [
    { size: ["L", "M"], phone: 1234567, gender: "Male", age: 20, name:"Ben" },
    { size: ["L", "M", "XL"], phone: 1234567, gender: "Female", age: 22, name:"Ken" },
    { size: ["L", "S"], phone: 1234567, gender: "Female", age: 23, name:"Jay" },
    { size: ["M", "S"], phone: 1234567, gender: "Male", age: 26, name:"Chip" },
    { size: ["XL", "XS"], phone: 1234567, gender: "Male", age: 23, name:"Lee" },
    { size: ["L", "M", "S", "XS"], phone: 1234567, gender: "Female", age: 30, name:"Frank" },
    { size: ["S", "L"], phone: 1234567, gender: "Male", age: 23, name:"CoCo" },
    { size: ["L", "M", "S"], phone: 1234567, gender: "Female", age: 20, name:"Fake" },
    { size: ["XS", "L"], phone: 1234567, gender: "Male", age: 26, name:"Dump" },
    { size: ["L", "M", "S"], phone: 1234567, gender: "Female", age: 27, name:"Ocean" },
    { size: ["S", "XL"], phone: 1234567, gender: "Male", age: 20, name:"Polo" },
    { size: ["M", "XL"], phone: 1234567, gender: "Female", age: 21, name:"Queen" },
    { size: ["L", "M"], phone: 1234567, gender: "Female", age: 20, name:"Bump" },
    { size: ["L", "M", "S", "XL"], phone: 1234567, gender: "Male", age: 22, name:"Judy" },
    { size: ["XL", "M"], phone: 1234567, gender: "Female", age: 24, name:"Ryan" },
    { size: ["L", "S"], phone: 1234567, gender: "Female", age: 25, name:"Flow" },
    { size: ["S", "M"], phone: 1234567, gender: "Female", age: 31, name:"Ray" },
    { size: ["L", "M", "XS"], phone: 1234567, gender: "Male", age: 23, name:"Yen" },
    { size: ["XL", "M", "S"], phone: 1234567, gender: "Male", age: 21, name:"Gray" },
    { size: ["L", "M", "S"], phone: 1234567, gender: "Female", age: 22, name:"Tom" }
];
````

___TableSimple___

>It's just a simple table component.

````javascript
import { render } from 'react-dom';
import React from 'react';
import { TableSimple } from 'react-pagination-table';

//Table header
const Header = ["Name", "Age", "Size", "Phone", "Gender" ];

const App = ({Header, data}) =>
    <div>
        <TableSimple
            title="TableSimple"
            subTitle="Sub Title"
            data={ data }
            headers={ Header }
            //Tell the component what order you wanna render.  
            columns="name.age.size.phone.gender"
            arrayOption={ [["size", 'all', ', ']] }
        />
    </div>

````


___TablePagination___

>Simple table with pagination feature.


````javascript
import { render } from 'react-dom';
import React from 'react';
import { TablePagination } from 'react-pagination-table';

const Header = ["Name", "Age", "Size", "Phone", "Gender" ];

const App = ({Header, data}) =>
    <div>
        <TablePagination
            title="TablePagination"
            subTitle="Sub Title"
            headers={ Header }
            data={ data }
            columns="name.age.size.phone.gender"
            perPageItemCount={ 5 }
            totalCount={ data.length }
            arrayOption={ [["size", 'all', ' ']] }
        />
    </div>

````

## API

### ___TableSimple___

| Props        | Description                        | Type          | Default                  |
|------------------|------------------------------------|---------------|--------------------------|
| title   |  the title at left          | String      | `empty`                      |
| subTitle | the subTitle at right  | String        | `empty`                |
| data            | the items you want to render   | Array        | isRequired                       |
| columns  | the order of columns         | String        | isRequired                       |
| headers         | table's header                     | Array        | isRequired                   |
| arrayOption | `property`: specific which of property is an array.<br> `index`: what index you want to get, can be a ___number___ or ___all___<br>`plus`: add character to every item | Array[]        | `empty`                   |
| className         | the TableSimple className                     | String        | react-pagination-table                  |

### ___TablePagination___

>In addition to the above...

| Props        | Description                        | Type          | Default                  |
|------------------|------------------------------------|---------------|--------------------------|
| totalCount            | items total count or length                 | Number        | isRequired                       |
| perPageItemCount  | items are shown per page           | Number        | isRequired                       |
| nextPageText         | the text of `nextPage` button                     | String        | 下一頁                    |
| prePageText         | the text of `previousPage` button                     | String        | 上一頁                    |
| paginationClassName         | the pagination className                | String        | pagination-status                   |

## Example
```
npm start
```

By default, the web server will run on the `8000` port after run the command above. Then you can access `localhost:8000` to see the demo.

## Style
By default,`TableSimple` and `TablePagination` all have ___react-pagination-table___ className. In addition to the `TablePagination` component have ___pagination-status___ className for pagination. You can pass
custom className as a string using the `className` prop.

>In addition, the activated page(`<li>`) button will be added `.active`  class and it's up to you to modify the default css.

### Other useful component
[react-pagination-status](https://www.npmjs.com/package/react-pagination-status)

LICENSE
=======

MIT

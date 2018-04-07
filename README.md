# react-pagination-table

[![Build Status](https://travis-ci.org/addhome2001/react-pagination-table.svg?branch=master)](https://travis-ci.org/addhome2001/react-pagination-table)

[![Known Vulnerabilities](https://snyk.io/test/github/addhome2001/react-pagination-table/badge.svg)](https://snyk.io/test/github/addhome2001/react-pagination-table)

> Table components for React with pagination

## Install
```
 npm install --save react-pagination-table
```

## Migration
After the version `2.x`, the behavior of the `className` and `paginationClassName` props will be a little different. For a better way to architect your CSS, the className of the specific components will be more maintainable.

> The [example](https://github.com/addhome2001/react-pagination-table/blob/master/example) or the [className](https://github.com/addhome2001/react-pagination-table#classname) section will be helpful to you.


## Usage

>The module contains `two` components, includes ___TableSimple___、___TablePagination___

### [Demo](https://addhome2001.github.io/react-pagination-table/)

There is a data set.

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

>Simple table component.

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

>Simple table with pagination.

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

## className
The `react-pagination-table`(**className**) and `pagination-status`(**paginationClassName**) is the default className and **prefix**. You can pass custom name by the `className` and `paginationClassName` props.

> In addition, setting the specific components to the differences styles and status by these **class**
>- {**className**} the wrapper of the Component
>- {**className**}__title
>- {**className**}__sub-title
>- {**className**}__header
>- {**className**}__table(the `<table />` tag)
>- {**paginationClassName**} the wrapper of the Pagination
>- {**paginationClassName**}__item(the `<li />` tags)
>- {**paginationClassName**}__btn(the page button)
>- {**paginationClassName**}__btn--active(the activated page button)
>- {**paginationClassName**}__btn--disable

## API

### ___TableSimple___

| Props        | Description                        | Type          | Default                  |
|------------------|------------------------------------|---------------|--------------------------|
| title   |  the title at left          | String      | `empty`                      |
| subTitle | the subTitle at right  | String        | `empty`                |
| data            | the items you want to render   | Array        | isRequired                       |
| columns  | the order of columns         | String        | isRequired                       |
| headers         | table's header                     | Array        | isRequired                   |
| arrayOption | `property`: specific which property is array.<br> `index`: the index of the array, can be a ___number___ or ___all___<br>`plus`: add character between items | Array[]        | `empty`                   |
| className         | the TableSimple className                     | String        | react-pagination-table                  |

### ___TablePagination___

>In addition to the above...

| Props        | Description                        | Type          | Default                  |
|------------------|------------------------------------|---------------|--------------------------|
| totalCount            | the length of the items                 | Number        | isRequired                       |
| perPageItemCount  | the numbers of the items on per page           | Number        | isRequired                       |
| nextPageText         | the text of `nextPage` button                     | String        | 下一頁                    |
| prePageText         | the text of `previousPage` button                     | String        | 上一頁                    |
| paginationClassName         | the pagination className                | String        | pagination-status |
| partialPageCount         | the numbers of the page buttons                     | Number        | 5                  |

## Example
```
npm start
```

By default, the example is on the `8000` port after run the command above. Then you can access `localhost:8000` to see the demo.

## Test
```
npm test
```

### Other useful component
[react-pagination-status](https://www.npmjs.com/package/react-pagination-status)

LICENSE
=======

MIT

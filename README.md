# Dynamic Table

A table which allows dynamic columns and data.

### Live here: https://dynamic-table.netlify.com/

## Technologies used

- [React.JS](https://reactjs.org/) -Frontend library used in the project.
- [Redux](https://redux.js.org/) - Used in addition to React.JS

## Features

- There are 3 modules: column creation module, table entry module and table view module

     **Column Creation Module** *- create columns here*

- This would be a **form** with 2 fields - **(i) column name and (ii) column type**
- The column name is a text entry field and the column type is dropdown with 3 values - **date, number and multiselect**
- If the user selects **multiselect**, there will be another text box that appears, where the user can enter the list of values that appears in the multiselect separated by comma’s - E.g. chennai, delhi, mumbai
- The user can create multiple columns and click on **submit**

     **Table entry module** *- create rows here*

- The columns created above will be displayed in a table interface with the column names above as headers
- There will be 20 default rows to enter the values for the table(**navigation is set between the cells, on pressing of the right arrow move towards the next cell and so on**)
- The **validations** for column will depend on the column type - E.g. date column, we can only pick date, number column only enter number and **multiselect** - can select only from the the list of values mentioned
- The user can fill multiple rows and then click on submit

     **Table View module** *- view the table here*

- The submitted rows above can be viewed in a datatable.
- Any new rows added above will be appended to this table.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

_Node.JS and npm must be installed. Download and install them from [here](https://nodejs.org)._

### Installing

Follow these steps to run this project in your local computer.

```
$ git clone https://github.com/geekysrm/dynamic-table.git
$ cd dynamic-table
```

Now run :

```
$ npm i
```

To run the app on port `3000`, run:

```
$ npm run client
```

## Authors

- **Soumya Ranjan Mohanty** - [geekysrm](https://github.com/geekysrm)

## License

This project is licensed under the MIT License.

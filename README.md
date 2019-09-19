# Snowflake Clone

Snowflake is Medium's tool for planning and supporting engineers' career development. You can read more
about how we use this tool in our [growth framework documentation](https://medium.com/s/engineering-growth-framework).
Their growth tool is hosted [publicly](https://snowflake.medium.com).

Since they open-sourced this tool, I've been tinkering with it for use with my own engineering teams, instead of a spreadsheet.


## Installation

Get yarn if you don’t have it already:

`npm install -g yarn`

Install dependencies:

`yarn`

### Running the dev server

`yarn dev`

### Building

`yarn export`

This will put a static version of the site in `out/`.

## Future work

* Load initial data from a file, to improve flexibility.
* Add restricted job title selection and validation.

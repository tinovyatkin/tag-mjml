# [MJML](https://mjml.io/) Template String [![codecov](https://codecov.io/gh/tinovyatkin/tag-mjml/branch/master/graph/badge.svg)](https://codecov.io/gh/tinovyatkin/tag-mjml) [![NPM Version](https://img.shields.io/npm/v/tag-mjml.svg)](https://www.npmjs.com/package/tag-mjml) [![Dependencies](https://img.shields.io/david/tinovyatkin/tag-mjml.svg)](https://david-dm.org/tinovyatkin/tag-mjml) [![Downloads per month](https://img.shields.io/npm/dm/tag-mjml.svg)](https://npmcharts.com/compare/tag-mjml?minimal=true)

<img src="https://raw.githubusercontent.com/tinovyatkin/tag-mjml/master/.github/logo/icon.png" alt="MJML Tag" align="right">

A simple yet powerful module to allow you to use ES6 tagged template strings for rendering (generating HTML) of [MJML](https://mjml.io/) email templates using dynamic substitutions, etc.
Module takes care of automatic escaping/converting variables for HTML.
So, something as crazy as below works just fine:

```ts
const mjml = require('tag-mjml')({ beautify: true });

const companyName = chalk`
                                I love
                                My 🤘🏻 < {keyword('orange').bold Company}`;
const textSize = 62;

const htmlResult = mjml`
        <mjml>
          <mj-body>
            <!-- Company Header -->
            <mj-section background-color="#f0f0f0">
              <mj-column>
                <mj-text
                  font-family="inherit"
                  font-style="italic"
                  font-size="${textSize}px"
                  color="#626262"
                >
                  ${companyName}
                </mj-text>
              </mj-column>
            </mj-section>
          </mj-body>
        </mjml>
      `;
```

and renders to nice HTML like this:

```html
<!DOCTYPE html>
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <!-- ... -->
  <div
    style="font-family:inherit;font-size:62px;font-style:italic;line-height:1;text-align:left;color:#626262;"
  >
    I love my
    <br />
    My &#x1F918;&#x1F3FB; &lt;
    <span style="color:#ffa500">
      <b>
        Company
      </b>
    </span>
  </div>
  <!-- ... -->
</html>
```

So, now you don't need to repass MJML with Handlebars, etc, to have dynamic data binding.

Written in Typescript with 100% test coverage.

# License: MIT

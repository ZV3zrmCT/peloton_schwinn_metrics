#!/bin/bash

set -e

npx bookmarklet source/echelon.js minified/echelon.js
npx bookmarklet source/schwinn_watt.js minified/schwinn_watt.js
npx bookmarklet source/schwinn.js minified/schwinn.js
node update-readme.js
# Photos API

A very small server that responds to all requests with an array of file
paths to a specific directory.

## Installation

Make sure you have Node.js installed.

Clone the repository

```
git clone https://github.com/travishorn/photos-api.git
```

Change into the repository directory

```
cd photos-api
```

Install dependencies

```
npm install
```

## Usage

Place all of your photos inside `src/images/`. Alternatively, edit
`src/index.js` to look at a different directory.

Start the server

```
npm start
```

Visit http://localhost:3000

The server responds with an array of paths to files in the directory.

## License

The MIT License

Copyright 2019 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
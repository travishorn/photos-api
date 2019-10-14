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

Example:

```
[
  {
    "id": 0,
    "filename": "\\images\\phil-hearing-UlET2ddILBE-unsplash.jpg"
  },
  {
    "id": 1,
    "filename": "\\images\\sammy-joonhee-3f_jRNcta-g-unsplash.jpg"
  },
  {
    "id": 2,
    "filename": "\\images\\sayla-brown-8__gtxl5AEg-unsplash.jpg"
  },
  {
    "id": 3,
    "filename": "\\images\\the-honest-company-fgn7ZRTmaWQ-unsplash.jpg"
  },
  {
    "id": 4,
    "filename": "\\images\\subfolder-1\\arun-clarke-DGvVLfpjjN8-unsplash.jpg"
  },
  {
    "id": 5,
    "filename": "\\images\\subfolder-1\\blake-wisz-GFrBMipOd_E-unsplash.jpg"
  },
  {
    "id": 6,
    "filename": "\\images\\subfolder-1\\houston-ray-9gO6M03XBPI-unsplash.jpg"
  },
  {
    "id": 7,
    "filename": "\\images\\subfolder-2\\jack-stapleton-fw-CMjqH8cQ-unsplash.jpg"
  },
  {
    "id": 8,
    "filename": "\\images\\subfolder-2\\johan-de-jager-6aKFyWHKG00-unsplash.jpg"
  },
  {
    "id": 9,
    "filename": "\\images\\subfolder-2\\joshua-michaels-FOgxRVxjGSs-unsplash.jpg"
  },
  {
    "id": 10,
    "filename": "\\images\\subfolder-2\\subfolder-3\\marie-dehayes-epof3ZhDKMc-unsplash.jpg"
  },
  {
    "id": 11,
    "filename": "\\images\\subfolder-2\\subfolder-3\\paul-volkmer-8_BNTg-s4Hs-unsplash.jpg"
  }
]
```

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
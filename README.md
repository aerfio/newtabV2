<p style='font-size:40px' align="center">
newtab
</p>

# Replacement of about://newtab in React.js

## Local instalation

To run it locally use those commands inside project folder:

```
npm install
```

and then

```
npm start
```

# Features

## Searchbox

Search box uses google.pl, unless you use one of special flags:

- `!y` searches Youtube
- `!t` translates what you wrote from english to polish languege
- `!p` the other way
- `!w` searches Wikipedia

## 4chan redirecting

Type `chan` and then name of the board you want, without `/`, for example:

```
chan wg
```

redirects you to [https://boards.4chan.org/wg/](https://boards.4chan.org/wg/)

## Studies classes plan

Hover over top right corner of screen to enable it.

## Notes

Notes are stored online, you need to write your own backend server to handle this issue as you can not connect directly to Mongo Atlas server from frontend using `mongoose`.

## Weather

Fetch weather from OpenWeatherMap using their API and display it.

# WORDLE word and letter statistics

This code can generate a stats summary markdown of the wordle word bank!

## Getting the words.json

on [NY Time's worlde](https://www.nytimes.com/games/wordle/index.html), go to Developer Tools, and in the source file `main.<deployment-hash>.js`, there is a longgggg list of words. I just copy/pasted into `words.json`

## Generating

```shell
node src/index.js > docs/index.md
```

## Contributing

Feel free to contribute in any way you see fit! This was thrown together quickly, lots of room for improvements:

- configurable for different word sizes (currently Wordle is always 5 characters long)
- HTML page with cool CSS styling and VIZUAL CHARTZ

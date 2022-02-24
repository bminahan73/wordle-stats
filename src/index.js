let words = require('./words.json')
let stats = []
const WORD_LENGTH = 5
const RAW_COUNT = 1
const RAW_PERCENT = 2
const FORMAT_PERCENT = 3
const TOTAL_INDEX = 5
const printStats = (title, stats, letterIndex) => {
    console.log(`\n## ${title}\n`)
    stats.sort((a, b) => (a[RAW_COUNT][letterIndex] < b[RAW_COUNT][letterIndex]) ? 1 : -1).forEach((stat, i) => {
        console.log(`${i + 1}. ${stat[0].toUpperCase()}: ${stat[FORMAT_PERCENT][letterIndex]} (${stat[RAW_COUNT][letterIndex]})`)
    })
}
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
letters.forEach((l, i) => { stats[i] = [l, [0, 0, 0, 0, 0, 0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], ["0%", "0%", "0%", "0%", "0%", "0%"]] })
words.forEach(word => {
    for (let i = 0; i < WORD_LENGTH; i++) {
        stats[letters.indexOf(word[i])][RAW_COUNT][i]++
        stats[letters.indexOf(word[i])][RAW_COUNT][TOTAL_INDEX]++
    }
})
letters.forEach((l, i) => {
    for (let j = 0; j < WORD_LENGTH; j++) {
        stats[i][RAW_PERCENT][j] = stats[i][RAW_COUNT][j] / words.length
        stats[i][FORMAT_PERCENT][j] = Number(stats[i][RAW_PERCENT][j]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
    }
    stats[i][RAW_PERCENT][TOTAL_INDEX] = stats[i][RAW_COUNT][TOTAL_INDEX] / (words.length * WORD_LENGTH)
    stats[i][FORMAT_PERCENT][TOTAL_INDEX] = Number(stats[i][RAW_PERCENT][TOTAL_INDEX]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
})
console.log(`> ${Date()}\n\n## Word TOTAL_INDEX\n${words.length}`)
printStats("TOTAL_INDEX Appearances", stats, TOTAL_INDEX)
printStats("First Letter", stats, 0)
printStats("Second Letter", stats, 1)
printStats("Third Letter", stats, 2)
printStats("Fourth Letter", stats, 3)
printStats("Fifth Letter", stats, 4)

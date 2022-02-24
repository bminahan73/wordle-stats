let words = require('./words.json')
let stats = []
const WORD_LENGTH = 5
const LETTER = 0
const RAW_COUNT = 1
const RAW_PERCENT = 2
const FORMAT_PERCENT = 3
const FIRST_LETTER = 0
const SECOND_LETTER = 1
const THIRD_LETTER = 2
const FOURTH_LETTER = 3
const FIFTH_LETTER = 4
const TOTAL = 5
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
letters.forEach((l, i) => { stats[i] = [l, [0, 0, 0, 0, 0, 0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], ["0%", "0%", "0%", "0%", "0%", "0%"]] })
words.forEach(word => {
    for (let i = 0; i < WORD_LENGTH; i++) {
        stats[letters.indexOf(word[i])][RAW_COUNT][i]++
        stats[letters.indexOf(word[i])][RAW_COUNT][TOTAL]++
    }
})
letters.forEach((l, i) => {
    for (let j = 0; j < WORD_LENGTH; j++) {
        stats[i][RAW_PERCENT][j] = stats[i][RAW_COUNT][j] / words.length
        stats[i][FORMAT_PERCENT][j] = Number(stats[i][RAW_PERCENT][j]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
    }
    stats[i][RAW_PERCENT][TOTAL] = stats[i][RAW_COUNT][TOTAL] / (words.length * WORD_LENGTH)
    stats[i][FORMAT_PERCENT][TOTAL] = Number(stats[i][RAW_PERCENT][TOTAL]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
})
const FIRST_SORTED = stats.sort((a, b) => (a[RAW_COUNT][FIRST_LETTER] < b[RAW_COUNT][FIRST_LETTER]) ? 1 : -1)
const SECOND_SORTED = stats.sort((a, b) => (a[RAW_COUNT][SECOND_LETTER] < b[RAW_COUNT][SECOND_LETTER]) ? 1 : -1)
const THIRD_SORTED = stats.sort((a, b) => (a[RAW_COUNT][THIRD_LETTER] < b[RAW_COUNT][THIRD_LETTER]) ? 1 : -1)
const FOURTH_SORTED = stats.sort((a, b) => (a[RAW_COUNT][FOURTH_LETTER] < b[RAW_COUNT][FOURTH_LETTER]) ? 1 : -1)
const FIFTH_SORTED = stats.sort((a, b) => (a[RAW_COUNT][FIFTH_LETTER] < b[RAW_COUNT][FIFTH_LETTER]) ? 1 : -1)
const TOTAL_SORTED = stats.sort((a, b) => (a[RAW_COUNT][TOTAL] < b[RAW_COUNT][TOTAL]) ? 1 : -1)
console.log(`> ${Date()}\n\n## Word Total\n${words.length}`)
console.log("\n## Total Appearances\n")
TOTAL_SORTED.forEach((stat, i) => {
    console.log(`${i + 1}. ${stat[LETTER].toUpperCase()}: ${stat[FORMAT_PERCENT][TOTAL]} (${stat[RAW_COUNT][TOTAL]})`)
})
console.log("\n## First Letter\n")
FIRST_SORTED.forEach((stat, i) => {
    console.log(`${i + 1}. ${stat[LETTER].toUpperCase()} ${stat[FORMAT_PERCENT][FIRST_LETTER]} (${stat[RAW_COUNT][FIRST_LETTER]})`)
})
console.log("\n## Second Letter\n")
SECOND_SORTED.forEach((stat, i) => {
    console.log(`${i + 1}. ${stat[LETTER].toUpperCase()}: ${stat[FORMAT_PERCENT][SECOND_LETTER]} (${stat[RAW_COUNT][SECOND_LETTER]})`)
})
console.log("\n## Third Letter\n")
THIRD_SORTED.forEach((stat, i) => {
    console.log(`${i + 1}. ${stat[LETTER].toUpperCase()}: ${stat[FORMAT_PERCENT][THIRD_LETTER]} (${stat[RAW_COUNT][THIRD_LETTER]})`)
})
console.log("\n## Fourth Letter\n")
FOURTH_SORTED.forEach((stat, i) => {
    console.log(`${i + 1}. ${stat[LETTER].toUpperCase()}: ${stat[FORMAT_PERCENT][FOURTH_LETTER]} (${stat[RAW_COUNT][FOURTH_LETTER]})`)
})
console.log("\n## Fifth Letter\n")
FIFTH_SORTED.forEach((stat, i) => {
    console.log(`${i + 1}. ${stat[LETTER].toUpperCase()}: ${stat[FORMAT_PERCENT][FIFTH_LETTER]} (${stat[FORMAT_PERCENT][FIFTH_LETTER]})`)
})

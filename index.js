const fs = require('@ianwalter/fs')
const pReduce = require('p-reduce')
const globby = require('globby')

const toString = async (acc, file) => acc + await fs.readFile(file, 'utf8')
const toFiles = async (acc, file) => acc.concat(await globby(file), [])

module.exports = async function (...files) {
  return pReduce(await pReduce(files, toFiles, []), toString, '')
}

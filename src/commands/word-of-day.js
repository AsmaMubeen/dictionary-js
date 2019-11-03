const {Command, flags} = require('@oclif/command')
const DictionaryService = require('../services/dictionary-service')
const chalk = require('chalk')

class WordOfDayCommand extends Command {
  async run() {
    const { argv } = this.parse(WordOfDayCommand);

    let word = argv[0]
    
    let dictionaryService = new DictionaryService();

    let wordExists = await dictionaryService.wordExists(word)

    if (wordExists) {
      let definitions = await dictionaryService.definitions(word)
      if (definitions) {
        console.log(chalk.green('definitions'.toUpperCase()))
        for (let definition of definitions) {
          console.log(definition)
        }
        console.log()
      }

      let synonyms = await dictionaryService.synonyms(word)
      if (synonyms) {
        console.log(chalk.green('synonyms'.toUpperCase()))
        for (let synonym of synonyms) {
          console.log(synonym)
        }
        console.log()
      }

      let antonyms = await dictionaryService.antonyms(word)
      if (antonyms) {
        console.log(chalk.green('antonyms'.toUpperCase()))
        for (let antonym of antonyms) {
          console.log(antonym)
        }
        console.log()
      }

      let examples = await dictionaryService.examples(word)
      if (examples) {
        console.log(chalk.green('examples'.toUpperCase()))
        for (let example of examples) {
          console.log(example)
          console.log()
        }
      }
    }
  }
}

WordOfDayCommand.description = `Describe the command here
...
Extra documentation goes here
`

WordOfDayCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = WordOfDayCommand

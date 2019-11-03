const { Command, flags } = require('@oclif/command')
const DictionaryService = require('../services/dictionary-service')
const chalk = require('chalk')
const dict = require('./dict')

class WordOfDayCommand extends Command {
  async run() {
    let dictionaryService = new DictionaryService();

    let word = await dictionaryService.randomWord();
    console.log(chalk.blue('Word of the day: ', word, '\n'))
    
    await dict.run([word])
  }
}

WordOfDayCommand.description = `Displays all available details of the Word Of The Day`

module.exports = WordOfDayCommand

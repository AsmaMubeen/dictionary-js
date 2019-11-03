const { Command, flags } = require('@oclif/command')
const chalk = require('chalk')
const DictionaryService = require('../services/dictionary-service')

class AntCommand extends Command {
  static args = [
    {
      name: 'word',
      required: true,
      description: 'A word for which you want the antonyms',
      hidden: false,
    }
  ]

  async run() {
    const { argv } = this.parse(AntCommand);
    let service = new DictionaryService();

    let antonyms = await service.antonyms(argv[0])
    if (antonyms) {
      console.log(chalk.green('antonyms'.toUpperCase()))
      for (let antonym of antonyms) {
        console.log(antonym)
      }
    }
  }
}

AntCommand.description = `Shows antonyms of the given word`


module.exports = AntCommand

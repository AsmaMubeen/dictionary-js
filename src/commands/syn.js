const { Command, flags } = require('@oclif/command')
const chalk = require('chalk')
const DictionaryService = require('../services/dictionary-service')

class SynCommand extends Command {
  static args = [
    {
      name: 'word',
      required: true,
      description: 'A word for which you want the synonyms',
      hidden: false,
    }
  ]

  async run() {
    const { argv } = this.parse(SynCommand);
    let service = new DictionaryService();

    let synonyms = await service.synonyms(argv[0])
    if (synonyms) {
      console.log(chalk.green('synonyms'.toUpperCase()))
      for (let synonym of synonyms) {
        console.log(synonym)
      }
    }
  }
}

SynCommand.description = `Shows synonyms of the given word`

module.exports = SynCommand

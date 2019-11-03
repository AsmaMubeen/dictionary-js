const { Command, flags } = require('@oclif/command')
const chalk = require('chalk')
const DictionaryService = require('../services/dictionary-service')


class DefCommand extends Command {
  static args = [
    {
      name: 'word',
      required: true,
      description: 'A word for which you want the definitions',
      hidden: false,
    }
  ]

  async run() {
    const { argv } = this.parse(DefCommand);
    let service = new DictionaryService();

    let definitions = await service.definitions(argv[0])
    if(definitions) {
      console.log(chalk.green('definitions'.toUpperCase()))
      for (let definition of definitions) {
        console.log(definition)
      }
    }

  }
}

DefCommand.description = `Shows definitions of the given word`

module.exports = DefCommand

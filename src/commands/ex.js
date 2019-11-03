const { Command, flags } = require('@oclif/command')
const chalk = require('chalk')
const DictionaryService = require('../services/dictionary-service')

class ExCommand extends Command {
  static args = [
    {
      name: 'word',
      required: true,
      description: 'A word for which you want the examples',
      hidden: false,
    }
  ];

  async run() {
    const { argv } = this.parse(ExCommand);
    let service = new DictionaryService();

    let examples = await service.examples(argv[0])
    if (examples) {
      console.log(chalk.green('examples'.toUpperCase()))
      for (let example of examples) {
        console.log(example)
        console.log()
      }
    }

  }
}

ExCommand.description = `Shows examples of the given word`

module.exports = ExCommand

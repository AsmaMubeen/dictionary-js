const { Command, flags } = require('@oclif/command')
const FortyTwoWordsService = require('../services/forty-two-words-service')
const cli = require('cli-ux').cli
const chalk = require('chalk')

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
    let service = new FortyTwoWordsService();
    let { data: resp } = await service.examples(argv[0])
    let regex = /_/gi;
    if (resp.error) {
      console.log(chalk.red(resp.error))
    } else {
      console.log(chalk.yellow('examples'.toUpperCase()))
      for (let example of resp.examples) {
        console.log(example.text.replace(regex, ''))
        console.log()
      }
    }
  }
}

ExCommand.description = `Shows examples of the given word`

module.exports = ExCommand

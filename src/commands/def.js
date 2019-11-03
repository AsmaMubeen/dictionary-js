const {Command, flags} = require('@oclif/command')
const FortyTwoWordsService = require('../services/forty-two-words-service')
const cli = require('cli-ux').cli

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
    let service = new FortyTwoWordsService();
    let { data: resp } = await service.definitions(argv[0])
    cli.table(resp, {
      definitions: {
        get: row => row.text
      }
    })
  }
}

DefCommand.description = `Shows definitions of the given word`

module.exports = DefCommand

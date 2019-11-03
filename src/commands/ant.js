const {Command, flags} = require('@oclif/command')
const FortyTwoWordsService = require('../services/forty-two-words-service')
const cli = require('cli-ux').cli

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
    let service = new FortyTwoWordsService();
    let { data: resp } = await service.relatedWords(argv[0])
    let antonyms = resp.filter(x => x.relationshipType == 'antonym')[0]
    cli.table(antonyms.words, {
      antonyms: {
        get: row => row
      }
    })
  }
}

AntCommand.description = `Shows antonyms of the given word`


module.exports = AntCommand

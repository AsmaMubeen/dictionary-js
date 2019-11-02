const { Command, flags } = require('@oclif/command')
const FortyTwoWordsService = require('../services/forty-two-words-service')
const cli = require('cli-ux').cli

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
    let service = new FortyTwoWordsService();
    let { data: resp } = await service.relatedWords(argv[0])
    let synonyms = resp.filter(x => x.relationshipType == 'synonym')[0]
    cli.table(synonyms.words, {
      synonyms: {
        get: row => row
      }
    })
  }
}

SynCommand.description = `Shows synonyms of the given word`

module.exports = SynCommand

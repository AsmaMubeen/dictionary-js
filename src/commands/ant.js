const { Command, flags } = require('@oclif/command')
const FortyTwoWordsService = require('../services/forty-two-words-service')
const cli = require('cli-ux').cli
const chalk = require('chalk')

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
    if (resp.error) {
      console.log(chalk.red(resp.error))
    } else {
      let antonyms = resp.filter(x => x.relationshipType == 'antonym')[0]
      if(antonyms) {
        cli.table(antonyms.words, {
          antonyms: {
            get: row => row
          }
        })
      }
      else {
        console.log('antonyms not found for the given word')
      }
    }

  }
}

AntCommand.description = `Shows antonyms of the given word`


module.exports = AntCommand

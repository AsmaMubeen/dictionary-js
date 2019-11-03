const { Command, flags } = require('@oclif/command')
const FortyTwoWordsService = require('../services/forty-two-words-service')
const cli = require('cli-ux').cli
const chalk = require('chalk')

class DictCommand extends Command {
  static args = [
    {
      name: 'word',
      required: true,
      description: 'A word for which you want the all the details',
      hidden: false,
    }
  ];

  async run() {
    const { argv } = this.parse(DictCommand);
    let service = new FortyTwoWordsService();
    let { data: definitionsResp } = await service.definitions(argv[0])
    if (definitionsResp.error) {
      console.log(chalk.red(definitionsResp.error))
    }
    else {
      let { data: relatedWordsResp } = await service.relatedWords(argv[0])
      let synonyms = relatedWordsResp.filter(x => x.relationshipType == 'synonym')[0] ? relatedWordsResp.filter(x => x.relationshipType == 'synonym')[0].words : []
      let antonyms = relatedWordsResp.filter(x => x.relationshipType == 'antonym')[0] ? relatedWordsResp.filter(x => x.relationshipType == 'antonym')[0].words : []
      let { data: examplesResp } = await service.examples(argv[0])

      let regex = /_/gi;

      console.log(chalk.green('definitions'.toUpperCase()))
      for (let definition of definitionsResp) {
        console.log(definition.text)
      }

      if (synonyms.length) {
        console.log()
        console.log(chalk.green('synonyms'.toUpperCase()))
        for (let synonym of synonyms) {
          console.log(synonym)
        }
      }

      if (antonyms.length) {
        console.log()
        console.log(chalk.green('antonyms'.toUpperCase()))
        for (let antonym of antonyms) {
          console.log(antonym)
        }
      }

      console.log()
      console.log(chalk.green('examples'.toUpperCase()))
      for (let example of examplesResp.examples) {
        console.log(example.text.replace(regex, ''))
        console.log()
      }
    }
  }
}

DictCommand.description = `Shows definitions, synonyms, antonyms and examples of the given word`

module.exports = DictCommand

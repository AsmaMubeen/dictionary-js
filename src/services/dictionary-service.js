const config = require('../../config')
const axios = require('axios')
const chalk = require('chalk')
const FortyTwoWordsService = require('../services/forty-two-words-service')

class DictionaryService {
    fortyTwoService;

    constructor() {
        this.fortyTwoService = new FortyTwoWordsService();
    }

    async wordExists(word) {
        let { data: resp } = await this.fortyTwoService.definitions(word)
        if (resp.error) {
            console.log(chalk.red(resp.error))
            return false;
        } else {
            return true;
        }
    }

    async definitions(word) {
        let { data: resp } = await this.fortyTwoService.definitions(word)

        if (resp.error) {
            console.log(chalk.red(resp.error))
            return undefined;
        } else {
            return resp.map(x => x.text)
        }
    }

    async synonyms(word) {
        let { data: resp } = await this.fortyTwoService.relatedWords(word)

        if (resp.error) {
            console.log(chalk.red(resp.error))
            return undefined;
        } else {
            let synonyms = resp.filter(x => x.relationshipType == 'synonym')[0]
            if (synonyms) {
                return synonyms.words
            }
            else {
                return undefined
            }
        }
    }

    async antonyms(word) {
        let { data: resp } = await this.fortyTwoService.relatedWords(word)

        if (resp.error) {
            console.log(chalk.red(resp.error))
            return undefined;
        } else {
            let antonyms = resp.filter(x => x.relationshipType == 'antonym')[0]
            if (antonyms) {
                return antonyms.words
            }
            else {
                console.log(chalk.yellow('Antonyms not found for the given word.\n'))
                return undefined
            }
        }
    }

    async examples(word) {
        let { data: resp } = await this.fortyTwoService.examples(word)
        let regex = /_/gi;
        if (resp.error) {
            console.log(chalk.red(resp.error))
            return undefined;
        } else {
            let examples = resp.examples.map(x => x.text.replace(regex, ''))
            return examples
        }
    }
}

module.exports = DictionaryService

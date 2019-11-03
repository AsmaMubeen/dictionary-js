const config = require('../../config')
const axios = require('axios')

class FortyTwoWordsService {
    async randomWord() {
        return await this.get(`/words/randomWord`);
    }

    async definitions(word) {
        return await this.get(`/word/${word}/definitions`);
    }

    async examples(word) {
        return await this.get(`/word/${word}/examples`);
    }

    async relatedWords(word) {
        return await this.get(`/word/${word}/relatedWords`);
    }

    async get(apiPath) {
        return await axios.get(config.apiHost + apiPath, {
            params: {
                api_key: config.apiKey
            }
        });
    }
}



module.exports = FortyTwoWordsService

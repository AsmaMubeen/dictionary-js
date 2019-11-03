const { Command, flags } = require('@oclif/command')
const chalk = require('chalk')
const DictionaryService = require('../services/dictionary-service')
const cli = require('cli-ux').cli
const inquirer = require('inquirer')

class PlayCommand extends Command {

  async run() {
    let dictionaryService = new DictionaryService();

    let word = await dictionaryService.randomWord();
    
    let definitions = await dictionaryService.definitions(word)
    let relatedWords = await dictionaryService.getSynonymsAndAntonyms(word)
    let synonyms = relatedWords.synonyms
    let antonyms = relatedWords.antonyms

    let choices = [
      {
        name: "definition",
        value: definitions
      },
      {
        name: "synonym",
        value: synonyms
      }
    ]

    if (antonyms.length) {
      choices.push({
        name: "antonym",
        value: antonyms
      })
    }

    let randomChoice = await this.getRandomChoice(choices)
    
    let oneRandomChoiceElement = await this.getRandomChoice(randomChoice.value)

    console.log(chalk.yellow(randomChoice.name.toUpperCase()))
    console.log(oneRandomChoiceElement, '\n')
    const wordInput = await cli.prompt(chalk.blue('ENTER THE WORD'))

    if ((wordInput == word) || (synonyms.includes(wordInput))) {
      console.log(chalk.green('You have entered the correct word'))
    } else {
      console.log(chalk.red('The word you have entered is incorrect'))
      let responses = await inquirer.prompt([{
        name: 'stage',
        message: 'select a stage',
        type: 'list',
        choices: [{ name: '1. try again' }, { name: '2. hint' }, { name: '3. quit' }],
      }])
      let stage = responses.stage

      switch (stage) {
        case '1. try again':
          await this.promtAgain(word, synonyms)
          break;
        case '2. hint':
          let shuffledWord = word.split('').sort(function () { return 0.5 - Math.random() }).join('');
          let anotherRandomChoiceElement = await this.getRandomChoice(randomChoice.value)
          let hintChoices = [
            {
              name: 'shuffledWord',
              value: shuffledWord
            },
            {
              name: 'anotherDetail',
              value: anotherRandomChoiceElement
            }
          ]
          let hintRandomChoice = await this.getRandomChoice(hintChoices)
          if (hintRandomChoice.name == 'shuffledWord') {
            console.log(chalk.blue(hintRandomChoice.value))
          }
          else {
            console.log(chalk.yellow(randomChoice.name.toUpperCase()))
            console.log(anotherRandomChoiceElement)
          }
          await this.promtAgain(word, synonyms)
          break;
        case '3. quit':

          break;

        default:
          break;
      }
    }

  }

  async promtAgain(word, synonyms) {
    let wordInput = await cli.prompt(chalk.blue('ENTER THE WORD'))
    if ((wordInput == word) || (synonyms.includes(wordInput))) {
      console.log(chalk.green('You have entered the correct word'))
    } else {
      console.log(chalk.red('The word you have entered is incorrect'))
    }
  }

  async getRandomChoice(array){
    return array[Math.floor(Math.random() * array.length)]
  }
}

PlayCommand.description = `command to play a word game`

module.exports = PlayCommand

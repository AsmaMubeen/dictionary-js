const {Command, flags} = require('@oclif/command')

class PlayCommand extends Command {
  async run() {
    const {flags} = this.parse(PlayCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\asmam\\Documents\\Automate.io Task\\dictionary-js\\src\\commands\\play.js`)
  }
}

PlayCommand.description = `Describe the command here
...
Extra documentation goes here
`

PlayCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = PlayCommand
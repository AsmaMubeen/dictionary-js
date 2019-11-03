const {Command, flags} = require('@oclif/command')

class ExCommand extends Command {
  async run() {
    const {flags} = this.parse(ExCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\asmam\\Documents\\Automate.io Task\\dictionary-js\\src\\commands\\ex.js`)
  }
}

ExCommand.description = `Describe the command here
...
Extra documentation goes here
`

ExCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ExCommand

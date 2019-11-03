const {Command, flags} = require('@oclif/command')

class DictCommand extends Command {
  async run() {
    const {flags} = this.parse(DictCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\asmam\\Documents\\Automate.io Task\\dictionary-js\\src\\commands\\dict.js`)
  }
}

DictCommand.description = `Describe the command here
...
Extra documentation goes here
`

DictCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = DictCommand

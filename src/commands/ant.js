const {Command, flags} = require('@oclif/command')

class AntCommand extends Command {
  async run() {
    const {flags} = this.parse(AntCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\asmam\\Documents\\Automate.io Task\\dictionary-js\\src\\commands\\ant.js`)
  }
}

AntCommand.description = `Describe the command here
...
Extra documentation goes here
`

AntCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = AntCommand

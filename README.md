dictionary-js
=============

Command line dictionary tool

[![Version](https://img.shields.io/npm/v/dictionary-js.svg)](https://npmjs.org/package/dictionary-js)
[![License](https://img.shields.io/npm/l/dictionary-js.svg)](https://github.com/AsmaMubeen/dictionary-js/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dictionary-js
$ dict COMMAND
running command...
$ dict (-v|--version|version)
dictionary-js/0.0.0 win32-x64 node-v12.13.0
$ dict --help [COMMAND]
USAGE
  $ dict COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dict help [COMMAND]`](#dict-help-command)
* [`dict syn`](#dict-syn)

## `dict help [COMMAND]`

display help for dict

```
USAGE
  $ dict help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src\commands\help.ts)_

## `dict syn`

Shows synonyms of the given word

```
USAGE
  $ dict syn WORD

ARGUMENTS
  WORD  A word for which you want the synonyms
```

_See code: [src\commands\syn.js](https://github.com/AsmaMubeen/dictionary-js/blob/v0.0.0/src\commands\syn.js)_
<!-- commandsstop -->

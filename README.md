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
$ npm install -g dictionary-cli-tool
$ dict COMMAND
running command...
$ dict (-v|--version|version)
dictionary-cli-tool/1.0.0 win32-x64 node-v12.13.0
$ dict --help [COMMAND]
USAGE
  $ dict COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dict ant WORD`](#dict-ant-word)
* [`dict def WORD`](#dict-def-word)
* [`dict dict WORD`](#dict-dict-word)
* [`dict ex WORD`](#dict-ex-word)
* [`dict help [COMMAND]`](#dict-help-command)
* [`dict play`](#dict-play)
* [`dict syn WORD`](#dict-syn-word)
* [`dict word-of-day`](#dict-word-of-day)

## `dict ant WORD`

Shows antonyms of the given word

```
USAGE
  $ dict ant WORD

ARGUMENTS
  WORD  A word for which you want the antonyms
```

_See code: [src\commands\ant.js](https://github.com/AsmaMubeen/dictionary-js/blob/v1.0.0/src\commands\ant.js)_

## `dict def WORD`

Shows definitions of the given word

```
USAGE
  $ dict def WORD

ARGUMENTS
  WORD  A word for which you want the definitions
```

_See code: [src\commands\def.js](https://github.com/AsmaMubeen/dictionary-js/blob/v1.0.0/src\commands\def.js)_

## `dict dict WORD`

Shows definitions, synonyms, antonyms and examples of the given word

```
USAGE
  $ dict dict WORD

ARGUMENTS
  WORD  A word for which you want all the details
```

_See code: [src\commands\dict.js](https://github.com/AsmaMubeen/dictionary-js/blob/v1.0.0/src\commands\dict.js)_

## `dict ex WORD`

Shows examples of the given word

```
USAGE
  $ dict ex WORD

ARGUMENTS
  WORD  A word for which you want the examples
```

_See code: [src\commands\ex.js](https://github.com/AsmaMubeen/dictionary-js/blob/v1.0.0/src\commands\ex.js)_

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

## `dict play`

command to play a word game

```
USAGE
  $ dict play
```

_See code: [src\commands\play.js](https://github.com/AsmaMubeen/dictionary-js/blob/v1.0.0/src\commands\play.js)_

## `dict syn WORD`

Shows synonyms of the given word

```
USAGE
  $ dict syn WORD

ARGUMENTS
  WORD  A word for which you want the synonyms
```

_See code: [src\commands\syn.js](https://github.com/AsmaMubeen/dictionary-js/blob/v1.0.0/src\commands\syn.js)_

## `dict word-of-day`

Displays all available details of the Word Of The Day

```
USAGE
  $ dict word-of-day
```

_See code: [src\commands\word-of-day.js](https://github.com/AsmaMubeen/dictionary-js/blob/v1.0.0/src\commands\word-of-day.js)_
<!-- commandsstop -->

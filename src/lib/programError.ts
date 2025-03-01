import { print } from '../lib/logging'
import { Options } from '../types/Options'

/** Print an error. Exit the process if in CLI mode. */
function programError(options: Options, message: string): never {
  if (options.cli) {
    print(options, message, null, 'error')
    process.exit(1)
  } else {
    throw new Error(message)
  }
}

export default programError

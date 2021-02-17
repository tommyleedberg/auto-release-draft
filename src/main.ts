import * as core from '@actions/core'
export {
  run
}

async function run(): Promise<void> {
  try {
    core.setOutput('release-url', 'test url')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

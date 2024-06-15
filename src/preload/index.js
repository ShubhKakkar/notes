import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the browser window')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // Todo
  })
} catch (error) {
  console.log(error)
}

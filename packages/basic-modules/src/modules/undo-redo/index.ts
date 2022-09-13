/**
 * @description undo redo
 * @author wangfupeng
 */

import { IModuleConf } from '@editor/core'
import { redoMenuConf, undoMenuConf } from './menu/index'

const undoRedo: Partial<IModuleConf> = {
  menus: [redoMenuConf, undoMenuConf],
}

export default undoRedo

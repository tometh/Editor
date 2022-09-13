/**
 * @description register builtin modules
 * @author wangfupeng
 */

// basic-modules
import '@editor/basic-modules/dist/css/style.css'
import basicModules from '@editor/basic-modules'

// list-module
import '@editor/list-module/dist/css/style.css'
import wangEditorListModule from '@editor/list-module'

// table-module
import '@editor/table-module/dist/css/style.css'
import wangEditorTableModule from '@editor/table-module'

// video-module
import '@editor/video-module/dist/css/style.css'
import wangEditorVideoModule from '@editor/video-module'

// upload-image-module
import '@editor/upload-image-module/dist/css/style.css'
import wangEditorUploadImageModule from '@editor/upload-image-module'

// code-highlight
import '@editor/code-highlight/dist/css/style.css'
import { wangEditorCodeHighlightModule } from '@editor/code-highlight'

import registerModule from './register'

basicModules.forEach(module => registerModule(module))
registerModule(wangEditorListModule)
registerModule(wangEditorTableModule)
registerModule(wangEditorVideoModule)
registerModule(wangEditorUploadImageModule)
registerModule(wangEditorCodeHighlightModule)

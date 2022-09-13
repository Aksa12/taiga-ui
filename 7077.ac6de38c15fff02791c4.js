"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[7077],{

/***/ 7077:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_CYPRESS} from '@taiga-ui/cdk';\nimport {TuiFileLike} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-input-files-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputFilesExample3 {\n    readonly control = new FormControl();\n\n    readonly files: readonly TuiFileLike[] = [\n        {\n            name: `Loaded.txt`,\n        },\n        {\n            name: `A file with a very very long title to check that it can be cut correctly.txt`,\n        },\n    ];\n\n    loadingFile: TuiFileLike | null = {\n        name: `Loading file.txt`,\n    };\n\n    readonly rejectedFiles: readonly TuiFileLike[] = [\n        {\n            name: `File with an error.txt`,\n            content: `Something went wrong this time`,\n        },\n    ];\n\n    readonly fileWithLink: TuiFileLike = {\n        name: `with link.txt`,\n        src: `https://tools.ietf.org/html/rfc675`,\n    };\n\n    removedFiles = [this.loadingFile as TuiFileLike];\n    restoredFiles: TuiFileLike[] = [];\n\n    constructor(@Inject(TUI_IS_CYPRESS) readonly isCypress: boolean) {}\n\n    removeLoading(): void {\n        this.loadingFile = null;\n    }\n\n    restore(file: TuiFileLike | null): void {\n        if (!file) {\n            return;\n        }\n\n        this.restoredFiles = [...this.restoredFiles, file];\n        this.removedFiles = this.removedFiles.filter(\n            removed => file.name !== removed?.name,\n        );\n    }\n\n    remove(file: TuiFileLike): void {\n        this.removedFiles = [...this.removedFiles, file];\n        this.restoredFiles = this.restoredFiles.filter(\n            restored => file.name !== restored?.name,\n        );\n    }\n}\n";

/***/ })

}]);
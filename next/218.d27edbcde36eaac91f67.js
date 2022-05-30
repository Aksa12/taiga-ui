(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{io6Y:function(n,e,i){"use strict";i.r(e),e.default="@fields-space: @space * 5;\n@fields-space-mobile: @space * 4;\n@fields-space-large: @space * 8;\n@fields-space-large-mobile: @space * 6;\n\n.tui-form {\n    /* stylelint-disable */\n    &__header {\n        font: var(--tui-font-heading-5);\n        margin-top: @fields-space-large;\n        margin-bottom: @fields-space;\n\n        @media @mobile-m {\n            font: var(--tui-font-text-l);\n            font-weight: bold;\n            margin-bottom: @fields-space-mobile;\n        }\n\n        &_margin-top_none {\n            margin-top: 0;\n        }\n\n        &_margin-bottom_none {\n            margin-bottom: 0;\n        }\n\n        &_margin-bottom_small {\n            margin-bottom: @fields-space - @space;\n\n            @media @mobile-m {\n                margin-bottom: @fields-space-mobile - @space;\n            }\n        }\n    }\n    /* stylelint-enable */\n\n    &__row {\n        margin-top: @fields-space;\n\n        &:first-child {\n            margin-top: 0;\n        }\n\n        &_multi-fields {\n            display: flex;\n\n            @media @mobile-m {\n                flex-wrap: wrap;\n            }\n        }\n\n        &_half-width {\n            width: ~'calc(50% - (@{fields-space} / 2))';\n\n            @media @mobile-m {\n                width: 100%;\n            }\n        }\n\n        &_checkboxes {\n            display: flex;\n            flex-wrap: wrap;\n        }\n\n        @media @mobile-m {\n            margin-top: @fields-space-mobile;\n        }\n    }\n\n    &__multi-field {\n        flex: 1 1 0;\n        min-width: 0;\n        margin-left: @fields-space;\n\n        &:first-child {\n            margin-left: 0;\n        }\n\n        @media @mobile-m {\n            flex-basis: 100%;\n            margin-top: @fields-space-mobile;\n            margin-left: 0;\n\n            &:first-child {\n                margin-top: 0;\n            }\n        }\n    }\n\n    &__field-note {\n        font: var(--tui-font-text-s);\n        margin-top: @space;\n        color: var(--tui-text-02);\n    }\n\n    &__field-checkbox {\n        margin-top: @space * 2;\n    }\n\n    &__checkbox {\n        flex: ~'1 1 calc(50% - 0.625rem)';\n\n        &:nth-child(even) {\n            margin-left: 1.25rem;\n        }\n\n        &:nth-child(n + 3) {\n            margin-top: 1rem;\n        }\n    }\n\n    &__buttons {\n        display: flex;\n        margin-top: @fields-space-large;\n\n        &_align_end {\n            justify-content: flex-end;\n        }\n\n        &_align_center {\n            justify-content: center;\n        }\n\n        @media @mobile-m {\n            flex-direction: column;\n            margin-top: @fields-space-large-mobile;\n        }\n    }\n\n    &__button {\n        margin-left: @space * 3;\n\n        &:first-child {\n            margin-left: 0;\n        }\n\n        @media @mobile-m {\n            margin-top: @space * 2;\n            margin-left: 0;\n        }\n    }\n}\n"}}]);
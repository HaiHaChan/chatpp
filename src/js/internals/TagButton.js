let common = require("../helpers/Common.js");
let Const = require("../helpers/Const.js");

class TagButton {
    constructor() {
        this.chat_text_jquery = $("#_chatText");
    }
    setUp() {
        this.addTagButton();

    }
    addTagButton() {
        if ($("#externalTagsButton").length > 0) {
            return;
        }
        $("#_chatSendTool").append(
            $("<li>", {
                id: "_externalInfoTagsButton",
                class: "chatInput__element",
                css: {
                    "display": "inline-block"
                },
                attr: {
                    "role": "button"
                },
            }).append(
                $("<span>", {
                    id: "externalInfoTagsButton",
                    class: "emoticonText icoSizeSmall chatInput__element emoticonTextEnable"
                }),
            ),
            $("<li>", {
                id: "_externalTitleTagsButton",
                class: "chatInput__element",
                css: {
                    "display": "inline-block"
                },
                attr: {
                    "role": "button"
                },
            }).append(
                $("<span>", {
                    id: "externalTitleTagsButton",
                    class: "emoticonText icoSizeSmall chatInput__element emoticonTextEnable"
                }),
            ),
        );
        let infoDiv = $('#externalInfoTagsButton');
        infoDiv.html('Info');

        let titleDiv = $('#externalTitleTagsButton');
        titleDiv.html('Title');

        $("#_externalInfoTagsButton").on('click', (event) => {
            event.preventDefault();
            this.wrapTextWithTag('info');
        });

        $("#_externalTitleTagsButton").on('click', (event) => {
            event.preventDefault();
            this.wrapTextWithTag('title');
        });

    }

    wrapTextWithTag(tag) {
        let content = this.chat_text_jquery.val();
        let selectedStart = this.chat_text_jquery[0].selectionStart;
        let selectedEnd = this.chat_text_jquery[0].selectionEnd;
        let selectedString = content.substring(selectedStart, selectedEnd);
        let newText = `${content.substring(0,selectedStart)} [${tag}]${selectedString}[/${tag}] ${content.substring(selectedEnd,content.length)} `;
        this.chat_text_jquery.val(newText);
    }
}

let tagButton = new TagButton();
module.exports = tagButton;

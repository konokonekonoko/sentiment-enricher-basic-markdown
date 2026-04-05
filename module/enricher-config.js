const patterns = [
    [
        /\*\*\*([^*]+?)\*\*\*/g, {
            classes: ["bold", "italics"],
            printGroupNo: 1,
            priority: 100,
        },
    ],
    [
        /(?<!\*)\*\*([^*]+?)\*\*(?!\*)/g, {
            classes: ["bold"],
            printGroupNo: 1,
            priority: 100,
        },
    ],
    [
        /(?<!\*)\*([^*]+?)\*(?!\*)/g, {
            classes: ["italics"],
            printGroupNo: 1,
            priority: 100,
        },
    ],
    [
        /^(?<!#)# (.+)/g, {
            classes: ["heading"],
            printGroupNo: 1,
            strFormat: {
                wrapper: ["<h1>", "</h1>"],
            },
            priority: 100,
        },
    ],
    [
        /^(?<!#)## (.+)/g, {
            classes: ["heading"],
            printGroupNo: 1,
            strFormat: {
                wrapper: ["<h2>", "</h2>"],
            },
            priority: 100,
        },
    ],
    [
        /^(?<!#)### (.+)/g, {
            classes: ["heading"],
            printGroupNo: 1,
            strFormat: {
                wrapper: ["<h3>", "</h3>"],
            },
            priority: 100,
        },
    ],
    [
        /^####+ (.+)/g, {
            classes: ["heading"],
            printGroupNo: 1,
            strFormat: {
                wrapper: ["<h4>", "</h4>"],
            },
            priority: 100,
        },
    ],
    [
        /^\s*([\*-]) +(?=\w)/g, {
            classes: ["list"],
            priority: 100,
        },
    ],
];

const output = {
    displayName: "Basic Markdown Highlighting",
    patterns
};
export default output;

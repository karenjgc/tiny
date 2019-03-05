module.exports = function tiny(string) {
    //Thanks for the genius idea: https://ines.io/blog/custom-console-logging-emoji
    const commands = [
        { emoji: '💩', name: 'poo' }
    ];

    commands.forEach(({ name, emoji }) => window.console[name] = (...args) => console.log(emoji + ' ' + args.join(', ')));
    console.poo(string);
};
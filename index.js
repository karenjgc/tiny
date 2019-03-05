module.exports = function tiny(string) {
  const commands = [
        { emoji: '💩', name: 'poo' }
    ];

    commands.forEach(({ name, emoji }) => window.console[name] = (...args) => console.log(emoji + ' ' + args.join(', ')));
    console.poo('Happy Poo!');
};
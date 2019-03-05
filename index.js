module.exports = function tiny(string) {
  //if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  //return string.replace(/\s/g, "");

  const commands = [
    { emoji: '🦄', name: 'unicorn' },
    { emoji: '🍕', name: 'pizza' },
    { emoji: '🍺', name: 'beer' },
    { emoji: '💩', name: 'poo' }
  ];

  // Create custom commands
  commands.forEach(({ name, emoji }) => window.console[name] = (...args) => console.log(emoji + ' ' + args.join(', ')));
  console.unicorn("So magical!");
};
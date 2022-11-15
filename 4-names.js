const secret = 'SUPER SECRET'
const john = 'john'
const peter = 'peter'

console.log(module)

// RETURNS: 
//Module {
//     id: '.',
//     path: '/home/ayennac/learn-express',
//     exports: {},
//     parent: null,
//     filename: '/home/ayennac/learn-express/4-names.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/home/ayennac/learn-express/node_modules',
//       '/home/ayennac/node_modules',
//       '/home/node_modules',
//       '/node_modules'
//     ]
//   }

module.exports = {john, peter}
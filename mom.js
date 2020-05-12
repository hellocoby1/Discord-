
const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'NzA5ODExNzI3OTM1NzMzODcx.XrrY4g.PXQEWb4T5NWNr20SBckgGsrM5YE';

client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  if (message.channel.type != 'text' || message.author.bot || !message.startsWith('*'))
  return; //exit the function
  
  if (message.content === '*ping') {
    message.channel.send('MEE6: KILL ANTHONY YUEN');
  };
  if (message.content === '*ping') {
    message.channel.send('Reaction Roles: KILL ANTHONY YUEN');
  };
  if (message.content === '*ping') {
    message.channel.send('Rythm: KILL ANTHONY YUEN');
  };
  if (message.content === '*ping') {
    message.channel.send('Testing: KILL ANTHONY YUEN');
  };
  
});

// Log our bot in
client.login(token);

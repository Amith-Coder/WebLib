/*CMD
  command: Kssk
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var ok = /^[@a-zA-Z]+$/
if (message.includes("@")) {
  Bot.sendMessage("hmm")
} else return Bot.sendMessage("nope")
if (message.match(ok)) {
  Bot.sendMessage("hmm")
}


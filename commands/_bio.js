/*CMD
  command: /bio
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var already = User.getProperty("DoneTaken")
var views = Libs.ResourcesLib.anotherChatRes("status", "global")
if (!already) {
  status.add(1)
  User.setProperty("DoneTaken", "done", "string")
}
Bot.sendMessage("Name - Amith\nViews - " + views + "")


/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

if (params) {
  if (params.includes("start")) {
    Bot.runCommand("id " + params)
  }k2
Bot.sendMessage(
  "*Hey!\nI Am Notobin Bot*\n\nCoded by [Master](https://t.me/NOOBX7)\n\n⚠️Note : _Use This Bot For Sharing Message and User It In Seller Bot Also!_\n\nHow To Use Bot?\n\nFor Message - _Just Send Message To Bot U Can Use Edit Message Or Create Link Of Message_\n\nFor Photo - _Just Send Photo To Bot And Get Link Of Photo_\n\nFor Video - _Just Send Video To Bot And Get Link Of Video_\n\nFor Documents - _Just Send Documents To Bot And Get Link Of Documents_",
  { disable_web_page_preview: "true" }
)


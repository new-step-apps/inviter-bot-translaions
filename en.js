
module.exports = {
  messageevent: {
    invalidcmd: `Invalid Command Plesse type\`[prefix] help\`to get all čommands 😊`,
    ownercommands:`This command can only be used by the owners!`,
    blacklist: `you can't use commands because you have been blacklisted`,
    descmaintance:`<a:loading:766266540978733077> sorry am on Maintenancece Now please Be Patient<a:loading:766266540978733077> `,
    titlemaintance:`Bot Maintenance Time`,
    quicksprefix:`**__ Server Prefix__**`,
    quicktitle:`__Quick Info__`,
    quickbotid:`**__Bot Id:__**`,
    quickbotusername:`**__Bot username:__**`,
    quickbotinfo:`__**Bot info:**__`,
    quickusers:`**__Users:__**`,
    quickservers:`**__Servers:__**`,
    quickcreatedon:`**__Created on:__**`,
    quicksysteminfo:`__**System Info**__`,
    quickram:`**__RAM Usage:__**`,
    quickbotuptime:`**__Bot Uptime:__**`,
    quickdjsv:`**__Discord.js version:__**`,
    quicknodev:`**__Node Version:__**`,
    quickbotping:`**__Bot Ping:__**`,
    quicksupport:`**__Support Server: __**`
  },
  guildcreate:{
    embedtitle:`**Thanks for adding me! :blush:**`,
    embeddesc:`
       Welcome as a new user of our bot.
       The bot was officially launched on \`1/1/2021\` 
       so follow us on the support server
       always to find out everything new.
       Our bot starts with one thing only,
       Mention bot To Git Passaic help
      which is \`ihelp\` To Get all commands \n\n**Devlopers :**  <@713429811434881093> `,
      embedfield:`Support Server`
  },
  lang: {
    perms: `You do not have permission \`MANAGE_GUILD\``,
    msg: `please enter a vaild language (\`ar\`, \`en\`, \`ru\`, \`ua\`)`,
    err: `The chosen language is already the one active on this server.`
  },
  addinvites:{
    dontmention:`you didn't mention anyone.`,
    notatserver:`the member you mentioned must be on the server.`,
    succes:`successfully added .`,
    notnumber:`vaild naumber`,
    prems:`you don't have premissions`
  },
  blacklist:{
    nomention:`please mention user or id ._.`,
    invaliduser:`Invalid user or id ._.`,
    myowner:`Did You mean that? Thats My Owner 😏._.`,
    already:`This user is already blacklisted!`,
    done:`successfully Blacklisted`,
    usend:`You have been Blacklist now you cannot use me 😏`
  },
  bug:{
    nobug:`please type your bug`,
    done:`bug report was sent`,
    arrived:`has reported a bug!`,
    nochannel:`reportsChannelId needs to be provided, for this command to work.`
    
  },
  docs:{
    noresult:`No results....`,
    searchfor: "**What do you want to search for?** \nType `cancel` to cancel the command.",
    longtime:"Welp.. you took too long, cancelling the command."
  },
  feedback:{
    notext:`If u wanna be nice please give some feedback.`,
    succes:`Successfully send feedback!`,
    embedtitle:`New Feedback`
  },
  guildleave:{
    noid:`Please provide an id`,
    notfound:`That guild wasn't found`,
    succes:`Successfully left guild`,
    err:`An error occurred leaving that guild`
  },
  help:{
    title:`__Support-Server__`,
    desc:`You Can Ping Bot Any Time For Quick Help\n\n__**Help Commands**__`,
    filed1:`__server prefix__`,
    val2:`**__Desc :__** Gives you bot invite link\n**__Usage:__** [prefix]botinvite`,
    val3:`**__Desc :__** shows you invite count\n**__Usage:__** [prefix]invites @user `,
    val4:`**__Desc :__** add invites to member\n**__Usage:__** [prefix]addinvites @user <count>`,
    val5:`**__Desc :__** remove invites from member\n**__Usage:__** [prefix]removeinvites @user <count>`,
    val6:`**__Desc :__** reset user invites\n**__Usage:__** [prefix]resetuser @user`,
    val7:`**__Desc :__** reset guild invites\n**__Usage:__** [prefix]resetguild`,
    val8:`**__Desc :__** shows you top 10 users have invites\n**__Usage:__** [prefix]leaderboard`,
    val9:`**__Desc :__** setup channel / defaultMessage \n**__Usage:__** [prefix]setup channel <channelId>\n[prefix]setup defaultMessage`,
    val10:`**__Desc :__** change your server [prefix]\n**__Usage:__** [prefix][prefix] <new [prefix]>`,
    val11:`**__Desc :__** change your server language\n**__Usage:__** [prefix]setlang<language>`,
    val12:`**__Desc :__** shows you how long bot up\n**__Usage:__** [prefix]uptime`,
    val13:`**__Desc :__** shows you api latncy\n**__Usage:__** [prefix]ping`,
    val14:`**__Desc :__** gives you help commands \n**__Usage:__** [prefix]help`,
    val15:`**__Bot Owner Commands__**`
  },
  invites:{
    title:`invites`,
    total:`<:invite:779346245583110184> |**Total : **`,    
    regular:` <:approved:781452474895827045> |**Regular: **`,
    bouns:`<:added:781452550279921684> |** bonus : **`,
    leave:`<:Twitter:779345709610434620> |** leaves : **`,
    fake:`<:minus:781452661588885504> |** fake : **`
  },
  joinvoice:{
    done:`i have joined VoiceChannel`,
    err:`Please join a voice channel.`
  },
  lb:{
    embedt:`Top 10 Users`,
    inv:`invites`
  },
  leavevoice: {
    done:`i have left VoiceChannel`,
    err:`Please join my voice channel to do that.`
  },
  memberadd:{
    unknown:`-member- is joined the server! But don't know who invite him. :tada:`,
  membertrue:`-member-, joined the server\nBy: -target-.\n Have now (total: [-total-] | regular: [-regular-]| fake: [-fakecount-]| leave: [-leave-])`,
  joined :`is joined the server.`
  },
  memberleave:{
    done: `-member- is left server `
  },
  ping:{
    ping1:`pong`,
    ping2:`Ping`
  },
  pre:{
    pre1:`Current server prefix:`,
    pre2:`prefix <prefix>\` to set a new prefix`,
    prems:`Sorry, You don't have the correct permissions for this command.`,
    same:`thats is already your server prefix`,
    done:`Successfully updated prefix to`
  },
  removeinvites:{
    prems:`you don't have a permission.`,
    err:`you didn't mention anyone.`,
    done:`successfully removed `,
    notfound:`the member you mentioned must be on the server.`,
    valid:`invalid Number`
  },
  resguild:{
    prems:"you don't have a permission.",
    ask:"reset all users invites?" + " \n Type \`yes\` to continue or no ",
    succes: `successfully reset Users invites.`,
    err: `reset all invites Cancelled`
  },
  resuser:{
    prems:`you don't have a permission.`,
    nomention:`you didn't mention anyone.`,
    notfound:`the member you mentioned must be on the server.`,
    ask:"reset user invites?" + " \n Type \`yes\` to continue or no ",
    err:`reset invites. Cancelled`,
    succes:`successfully reset invites`
  },
  reward:{
    prems:`you don't have a permission.`,
    err: "please use \n\`[prefix]reward <roleid> <count>\`",
    invalid:`please type numbers only`,
    norole:`please type role id`,
    done:"a new reward was successfully added.",
  },
  setup:{
    prems:`you don't have enough permission to do that.`,
    option:`please specify an option`,
    err:` use \`Channel\` \`defaultMessage\` options.`,
    done:`Successfully enabled`
  },
  uptime:{
    up:`The bot has been up for`
  },
  unblist:{
    noid:`Invalid user or id ._.`,
    not:`This user is not blacklisted`,
    done:`Successfully Unblacklisted!`
  }

  
}
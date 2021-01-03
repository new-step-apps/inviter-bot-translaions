const { owners, botMaintenance, basiclang, Prefix } = require("../Settings/Settings.json");

module.exports = {
  messageevent: {
    invalidcmd: `أمر غير صحيح\`${Prefix} help\`لتري جميع الاوامر 😊`,
    ownercommands:`يمكن استخدام هذا الامر فقط بواسطة مبرمج البوت`,
    blacklist: `ناسف ولكنك بقائمة البلاك ليست لا يمكن استخدام الاوامر`,
    descmaintance:`<a:loading:766266540978733077> البوت حاليا بحالة صيانة من فضلك انتظر انتهاء الصيانة<a:loading:766266540978733077> `,
    titlemaintance:`البوت في حالة صيانة`,
    quicksprefix:`**__ بادئة السرفر__**`,
    quicktitle:`__مساعدة سريعة__`,
    quickbotid:`**__ايدي البوت:__**`,
    quickbotusername:`**__اسم البوت:__**`,
    quickbotinfo:`__**معلومات البوت:**__`,
    quickusers:`**__الاعضاء:__**`,
    quickservers:`**__عدد السيرفرات:__**`,
    quickcreatedon:`**__تاريخ الانشاء:__**`,
    quicksysteminfo:`__**معلومات النظام**__`,
    quickram:`**__استهلاك الرام:__**`,
    quickbotuptime:`**__وقت اتصال البوت:__**`,
    quickdjsv:`**__اصدار ديسكورد:__**`,
    quicknodev:`**__اصدار نود:__**`,
    quickbotping:`**__سرعة اتصال البوت:__**`,
    quicksupport:`**__سرفر الدعم الفني: __**`
  },
  guildcreate:{
    embedtitle:`**شكرا لاضافتك لي لسيرفرك :blush:**`,
    embeddesc:`
       Welcome as a new user of our bot.
       The bot was officially launched on \`1/1/2021\` 
       so follow us on the support server
       always to find out everything new.
       Our bot starts with one thing only,
       Mention bot To Git Passaic help
      which is \`ihelp\` To Get all commands \n\n**Devlopers :**  <@713429811434881093> `,
      embedfield:`سرفر الدعم الفني`
  },
  lang: {
    perms: `ناسف ولكن ليس لديك صلاحيات \`MANAGE_GUILD\``,
    msg: `من فضلك ادخلةلغة صحيحة كمثال :  (\`ar\`, \`en\`, \`ru\`, \`ua\`)`,
    err: `هذه لغةةالسيرفر بالفعل من فضلك قم باختيار لعة اخري`
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
    title:`دعوات`,
    total:`<:invite:779346245583110184> |**اجمالي : **`,    
    regular:` <:approved:781452474895827045> |**حقيقي: **`,
    bouns:`<:added:781452550279921684> |** bonus : **`,
    leave:`<:Twitter:779345709610434620> |** غادر : **`,
    fake:`<:minus:781452661588885504> |** وهمي : **`
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
    unknown:`-member- قام بالانضمام ولكن لا اعرف بواسطة من :tada:`,
  membertrue:`-member-, قام بالانضمام للسيرفر\nبواسطة: -target-.\n عدد دعواته (اجمالي: [-total-] | حقيقي: [-regular-]| وهمي: [-fakecount-]| غادر: [-leave-])`,
  joined :`is joined the server.`
  },
  memberleave:{
    done: `-member- قام بالمغادرة `
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
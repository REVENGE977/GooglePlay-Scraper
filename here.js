client.on("message", message => {
    let app = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "googleplay")) {
        if(!app) return message.channel.send("Error: Please Type The App Name After The Command !")
 
gplay.search({
    term: "Discord",
    num: 2
})
  .then(data => {
      let resultEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setThumbnail(data[0].icon)
      .setTitle("Search Result:")
      .setDescription(data[0].title)
      .addField("**Title:**", data[0].title, true)
      .addField("**AppID:**", data[0].appId, true)
      .addField("**Developer:**", data[0].developer, true)
      .addField("**Price:**", data[0].priceText, true)
      .addField("**Rate:**", data[0].scoreText, true)
      .setColor("#2F3136")
      message.channel.send(resultEmbed);        
  })
  
    }
})

const gplay = require("google-play-scraper")
const Discord = require("discord.js")
const token = "REPLACE WITH YOUR OWN BOT'S TOKEN"
const prefix = "g?"
const client = new Discord.Client()

client.once("ready", () => {
    console.log("Scrapper bot's ready")
})

client.on("message", (message) => {

    const args = message.content.split(/ /)
    const cmd = args.shift()

    if (cmd == `${prefix}scrap`) {
        let query = args.join(" ")
        if (query) {
            gplay.search({
                term: query,
                num: 1
            }).then((res) => {
                const game = res[0]
                const gameEmbed = new Discord.RichEmbed()
                    .setTitle(game.title)
                    .setDescription(game.summary + `\n\n[Click here to visit](${game.url})`)
                    .addField("Score: ", game.scoreText, true)
                    .addField("Price: ", game.priceText, true)
                    .setThumbnail(game.icon)
                    .setTimestamp(Date())
                    .setColor(0x008000)
                return message.channel.send(gameEmbed)
            })

        } else {

            return message.reply(`Thanks to put a research. Ex: "${prefix}scrap panda"`)
        }
    }
})

client.login(token).catch((_) => {
    console.log("The token may have expired or is invalid. Please, restart with a new token.")
})

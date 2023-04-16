const express = require('express');
const { Telegraf } = require('telegraf');

// Создаем приложение Express и экземпляр бота Telegraf
const app = express();
const bot = new Telegraf('5884638429:AAHymsAxkSFQKfNSQsBdkCXbcxj_QijoixM');

// Обработчик сообщений в чате
bot.on('text', async (ctx) => {
    const messageText = ctx.message.text;

    // Проверяем наличие слова "гей" в сообщении
    if (messageText.toLowerCase().includes('пердикс кто ')) {
        const chatId = ctx.chat.id;
        const answer = messageText.replace('пердикс кто', '');
        console.log(answer);
        // Получаем список участников чата
        const chatMembers = await ctx.getChatMembersCount();
        const chatMembersList = await ctx.getChatAdministrators(chatId);

        // Выбираем случайного участника из чата
        const randomIndex = Math.floor(Math.random() * chatMembers);
        const randomMember = chatMembersList[randomIndex];

        const userFirstName = randomMember.user.first_name ? randomMember.user.first_name : '';
        const userLastName = randomMember.user.last_name ? randomMember.user.last_name : '';

        // Отправляем ответное сообщение
        ctx.reply(`${userFirstName} ${userLastName}${answer}`);
    }
});

// Запускаем бота
bot.launch();

// Запускаем сервер Express
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});



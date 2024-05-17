import runChat from './gemini.js';

export const onSent = async (prompt) => {
    const answer =  await runChat(prompt);
    return answer;
}

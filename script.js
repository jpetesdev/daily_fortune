const adjectives = [
    "abundant", "bright", "calm", "delightful", "eager", "fabulous", "gentle", "happy", "immense", "joyful",
    "kind", "lively", "mysterious", "noble", "open", "peaceful", "quaint", "radiant", "serene", "tender",
    "unique", "vivid", "warm", "zealous", "adventurous", "bold", "charming", "dynamic", "elegant", "fascinating",
    "graceful", "honest", "inventive", "jovial", "keen", "lovable", "modern", "nurturing", "outgoing", "playful",
    "quick", "resilient", "skillful", "trustworthy", "upbeat", "vibrant", "whimsical", "zestful", "assertive", "brave",
    "compassionate", "dependable", "energetic", "flawless", "generous", "hilarious", "innovative", "joyous", "luminous",
    "mellow", "optimistic", "passionate", "quizzical", "reliable", "shiny", "tactile", "understanding", "versatile", "wise",
    "zany", "affectionate", "creative", "daring", "enthusiastic", "friendly", "gritty", "humble", "insightful", "jubilant",
    "kooky", "loyal", "motivated", "natural", "outstanding", "persistent", "quick-witted", "refreshing", "spontaneous", "thoughtful"
  ];

  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "I think, therefore I am. - René Descartes",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
    "The best way to predict your future is to create it. - Peter Drucker",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Get your facts first, then you can distort them as you please. - Mark Twain",
    "Do not go gentle into that good night. Rage, rage against the dying of the light. - Dylan Thomas",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The unexamined life is not worth living. - Socrates",
    "To love and be loved is to feel the sun from both sides. - David Viscott",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "Life is short, and it is up to you to make it sweet. - Sarah Louise Delany",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "To be yourself is all that you can do. - Chris Cornell",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "We cannot change the cards we are dealt, just how we play the hand. - Randy Pausch",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "You do not find the happy life. You make it. - Camilla E. Kimball",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "The best revenge is massive success. - Frank Sinatra",
    "If you tell the truth, you don't have to remember anything. - Mark Twain",
    "A person who never made a mistake never tried anything new. - Albert Einstein",
    "You must do the things you think you cannot do. - Eleanor Roosevelt",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
    "The mind is everything. What you think you become. - Buddha",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The way I see it, if you want the rainbow, you gotta put up with the rain. - Dolly Parton",
    "Life isn’t about finding yourself. Life is about creating yourself. - George Bernard Shaw",
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "Everything you’ve ever wanted is on the other side of fear. - George Addair",
    "Opportunities don't happen. You create them. - Chris Grosser",
    "The best preparation for tomorrow is doing your best today. - H. Jackson Brown Jr.",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "Act as if what you do makes a difference. It does. - William James",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "You get in life what you have the courage to ask for. - Oprah Winfrey",
    "The best way to cheer yourself up is to try to cheer somebody else up. - Mark Twain",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "Everything has beauty, but not everyone can see. - Confucius",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
    "The most wasted of days is one without laughter. - E.E. Cummings",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "Happiness is not by chance, but by choice. - Jim Rohn",
    "You do not find the happy life. You make it. - Camilla E. Kimball",
    "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact. - William James",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Everything you’ve ever wanted is on the other side of fear. - George Addair",
    "Happiness depends upon ourselves. - Aristotle",
    "To be happy, we must not be too concerned with others. - Albert Camus",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "The best way out is always through. - Robert Frost",
    "The only thing worse than being blind is having sight but no vision. - Helen Keller",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The best revenge is massive success. - Frank Sinatra",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "To be yourself is all that you can do. - Chris Cornell",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln"
  ];
  
// This function is used to take in an array and return a random item from it.
const randomArrayPicker = array => {
    let num = Math.floor(Math.random() * array.length);
    return array[num];
}

// Function that generates an array with the number 1-1000
const numbersGenerator = () => {
    let numArray = [];
    for (let i = 1; i < 1000; i++) {
        numArray.push(i);
    }
    return numArray;
}

// Sets the random three items needed for the users daily fortune.
let randomAdj = randomArrayPicker(adjectives);
let luckyNum = randomArrayPicker(numbersGenerator());
let todaysQuote = randomArrayPicker(quotes);

const dailyFortune = (number, adj, quote) => {
    console.log('Here is your daily fortune!');
    console.log()
    console.log(`Your lucky number is: ${number.toString()}`);
    console.log();
    console.log(`Your day will be: ${adj}!`);
    console.log();
    console.log(`Your inspirational quote is: ${quote}`)
}

dailyFortune(luckyNum, randomAdj, todaysQuote);
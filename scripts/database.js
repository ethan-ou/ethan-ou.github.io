let questionList = [
    {
        "question": "Are you ever afraid that following your heart will lead you down the wrong path?",
        "level": "deep",
        "category": "aspirations",
        "id": 0
    },
    {
        "question": "Imagine it’s twenty years in the future. You have achieved all you ever hoped to achieve. What type of person have you become, and what have you done that you would admire?",
        "level": "deep",
        "category": "aspirations",
        "id": 1
    },
    {
        "question": "When you look into yourself, do you feel like your inner world is always evolving and changing, or do you like to think it's orderly and stable?",
        "level": "deep",
        "category": "character",
        "id": 2
    },
    {
        "question": "Show me a song or a scene from a film that made you shed tears.",
        "level": "deep",
        "category": "character",
        "id": 3
    },
    {
        "question": "What do you wish you cared less about?",
        "level": "deep",
        "category": "character",
        "id": 4
    },
    {
        "question": "What has changed the most about you since graduating high school?",
        "level": "deep",
        "category": "character",
        "id": 5
    },
    {
        "question": "What do you think is the most beautiful part of your personality?",
        "level": "deep",
        "category": "character",
        "id": 6
    },
    {
        "question": "What's your favourite strategy for avoiding tough situations?",
        "level": "deep",
        "category": "character",
        "id": 7
    },
    {
        "question": "If you went to a therapist today, what would they say you're holding back on the most?",
        "level": "deep",
        "category": "character",
        "id": 8
    },
    {
        "question": "Do you ever worry that you're secretly completely different to everybody else?",
        "level": "deep",
        "category": "character",
        "id": 9
    },
    {
        "question": "Would you rather be direct and straightforward at the cost of potentially offending someone, or be careful with what you say but cover parts of the truth?",
        "level": "deep",
        "category": "character",
        "id": 10
    },
    {
        "question": "What age would you like to be for the rest of your life?",
        "level": "deep",
        "category": "character",
        "id": 11
    },
    {
        "question": "What's one action that would be so out of character for you, that your friends would be shocked that you did?",
        "level": "deep",
        "category": "character",
        "id": 12
    },
    {
        "question": "What do you hate most about yourself?",
        "level": "deep",
        "category": "character",
        "id": 13
    },
    {
        "question": "What piece of negative feedback would absolutely crush you (or would've in the past) if you received it from another person?",
        "level": "deep",
        "category": "character",
        "id": 14
    },
    {
        "question": "What do you wish your mind was better at doing?",
        "level": "deep",
        "category": "character",
        "id": 15
    },
    {
        "question": "How do you think your parents would describe you as a child?",
        "level": "deep",
        "category": "past",
        "id": 16
    },
    {
        "question": "If you had to repeat any year of your life, which would you relive? What would you want to see again?",
        "level": "deep",
        "category": "past",
        "id": 17
    },
    {
        "question": "If you could sit in a movie theatre and share a past moment with a friend, who would you choose and what would you go back to? What makes that moment so significant to anyone trying to understand you?",
        "level": "deep",
        "category": "past",
        "id": 18
    },
    {
        "question": "Have you ever had a dream that made you realise you needed to change something?",
        "level": "deep",
        "category": "past",
        "id": 19
    },
    {
        "question": "Have you done anything really stupid that in retrospect taught you a lot?",
        "level": "deep",
        "category": "past",
        "id": 20
    },
    {
        "question": "What's the darkest moment you've had that you've never told anybody?",
        "level": "deep",
        "category": "past",
        "id": 21
    },
    {
        "question": "Have you ever wanted to or successfully harmed yourself?",
        "level": "deep",
        "category": "past",
        "id": 22
    },
    {
        "question": "Was there anything in your life you worked really hard for but still failed to get? ",
        "level": "deep",
        "category": "past",
        "id": 23
    },
    {
        "question": "When did you last cry in front of another person?",
        "level": "deep",
        "category": "past",
        "id": 24
    },
    {
        "question": "What failures and tough moments do you never bring up when you talk about your life?",
        "level": "deep",
        "category": "past",
        "id": 25
    },
    {
        "question": "What's the closest you've come to thinking you didn't deserve to live?",
        "level": "deep",
        "category": "past",
        "id": 26
    },
    {
        "question": "What’s the meanest thing you’ve ever done to another person? What made you do it?",
        "level": "deep",
        "category": "past",
        "id": 27
    },
    {
        "question": "Show me an embarrassing photo or video of yourself when you were younger.",
        "level": "deep",
        "category": "past",
        "id": 28
    },
    {
        "question": "What has been the greatest peer pressure you've felt as an adult?",
        "level": "deep",
        "category": "past",
        "id": 29
    },
    {
        "question": "What lesson did you learn early on that you've continued to follow throughout life?",
        "level": "deep",
        "category": "past",
        "id": 30
    },
    {
        "question": "Has there ever been a time you've had to handle peer pressure when you were young? How did you get through it?",
        "level": "deep",
        "category": "past",
        "id": 31
    },
    {
        "question": "Have you ever had a chance encounter that has changed the trajectory of your life for the better?",
        "level": "deep",
        "category": "past",
        "id": 32
    },
    {
        "question": "When was the last time you put someone else's interest above yours? Was it worth it?",
        "level": "deep",
        "category": "past",
        "id": 33
    },
    {
        "question": "Have you ever been in a situation where you struggled with doing the right thing?",
        "level": "deep",
        "category": "past",
        "id": 34
    },
    {
        "question": "If you could thank one teacher for what they taught you, who would it be and why?",
        "level": "deep",
        "category": "reflections",
        "id": 35
    },
    {
        "question": "Looking back, is there anything in your life you're so glad you did?",
        "level": "deep",
        "category": "reflections",
        "id": 36
    },
    {
        "question": "What do you think you'll miss about your life today when you look back many years from now?",
        "level": "deep",
        "category": "reflections",
        "id": 37
    },
    {
        "question": "What are some of the happiest or fondest memories you've had?",
        "level": "deep",
        "category": "reflections",
        "id": 38
    },
    {
        "question": "What's the biggest secret you keep from everybody that you're willing to share?",
        "level": "deep",
        "category": "reflections",
        "id": 39
    },
    {
        "question": "What sort of things did you feel really insecure about when you were younger? ",
        "level": "deep",
        "category": "reflections",
        "id": 40
    },
    {
        "question": "Were there any decisions you once wrestled that really didn't matter later down the line?",
        "level": "deep",
        "category": "reflections",
        "id": 41
    },
    {
        "question": "Is there something you've stopped doing that would make your ten year old self depressed?",
        "level": "deep",
        "category": "reflections",
        "id": 42
    },
    {
        "question": "What's something you've learnt in the past year that has been important to your development as a person?",
        "level": "deep",
        "category": "reflections",
        "id": 43
    },
    {
        "question": "Has there been anything you've gotten better at as you've grown older? Do you think this is because of age and maturity, or due to conscious work?",
        "level": "deep",
        "category": "reflections",
        "id": 44
    },
    {
        "question": "In moments where you just want to be someone else, who do you try to copy? What is the world is like in their shoes?",
        "level": "deep",
        "category": "reflections",
        "id": 45
    },
    {
        "question": "Have you ever procrastinated on a life choice because you were afraid that other people might judge you?",
        "level": "deep",
        "category": "reflections",
        "id": 46
    },
    {
        "question": "What do you miss about being a kid?",
        "level": "deep",
        "category": "reflections",
        "id": 47
    },
    {
        "question": "Of all the things you've done in your life, what are you most proud of?",
        "level": "deep",
        "category": "reflections",
        "id": 48
    },
    {
        "question": "If your 90 old self were to give you advice right now, what would they say to you?",
        "level": "deep",
        "category": "reflections",
        "id": 49
    },
    {
        "question": "What's something important to you that you never talk about even with your friends?",
        "level": "deep",
        "category": "reflections",
        "id": 50
    },
    {
        "question": "Do you feel like you're still trying to figure out who you are, or do you think you have a good grasp already?",
        "level": "deep",
        "category": "reflections",
        "id": 51
    },
    {
        "question": "In what ways do you think your family background was vital in helping you to become the person you are today?",
        "level": "deep",
        "category": "reflections",
        "id": 52
    },
    {
        "question": "What’s the best thing about your life right now?",
        "level": "deep",
        "category": "reflections",
        "id": 53
    },
    {
        "question": "How are you? Be honest.",
        "level": "deep",
        "category": "reflections",
        "id": 54
    },
    {
        "question": "Have you had a dream that has already come true?",
        "level": "deep",
        "category": "reflections",
        "id": 55
    },
    {
        "question": "What's one regret you already have that you find hard to live with?",
        "level": "deep",
        "category": "reflections",
        "id": 56
    },
    {
        "question": "How would you describe yourself at your worst?",
        "level": "deep",
        "category": "reflections",
        "id": 57
    },
    {
        "question": "Is there anything in your life which should be easy but is still stupidly hard?",
        "level": "deep",
        "category": "reflections",
        "id": 58
    },
    {
        "question": "Do you have any secret desires you don't want anyone to know about? Would you want to know how it would feel to fulfil them?",
        "level": "deep",
        "category": "reflections",
        "id": 59
    },
    {
        "question": "Have you ever had a dream you realised wouldn't have been a good idea to pursue? What brought you to question that dream?",
        "level": "deep",
        "category": "reflections",
        "id": 60
    },
    {
        "question": "What are the top three possessions in your life that give you the most happiness? Tell one story about each.",
        "level": "deep",
        "category": "reflections",
        "id": 61
    },
    {
        "question": "When you are older, what do you think your grandchildren will ask you to tell stories about?",
        "level": "deep",
        "category": "reflections",
        "id": 62
    },
    {
        "question": "What’s the best lesson you’ve learned from a fictional story?",
        "level": "deep",
        "category": "reflections",
        "id": 63
    },
    {
        "question": "What’s the most surprising self-realisation you've learnt in your life so far?",
        "level": "deep",
        "category": "reflections",
        "id": 64
    },
    {
        "question": "What are you most insecure about in your life right now?",
        "level": "deep",
        "category": "reflections",
        "id": 65
    },
    {
        "question": "What is the most important lesson you've never had the chance to learn, but was able to understand vicariously through other people?",
        "level": "deep",
        "category": "reflections",
        "id": 66
    },
    {
        "question": "If your life were chapters in a novel, what would this current chapter be called and how many chapters deep do you think you'd be?",
        "level": "deep",
        "category": "reflections",
        "id": 67
    },
    {
        "question": "What do you believe 'adulting' actually means? How do you define a mature adult?",
        "level": "deep",
        "category": "reflections",
        "id": 68
    },
    {
        "question": "If every occupation earnt you the same amount of money, would you choose to do anything different to what you're doing now? ",
        "level": "deep",
        "category": "reflections",
        "id": 69
    },
    {
        "question": "What are your values today? Do you think your values would've been radically different had something changed earlier in your life?",
        "level": "deep",
        "category": "reflections",
        "id": 70
    },
    {
        "question": "If someone asked you whether you were happy a year ago, how would you respond?",
        "level": "deep",
        "category": "reflections",
        "id": 71
    },
    {
        "question": "What is the hardest part about being yourself?",
        "level": "deep",
        "category": "reflections",
        "id": 72
    },
    {
        "question": "Do you miss your old self?",
        "level": "deep",
        "category": "reflections",
        "id": 73
    },
    {
        "question": "What's your biggest fear? Has it ever come true?",
        "level": "deep",
        "category": "reflections",
        "id": 74
    },
    {
        "question": "What's the worst pain you've ever experienced?",
        "level": "deep",
        "category": "reflections",
        "id": 75
    },
    {
        "question": "Every day we make our lives harder by learning something new, helping out a friend or pushing ourselves towards new goals. Talk about one struggle you've chosen for yourself that makes your life rewarding.",
        "level": "deep",
        "category": "reflections",
        "id": 76
    },
    {
        "question": "Is there anything in your life you think you're doing really well at?",
        "level": "deep",
        "category": "reflections",
        "id": 77
    },
    {
        "question": "What's the most amazing thing about being you?",
        "level": "deep",
        "category": "reflections",
        "id": 78
    },
    {
        "question": "Have you ever been intimidated by a person's appearance, then later found out they were different to who you thought they were?",
        "level": "deep",
        "category": "reflections",
        "id": 79
    },
    {
        "question": "Where in your life do you feel most loved?",
        "level": "deep",
        "category": "reflections",
        "id": 80
    },
    {
        "question": "What has been the most significant learning experience you've had in the last year?",
        "level": "deep",
        "category": "reflections",
        "id": 81
    },
    {
        "question": "Is there anything you're currently doing in your life right now that doesn't matter to you at all?",
        "level": "deep",
        "category": "reflections",
        "id": 82
    },
    {
        "question": "What are the biggest insights you've taken away from university?",
        "level": "deep",
        "category": "reflections",
        "id": 83
    },
    {
        "question": "Were there any times in your life where you struggled to choose between your own internal voice and the expectations of others?",
        "level": "deep",
        "category": "reflections",
        "id": 84
    },
    {
        "question": "How do you think the sum of your experiences have shaped who you are right now?",
        "level": "deep",
        "category": "reflections",
        "id": 85
    },
    {
        "question": "Were there any external formulas you were taught to follow as you were growing up? Have you struggled with any of them?",
        "level": "deep",
        "category": "reflections",
        "id": 86
    },
    {
        "question": "If your internal voice was stronger, what would you be doing right now?",
        "level": "deep",
        "category": "reflections",
        "id": 87
    },
    {
        "question": "Have you had any experiences that have helped you gain new ways of seeing things?",
        "level": "deep",
        "category": "reflections",
        "id": 88
    },
    {
        "question": "How have you sorted through all of the ideas you’ve encountered in your life about what to believe?",
        "level": "deep",
        "category": "reflections",
        "id": 89
    },
    {
        "question": "What is your internal process like when you're making an important life decision?",
        "level": "deep",
        "category": "reflections",
        "id": 90
    },
    {
        "question": "If someone had to figure out your personality by the friends you’ve chosen, would they be able to?",
        "level": "deep",
        "category": "relationships",
        "id": 91
    },
    {
        "question": "If you had to describe the single worst thing a friend could do, what would it be?",
        "level": "deep",
        "category": "relationships",
        "id": 92
    },
    {
        "question": "Have you ever worked with someone you didn't get along with but ultimately made you grow? Would you have felt greater respect if you knew the lesson they were trying to teach you?",
        "level": "deep",
        "category": "relationships",
        "id": 93
    },
    {
        "question": "Have you ever wanted to kiss someone you were just friends with? What was it that made you feel that way?",
        "level": "deep",
        "category": "relationships",
        "id": 94
    },
    {
        "question": "What do you consider cheating in a partner? Is there anything you wouldn't call cheating that you think others would?",
        "level": "deep",
        "category": "relationships",
        "id": 95
    },
    {
        "question": "Do you have many friends of the opposite sex? What is it about those relationships that you can't find through friends of your own gender?",
        "level": "deep",
        "category": "relationships",
        "id": 96
    },
    {
        "question": "Have you ever unintentionally bullied someone? Do you ever wish they knew your true intentions at the time?",
        "level": "deep",
        "category": "relationships",
        "id": 97
    },
    {
        "question": "When was the last time you had to break someone's heart?",
        "level": "deep",
        "category": "relationships",
        "id": 98
    },
    {
        "question": "If you could spend a week in the body of one of your friends or family, who would it be? What would you want to know about their experience of the world?",
        "level": "deep",
        "category": "relationships",
        "id": 99
    },
    {
        "question": "If a very close friend learned she had only 6 months to live, would you give up a well-paying job in order to spend more time with her? If so, what would you do before she goes?",
        "level": "deep",
        "category": "relationships",
        "id": 100
    },
    {
        "question": "If forced to choose, would you rather do what's right at the cost of making a close friend angry, or compromise but feel as though you're sucking up to their wishes?",
        "level": "deep",
        "category": "relationships",
        "id": 101
    },
    {
        "question": "If you could let someone know your every thought and feeling for a week, who would you be willing to open up to so completely? Do you think they’d change their opinion about you in the end?",
        "level": "deep",
        "category": "relationships",
        "id": 102
    },
    {
        "question": "If your funeral was tomorrow, who would speak at the eulogy and what would they say if they were sworn to an oath of honesty?",
        "level": "deep",
        "category": "relationships",
        "id": 103
    },
    {
        "question": "If your friends and acquaintances were willing to tell you what they honestly thought, what do you think they might say?",
        "level": "deep",
        "category": "relationships",
        "id": 104
    },
    {
        "question": "Imagine you were shown a review of how you influenced every person you crossed paths with in your life. Pick one person who would've been completely different had you never been alive.",
        "level": "deep",
        "category": "relationships",
        "id": 105
    },
    {
        "question": "Has there been a time where you felt terribly alone? What do you wish people could say to you if they understood what was happening?",
        "level": "deep",
        "category": "relationships",
        "id": 106
    },
    {
        "question": "When was the last time you hurt someone, and was it accidentally or on purpose?",
        "level": "deep",
        "category": "relationships",
        "id": 107
    },
    {
        "question": "Have you ever felt like a burden towards your parents?",
        "level": "deep",
        "category": "relationships",
        "id": 108
    },
    {
        "question": "Tell me about a time where you were so embarrassed, you wished you could disappear.",
        "level": "deep",
        "category": "relationships",
        "id": 109
    },
    {
        "question": "Who is the one person in the world who knows you the best? What do they know that other people don't?",
        "level": "deep",
        "category": "relationships",
        "id": 110
    },
    {
        "question": "Have you ever been in a relationship where your connection with the other person didn't feel genuine or real?",
        "level": "deep",
        "category": "relationships",
        "id": 111
    },
    {
        "question": "Do you hope to grow up to be more like your mother or your father?",
        "level": "deep",
        "category": "relationships",
        "id": 112
    },
    {
        "question": "Is there anything you do when you need attention from other people?",
        "level": "deep",
        "category": "relationships",
        "id": 113
    },
    {
        "question": "What's one thing people assume about you that you wish wasn't true?",
        "level": "deep",
        "category": "relationships",
        "id": 114
    },
    {
        "question": "If people knew how you entertained yourself when you were alone, would they find you weird?",
        "level": "deep",
        "category": "relationships",
        "id": 115
    },
    {
        "question": "If nothing in this world made you happy anymore, who in your life would feel the most loss?",
        "level": "deep",
        "category": "relationships",
        "id": 116
    },
    {
        "question": "Of the friends you no longer talk to, who do you miss the most? Do you wish you could talk to them again?",
        "level": "deep",
        "category": "relationships",
        "id": 117
    },
    {
        "question": "If you were to die tonight without saying any last words to your friends and family, what would you regret not having said?",
        "level": "deep",
        "category": "relationships",
        "id": 118
    },
    {
        "question": "If you were going to become a close friend of the person you’re with, share what would be important for her or him to know.",
        "level": "deep",
        "category": "relationships",
        "id": 119
    },
    {
        "question": "If someone you loved was killed in a car crash, but was then copied perfectly with every memory they had intact, would you think of them as the same person and would you love them just as much?",
        "level": "deep",
        "category": "relationships",
        "id": 120
    },
    {
        "question": "Who in your life do you wish you'd met sooner?",
        "level": "deep",
        "category": "relationships",
        "id": 121
    },
    {
        "question": "Who in your life reminds you to look at the big picture?",
        "level": "deep",
        "category": "relationships",
        "id": 122
    },
    {
        "question": "What do you like about the other person in this conversation with you?",
        "level": "deep",
        "category": "relationships",
        "id": 123
    },
    {
        "question": "If you met one of your closest friends five years ago, do you think their core self would have changed or stayed the same?",
        "level": "deep",
        "category": "relationships",
        "id": 124
    },
    {
        "question": "How hard do you think it is to love you? Would you warn people against it?",
        "level": "deep",
        "category": "relationships",
        "id": 125
    },
    {
        "question": "Growing up, did you find it easier to respect or disrespect your parents? What was your relationship like?",
        "level": "deep",
        "category": "relationships",
        "id": 126
    },
    {
        "question": "If you and your best friend were writing a movie about yourselves, what would be the main narrative arc? Who would be the side-characters? What songs would be in the soundtrack?",
        "level": "deep",
        "category": "relationships",
        "id": 127
    },
    {
        "question": "Who have been the key figures in your life that have made the biggest impact on you so far?",
        "level": "deep",
        "category": "relationships",
        "id": 128
    },
    {
        "question": "If you could read everyone’s minds for one week and knew exactly what their true intentions were, do you think you would be horrified or surprised?",
        "level": "deep",
        "category": "relationships",
        "id": 129
    },
    {
        "question": "What do you think people say about you behind your back?",
        "level": "deep",
        "category": "relationships",
        "id": 130
    },
    {
        "question": "Of all of your friends, whose death would you find most disturbing?",
        "level": "deep",
        "category": "relationships",
        "id": 131
    },
    {
        "question": "What's a good sign you know you can trust someone?",
        "level": "deep",
        "category": "relationships",
        "id": 132
    },
    {
        "question": "What's three non-physical things that make a person attractive to you?",
        "level": "deep",
        "category": "relationships",
        "id": 133
    },
    {
        "question": "What would you do if your teenage daughter was using soft drugs? How would you react?",
        "level": "deep",
        "category": "relationships",
        "id": 134
    },
    {
        "question": "What's one thing you want your friends or loved ones to be better at than you are?",
        "level": "deep",
        "category": "relationships",
        "id": 135
    },
    {
        "question": "What's one thing you want people to remember about you?",
        "level": "deep",
        "category": "relationships",
        "id": 136
    },
    {
        "question": "What do you wish you understood about your parents, that you never fully understood by asking them?",
        "level": "deep",
        "category": "relationships",
        "id": 137
    },
    {
        "question": "Do you think some people feel peer pressure more strongly than others? How do you think this changes what they do in life?",
        "level": "deep",
        "category": "relationships",
        "id": 138
    },
    {
        "question": "Have there been moments where you felt you didn't have close friends at all?",
        "level": "deep",
        "category": "relationships",
        "id": 139
    },
    {
        "question": "Do you have a hidden self that's unknown even to your friends and family?",
        "level": "deep",
        "category": "relationships",
        "id": 140
    },
    {
        "question": "What are some signs that a person is secretly unhappy?",
        "level": "deep",
        "category": "relationships",
        "id": 141
    },
    {
        "question": "What do you think's the difference between how you appear to others, and who you think you are in your head?",
        "level": "deep",
        "category": "relationships",
        "id": 142
    },
    {
        "question": "What do you love most about your best friend?",
        "level": "deep",
        "category": "relationships",
        "id": 143
    },
    {
        "question": "If you could, who in your life would you want to make more happy?",
        "level": "deep",
        "category": "relationships",
        "id": 144
    },
    {
        "question": "If you were to write a birthday card to one of your best friends, what would you tell them?",
        "level": "deep",
        "category": "relationships",
        "id": 145
    },
    {
        "question": "Complete the sentence: I really wish other people knew that...",
        "level": "deep",
        "category": "relationships",
        "id": 146
    },
    {
        "question": "Would you rather be the CEO of a company but have your children grow up directionless due to your parenting, or have a great group of family and friends but be uninspired for most of your work life?",
        "level": "deep",
        "category": "worldview",
        "id": 147
    },
    {
        "question": "At the end of your life, would you rather have lots of stories to tell but have messed up countless times along the way, or have very few stories but know you made a lot of smart decisions?",
        "level": "deep",
        "category": "worldview",
        "id": 148
    },
    {
        "question": "Do you think everyone at your age has seen the worst of themselves by now? ",
        "level": "deep",
        "category": "worldview",
        "id": 149
    },
    {
        "question": "If you could live forever, would you rather have a partner who was older and world-wise, or someone who was seeing things for the first time? Why?",
        "level": "deep",
        "category": "worldview",
        "id": 150
    },
    {
        "question": "Have you ever watched a scene from a movie that made you cry or change your outlook on life? What made that scene hit you so hard?",
        "level": "deep",
        "category": "worldview",
        "id": 151
    },
    {
        "question": "If you could remove the vast majority of pain and suffering from the world but couldn't remove it all, what types of pain would you continue to allow?",
        "level": "deep",
        "category": "worldview",
        "id": 152
    },
    {
        "question": "Do you think it's harder to get suicidal thoughts when you're older? ",
        "level": "deep",
        "category": "worldview",
        "id": 153
    },
    {
        "question": "If you had to give a commencement speech, what would you tell the graduates?",
        "level": "deep",
        "category": "worldview",
        "id": 154
    },
    {
        "question": "If you had to write a book, what would be the overarching theme?",
        "level": "deep",
        "category": "worldview",
        "id": 155
    },
    {
        "question": "What's one book you think everyone of your personality type should read?",
        "level": "deep",
        "category": "worldview",
        "id": 156
    },
    {
        "question": "Do you think everything in this world happens for a deeper reason, that we can never know?",
        "level": "deep",
        "category": "worldview",
        "id": 157
    },
    {
        "question": "Your house containing everything you own catches fire. After saving your loved ones and pets you have time to make one final dash to save one item. What would it be? Why?",
        "level": "deep",
        "category": "worldview",
        "id": 158
    },
    {
        "question": "Do you think it's possible to live a normal life and never tell a lie?",
        "level": "deep",
        "category": "worldview",
        "id": 159
    },
    {
        "question": "What life-altering things should every human get to experience at least once in their lifetimes?",
        "level": "deep",
        "category": "worldview",
        "id": 160
    },
    {
        "question": "What's something you're certain you'll never experience in your lifetime?",
        "level": "deep",
        "category": "worldview",
        "id": 161
    },
    {
        "question": "Do you feel it's more important in life to constantly expand your horizons, or to be okay with what you have and settle down when the time is right?",
        "level": "deep",
        "category": "worldview",
        "id": 162
    },
    {
        "question": "Do you believe that people are born a blank slate and become corrupted over time? If so, what do we do knowing we can't erase what we have learnt?",
        "level": "deep",
        "category": "worldview",
        "id": 163
    },
    {
        "question": "Do you think seeking truth is a way of life, or a phase people go through when growing up?",
        "level": "deep",
        "category": "worldview",
        "id": 164
    },
    {
        "question": "What's one thing you know for certain?",
        "level": "deep",
        "category": "worldview",
        "id": 165
    },
    {
        "question": "Do you believe that ignoring society is the best way to find your true self?",
        "level": "deep",
        "category": "worldview",
        "id": 166
    },
    {
        "question": "What did you fear most about becoming an adult? Did that fear come true?",
        "level": "deep",
        "category": "worldview",
        "id": 167
    },
    {
        "question": "Do you like the idea of moving some place new, knowing you have to leave your friends and family in the process? If not, what would it take for you to want to move?",
        "level": "deep",
        "category": "worldview",
        "id": 168
    },
    {
        "question": "Would you prefer to work on projects you love until you die, or save up for retirement? Do you ever feel like you could stop working?",
        "level": "deep",
        "category": "worldview",
        "id": 169
    },
    {
        "question": "Would you still have children if you were diagnosed with Huntington's disease? How would the knowledge that you might not survive another ten years, change your approach to life?",
        "level": "deep",
        "category": "worldview",
        "id": 170
    },
    {
        "question": "Do you think it's possible to live a life without any regrets? If not, what type of regrets would you be okay with?",
        "level": "deep",
        "category": "worldview",
        "id": 171
    },
    {
        "question": "How would you feel if you found yourself way more successful emotionally, financially and career-wise than you expected you'd be?",
        "level": "deep",
        "category": "worldview",
        "id": 172
    },
    {
        "question": "What book, film or piece of art best represents your philosophy on life?",
        "level": "deep",
        "category": "worldview",
        "id": 173
    },
    {
        "question": "Is there anything that makes you believe the world can be a better place? How do you persist in this belief when times are tough?",
        "level": "deep",
        "category": "worldview",
        "id": 174
    },
    {
        "question": "Is there anything you see about the world you think not many people understand?",
        "level": "deep",
        "category": "worldview",
        "id": 175
    },
    {
        "question": "What idea do you strongly suspect is true but have no proof of?",
        "level": "deep",
        "category": "worldview",
        "id": 176
    },
    {
        "question": "If you could have everything your heart desired, would you be happy?",
        "level": "deep",
        "category": "worldview",
        "id": 177
    },
    {
        "question": "What's the biggest question you have about the future?",
        "level": "deep",
        "category": "worldview",
        "id": 178
    },
    {
        "question": "Would you rather lose your memories from birth to now, or lose your ability to make new long-term memories?",
        "level": "deep",
        "category": "worldview",
        "id": 179
    },
    {
        "question": "Which fields in the arts or sciences are most influential to you in the way you think?",
        "level": "deep",
        "category": "worldview",
        "id": 180
    },
    {
        "question": "What kinds of experiences do you think always improves the people who undergo them?",
        "level": "deep",
        "category": "worldview",
        "id": 181
    },
    {
        "question": "When good people do things that turn out badly, or have unintended harmful results, does this make them less good or less moral? Why?",
        "level": "deep",
        "category": "worldview",
        "id": 182
    },
    {
        "question": "Do you think technology on the whole, has helped us become better human beings?",
        "level": "deep",
        "category": "worldview",
        "id": 183
    },
    {
        "question": "Most universities think that making students question their beliefs is a good thing. At what point do you believe questioning one's own beliefs becomes counterproductive?",
        "level": "deep",
        "category": "worldview",
        "id": 184
    },
    {
        "question": "What's one thing you want to learn more about, but haven't been able to yet?",
        "level": "light",
        "category": "aspirations",
        "id": 185
    },
    {
        "question": "What's something you want to do in the coming year that you've never done before?",
        "level": "light",
        "category": "aspirations",
        "id": 186
    },
    {
        "question": "If school was free and grades were non-existent, what classes would you take?",
        "level": "light",
        "category": "aspirations",
        "id": 187
    },
    {
        "question": "What are some things happening your life that you're really excited about, or looking forward to? ",
        "level": "light",
        "category": "aspirations",
        "id": 188
    },
    {
        "question": "What is one thing you can't go a day without doing?",
        "level": "light",
        "category": "character",
        "id": 189
    },
    {
        "question": "What's one skill you're not naturally good at that you wish you could pick up?",
        "level": "light",
        "category": "character",
        "id": 190
    },
    {
        "question": "What colour best represents who you are?",
        "level": "light",
        "category": "character",
        "id": 191
    },
    {
        "question": "What is the most shallow trait you have?",
        "level": "light",
        "category": "fun",
        "id": 192
    },
    {
        "question": "If you had to change your name, what would your new name be and why? ",
        "level": "light",
        "category": "fun",
        "id": 193
    },
    {
        "question": "What is something that your friends think is 'so you'?",
        "level": "light",
        "category": "fun",
        "id": 194
    },
    {
        "question": "What do you feel least insecure about?",
        "level": "light",
        "category": "character",
        "id": 195
    },
    {
        "question": "Are there any skills or activities you naturally gravitate towards?",
        "level": "light",
        "category": "character",
        "id": 196
    },
    {
        "question": "Is there anything in your life you spend a ridiculous amount of money on?",
        "level": "light",
        "category": "fun",
        "id": 197
    },
    {
        "question": "What was the last thing you bought that was a complete waste of money?",
        "level": "light",
        "category": "fun",
        "id": 198
    },
    {
        "question": "Do you have anything that your brain tries to make you do, that you have to will yourself to avoid doing it?",
        "level": "light",
        "category": "fun",
        "id": 199
    },
    {
        "question": "What are some weird food combinations you really enjoy?",
        "level": "light",
        "category": "fun",
        "id": 200
    },
    {
        "question": "What stereotype do you completely live up to?",
        "level": "light",
        "category": "fun",
        "id": 201
    },
    {
        "question": "What are you like when you're drunk?",
        "level": "light",
        "category": "fun",
        "id": 202
    },
    {
        "question": "What are the most interesting apps you use?",
        "level": "light",
        "category": "fun",
        "id": 203
    },
    {
        "question": "What would you do if you were the opposite gender for a month?",
        "level": "light",
        "category": "fun",
        "id": 204
    },
    {
        "question": "What's the most unique way you can think of to celebrate your own birthday?",
        "level": "light",
        "category": "fun",
        "id": 205
    },
    {
        "question": "How seriously do you take horoscopes?",
        "level": "light",
        "category": "fun",
        "id": 206
    },
    {
        "question": "What's the one law you'd love to break if there were no consequences to breaking it?",
        "level": "light",
        "category": "fun",
        "id": 207
    },
    {
        "question": "What subject do you know a surprising amount about, yet never studied in university?",
        "level": "light",
        "category": "fun",
        "id": 208
    },
    {
        "question": "What's the real story behind the last Instagram picture you posted?",
        "level": "light",
        "category": "fun",
        "id": 209
    },
    {
        "question": "What songs do you end up playing during long drives?",
        "level": "light",
        "category": "fun",
        "id": 210
    },
    {
        "question": "Which season do you look forward to the most?",
        "level": "light",
        "category": "fun",
        "id": 211
    },
    {
        "question": "What was the worst haircut you've ever gotten?",
        "level": "light",
        "category": "fun",
        "id": 212
    },
    {
        "question": "What's your favourite breakfast cereal?",
        "level": "light",
        "category": "fun",
        "id": 213
    },
    {
        "question": "Do you collect anything?",
        "level": "light",
        "category": "fun",
        "id": 214
    },
    {
        "question": "What was the first thing you bought with your own money?",
        "level": "light",
        "category": "fun",
        "id": 215
    },
    {
        "question": "What's one vice you know you should stop doing but don't want to?",
        "level": "light",
        "category": "fun",
        "id": 216
    },
    {
        "question": "What food do you love eating from your parents?",
        "level": "light",
        "category": "fun",
        "id": 217
    },
    {
        "question": "If you were a pizza topping what would you be and why?",
        "level": "light",
        "category": "fun",
        "id": 218
    },
    {
        "question": "How do you like your eggs?",
        "level": "light",
        "category": "fun",
        "id": 219
    },
    {
        "question": "Were you much of a gamer when you were younger? If so, what were your favourite games and what made you want to play them? ",
        "level": "light",
        "category": "fun",
        "id": 220
    },
    {
        "question": "What’s the most illegal thing you’ve done up until this point?",
        "level": "light",
        "category": "fun",
        "id": 221
    },
    {
        "question": "If all drugs were decriminalised, what would you do?",
        "level": "light",
        "category": "fun",
        "id": 222
    },
    {
        "question": "Would you rather never lose your wallet or your phone?",
        "level": "light",
        "category": "fun",
        "id": 223
    },
    {
        "question": "What's the worst pickup line you can think of?",
        "level": "light",
        "category": "fun",
        "id": 224
    },
    {
        "question": "What was it like to work at your first job?",
        "level": "light",
        "category": "fun",
        "id": 225
    },
    {
        "question": "Have you ever had déjà vu or an out of body experience? ",
        "level": "light",
        "category": "past",
        "id": 226
    },
    {
        "question": "What's the most expensive thing you've broken?",
        "level": "light",
        "category": "fun",
        "id": 227
    },
    {
        "question": "Name one supposedly bad quality you wouldn’t mind in a partner.",
        "level": "light",
        "category": "relationships",
        "id": 228
    },
    {
        "question": "How do people find out you have a crush on them?",
        "level": "light",
        "category": "relationships",
        "id": 229
    },
    {
        "question": "What is your favourite gift that you've ever given someone, and what gift have you received is your favourite?",
        "level": "light",
        "category": "relationships",
        "id": 230
    },
    {
        "question": "If you could learn a musical instrument, which one would you choose and what would you play? ",
        "level": "light",
        "category": "fun",
        "id": 231
    },
    {
        "question": "Would you prefer to live somewhere busy like New York City or somewhere quiet like Portland, Oregon?",
        "level": "light",
        "category": "fun",
        "id": 232
    },
    {
        "question": "What are the things about your own sex that confuse you the most?",
        "level": "light",
        "category": "fun",
        "id": 233
    },
    {
        "question": "What’s something horrible that everyone should try at least once?",
        "level": "light",
        "category": "fun",
        "id": 234
    },
    {
        "question": "If the world stopped for an hour and you were the only one who could move, what would you do?",
        "level": "light",
        "category": "fun",
        "id": 235
    },
    {
        "question": "What do you think is one benefit of getting older?",
        "level": "light",
        "category": "worldview",
        "id": 236
    },
    {
        "question": "What age do you think is the prime of your life?",
        "level": "light",
        "category": "worldview",
        "id": 237
    },
    {
        "question": "Would you prefer a wild, turbulent life filled with joy, sorrow, intoxicating success and loss; or a happy, secure, predictable life without wide swings of fortune?",
        "level": "medium",
        "category": "aspirations",
        "id": 238
    },
    {
        "question": "Is there an end goal you wish for, which would make all the work you've done in your life worth it?",
        "level": "medium",
        "category": "aspirations",
        "id": 239
    },
    {
        "question": "If you were to give one piece of advice to your teenage self, what would it be?",
        "level": "medium",
        "category": "aspirations",
        "id": 240
    },
    {
        "question": "What do you think are some of the investments you could make today both emotionally and financially, that will improve your life over the next 20 years?",
        "level": "medium",
        "category": "aspirations",
        "id": 241
    },
    {
        "question": "What are some of the ways you wish to make other people's lives better?",
        "level": "medium",
        "category": "aspirations",
        "id": 242
    },
    {
        "question": "What is one thing people misunderstand about you?",
        "level": "medium",
        "category": "character",
        "id": 243
    },
    {
        "question": "Do you think you're the type of person that changes depending on the situation, or stays relatively the same? What do you think about people who are the opposite to you?",
        "level": "medium",
        "category": "character",
        "id": 244
    },
    {
        "question": "What do you imagine your hobbies will be when you're 65? Will they be any different to what they are now? ",
        "level": "medium",
        "category": "character",
        "id": 245
    },
    {
        "question": "If you could gain one quality you admire in another person, what would you choose? Do you think you could develop that quality just by working at it?",
        "level": "medium",
        "category": "character",
        "id": 246
    },
    {
        "question": "Would you rather devote yourself to a single career for the next twenty years, or prefer to zig-zag through many different career paths? Do you think you can be successful irrespective of which you choose?",
        "level": "medium",
        "category": "character",
        "id": 247
    },
    {
        "question": "If you had to talk your friends and colleagues using only one of the following—phone, text, email, or social media—which would you choose and how would it change your relationships?",
        "level": "medium",
        "category": "character",
        "id": 248
    },
    {
        "question": "What decade and genre of music feels most like you?",
        "level": "medium",
        "category": "character",
        "id": 249
    },
    {
        "question": "What's one thing you think makes you unique from other people?",
        "level": "medium",
        "category": "character",
        "id": 250
    },
    {
        "question": "What's one song that describes who you are to your core?",
        "level": "medium",
        "category": "character",
        "id": 251
    },
    {
        "question": "Do you trust your head or your heart more?",
        "level": "medium",
        "category": "character",
        "id": 252
    },
    {
        "question": "What's one thing you do easily that most of your friends find very hard?",
        "level": "medium",
        "category": "character",
        "id": 253
    },
    {
        "question": "Think about the one or two things you're great at. Do you think they are learned skills or does it require some deeper understanding that you can't simply learn?",
        "level": "medium",
        "category": "character",
        "id": 254
    },
    {
        "question": "What can you talk about for hours?",
        "level": "medium",
        "category": "character",
        "id": 255
    },
    {
        "question": "What is the most normal thing about you?",
        "level": "medium",
        "category": "character",
        "id": 256
    },
    {
        "question": "What type of art can you always appreciate from others but never see yourself doing? ",
        "level": "medium",
        "category": "character",
        "id": 257
    },
    {
        "question": "When you go to a new place, would you prefer to plan every last detail or be free to wander around with no set schedule? Is one more natural to you than the other?",
        "level": "medium",
        "category": "character",
        "id": 258
    },
    {
        "question": "What do you think your true mental age is?",
        "level": "medium",
        "category": "character",
        "id": 259
    },
    {
        "question": "Name three things that reliably stress you out.",
        "level": "medium",
        "category": "character",
        "id": 260
    },
    {
        "question": "If you had to figure out whether a person thought about the world in a similar way to you, what characteristics would you look out for?",
        "level": "medium",
        "category": "character",
        "id": 261
    },
    {
        "question": "What do you really, really like doing?",
        "level": "medium",
        "category": "character",
        "id": 262
    },
    {
        "question": "Are you the type of person who likes to set concrete goals, create a long-term vision or only plan when strictly necessary to? How did you arrive at this process?",
        "level": "medium",
        "category": "character",
        "id": 263
    },
    {
        "question": "What would a mirror opposite of yourself be like?",
        "level": "medium",
        "category": "character",
        "id": 264
    },
    {
        "question": "Do you have a vivid imagination? If so, what do you think up?",
        "level": "medium",
        "category": "character",
        "id": 265
    },
    {
        "question": "Would you rather have low self-esteem, or have too much?",
        "level": "medium",
        "category": "character",
        "id": 266
    },
    {
        "question": "What do you think you're really good at?",
        "level": "medium",
        "category": "character",
        "id": 267
    },
    {
        "question": "Do you think you're going to become younger or older in spirit as you age?",
        "level": "medium",
        "category": "character",
        "id": 268
    },
    {
        "question": "If you were given a chance to go either tour the solar system or visit 20 different countries, which one you choose and why?",
        "level": "medium",
        "category": "fun",
        "id": 269
    },
    {
        "question": "What was your favourite university or high school class?",
        "level": "medium",
        "category": "fun",
        "id": 270
    },
    {
        "question": "How would you feel if you found out you had secret admirers?",
        "level": "medium",
        "category": "fun",
        "id": 271
    },
    {
        "question": "What is on your list of things you never want to do again?",
        "level": "medium",
        "category": "fun",
        "id": 272
    },
    {
        "question": "When was the last time you got burnt out? What circumstances pushed you to the edge?",
        "level": "medium",
        "category": "past",
        "id": 273
    },
    {
        "question": "Describe some of the music phases you went through when you were younger. Did your taste change depending on which period you were at in your life?",
        "level": "medium",
        "category": "past",
        "id": 274
    },
    {
        "question": "Was there something you've done which didn't look like it was a great investment of your time but turned out to be very important later on?",
        "level": "medium",
        "category": "past",
        "id": 275
    },
    {
        "question": "How did you decide on your major? What did you feel about the alternatives?",
        "level": "medium",
        "category": "past",
        "id": 276
    },
    {
        "question": "Have you ever experienced anything you thought was going to be amazing but turned out to be completely underwhelming?",
        "level": "medium",
        "category": "past",
        "id": 277
    },
    {
        "question": "If any of your memories could be made into a short film, what would it be?",
        "level": "medium",
        "category": "past",
        "id": 278
    },
    {
        "question": "Did you ever keep a journal? If so, what do you think you'll say about yourself when you're looking over it later in life?",
        "level": "medium",
        "category": "reflections",
        "id": 279
    },
    {
        "question": "What do you think about when you're by yourself? Are there particular people or ideas you come back to again and again?",
        "level": "medium",
        "category": "reflections",
        "id": 280
    },
    {
        "question": "Have you ever made a mistake in the past that despite knowing what you know now, you would go back and repeat?",
        "level": "medium",
        "category": "reflections",
        "id": 281
    },
    {
        "question": "What are the three feelings you feel the most in your day to day life?",
        "level": "medium",
        "category": "reflections",
        "id": 282
    },
    {
        "question": "What do you do if you know you're being irrationally jealous about someone else's success?",
        "level": "medium",
        "category": "reflections",
        "id": 283
    },
    {
        "question": "What's something you used to struggle with, but don't anymore?",
        "level": "medium",
        "category": "reflections",
        "id": 284
    },
    {
        "question": "What's some advice you've gotten that you should not have followed? ",
        "level": "medium",
        "category": "reflections",
        "id": 285
    },
    {
        "question": "How did you spend most of your free time as a child? What kinds of activities did you like to do by yourself, with friends or parents? ",
        "level": "medium",
        "category": "reflections",
        "id": 286
    },
    {
        "question": "If you could answer the question: 'what would you do?' in any way possible, what would you say?",
        "level": "medium",
        "category": "reflections",
        "id": 287
    },
    {
        "question": "When did you first realise you were no longer a teenager?",
        "level": "medium",
        "category": "reflections",
        "id": 288
    },
    {
        "question": "Describe your life today in one sentence.",
        "level": "medium",
        "category": "reflections",
        "id": 289
    },
    {
        "question": "What do you do when you feel the need to procrastinate?",
        "level": "medium",
        "category": "reflections",
        "id": 290
    },
    {
        "question": "What are the differences in the world today from when you were a child?",
        "level": "medium",
        "category": "reflections",
        "id": 291
    },
    {
        "question": "Have you done anything stupid that you couldn't help but keep doing again and again?",
        "level": "medium",
        "category": "reflections",
        "id": 292
    },
    {
        "question": "If your life was a movie, what would it be its name and genre?",
        "level": "medium",
        "category": "reflections",
        "id": 293
    },
    {
        "question": "What did you think you'd grow out of but haven’t yet?",
        "level": "medium",
        "category": "reflections",
        "id": 294
    },
    {
        "question": "Complete the sentence: Life would be boring if I...",
        "level": "medium",
        "category": "reflections",
        "id": 295
    },
    {
        "question": "What's one thing you wished you knew about university before going?",
        "level": "medium",
        "category": "reflections",
        "id": 296
    },
    {
        "question": "How do you think your gender has influenced the way you see the world?",
        "level": "medium",
        "category": "reflections",
        "id": 297
    },
    {
        "question": "What are some of the most meaningless things you've done in your lifetime?",
        "level": "medium",
        "category": "reflections",
        "id": 298
    },
    {
        "question": "How do you come up with your most interesting ideas? Where do they come from?",
        "level": "medium",
        "category": "reflections",
        "id": 299
    },
    {
        "question": "What have been some of the best investments of your time, money and energy that are just beginning to pay off today?",
        "level": "medium",
        "category": "reflections",
        "id": 300
    },
    {
        "question": "Do you ever stay friends with your exes?",
        "level": "medium",
        "category": "relationships",
        "id": 301
    },
    {
        "question": "Which parent are you closer to? Has that changed over time?",
        "level": "medium",
        "category": "relationships",
        "id": 302
    },
    {
        "question": "Have you ever had a date go past 1AM? ",
        "level": "medium",
        "category": "relationships",
        "id": 303
    },
    {
        "question": "Have you ever secretly lusted after someone without that person knowing?",
        "level": "medium",
        "category": "relationships",
        "id": 304
    },
    {
        "question": "Have you ever dropped subtle hints to someone you liked hoping they would pick up on it?",
        "level": "medium",
        "category": "relationships",
        "id": 305
    },
    {
        "question": "What is the sweetest birthday card or gift you've given?",
        "level": "medium",
        "category": "relationships",
        "id": 306
    },
    {
        "question": "What's the best compliment your friends could ever say to you?",
        "level": "medium",
        "category": "relationships",
        "id": 307
    },
    {
        "question": "What do you think are the signs that you're in a relationship that's right for you?",
        "level": "medium",
        "category": "relationships",
        "id": 308
    },
    {
        "question": "Do you find that love tends to rush at the beginning of a relationship or does it grow over time? Has your experience been different with different people?",
        "level": "medium",
        "category": "relationships",
        "id": 309
    },
    {
        "question": "What is something you wish people knew more about you?",
        "level": "medium",
        "category": "relationships",
        "id": 310
    },
    {
        "question": "What is the one compliment people always seem to give you?",
        "level": "medium",
        "category": "relationships",
        "id": 311
    },
    {
        "question": "What is the kindest thing another person has done for you?",
        "level": "medium",
        "category": "relationships",
        "id": 312
    },
    {
        "question": "What kind of people do you feel the most uncomfortable around? Are there any who would feel a similar way around you?",
        "level": "medium",
        "category": "relationships",
        "id": 313
    },
    {
        "question": "What's your limit for touching between platonic friends?",
        "level": "medium",
        "category": "relationships",
        "id": 314
    },
    {
        "question": "What's the youngest age that you think people can hold a real romantic relationship?",
        "level": "medium",
        "category": "relationships",
        "id": 315
    },
    {
        "question": "Do you talk to your male friends differently to your female friends? How?",
        "level": "medium",
        "category": "relationships",
        "id": 316
    },
    {
        "question": "What was the story behind your first kiss?",
        "level": "medium",
        "category": "relationships",
        "id": 317
    },
    {
        "question": "Are there any personalities or well-known people you look up to for guidance?",
        "level": "medium",
        "category": "relationships",
        "id": 318
    },
    {
        "question": "What are the two most important aspects of a relationship for you: deep friendship, romantic love, physical attraction or intellectual capacity? Do you believe you can live without the other two?",
        "level": "medium",
        "category": "relationships",
        "id": 319
    },
    {
        "question": "Which of your friends is most similar to you?",
        "level": "medium",
        "category": "relationships",
        "id": 320
    },
    {
        "question": "What do people tend to come to you about?",
        "level": "medium",
        "category": "relationships",
        "id": 321
    },
    {
        "question": "What's a sign that someone's a genuinely good person?",
        "level": "medium",
        "category": "relationships",
        "id": 322
    },
    {
        "question": "Would you rather have more friends or more time?",
        "level": "medium",
        "category": "relationships",
        "id": 323
    },
    {
        "question": "Is there a friend you're close with today, that you never expected to get close to a few years ago?",
        "level": "medium",
        "category": "relationships",
        "id": 324
    },
    {
        "question": "What's the first thing you notice about a person when you meet them?",
        "level": "medium",
        "category": "relationships",
        "id": 325
    },
    {
        "question": "Are there any small things you do to make your relationships stronger?",
        "level": "medium",
        "category": "relationships",
        "id": 326
    },
    {
        "question": "Do you think we find our identities primarily by copying other people? How much of ourselves do you think we create on our own?",
        "level": "medium",
        "category": "worldview",
        "id": 327
    },
    {
        "question": "Imagine you were getting paid $150,000 at a job you hated. Would you drop two-thirds of that salary if you had a suspicion you'd be laughing everyday at your new job?",
        "level": "medium",
        "category": "worldview",
        "id": 328
    },
    {
        "question": "How do you think you'll evolve in the next three years?",
        "level": "medium",
        "category": "worldview",
        "id": 329
    },
    {
        "question": "Do you believe in karma?",
        "level": "medium",
        "category": "worldview",
        "id": 330
    },
    {
        "question": "What profession do you have the most respect for?",
        "level": "medium",
        "category": "worldview",
        "id": 331
    },
    {
        "question": "How do you think you would be different if the internet was never invented? ",
        "level": "medium",
        "category": "worldview",
        "id": 332
    },
    {
        "question": "If one day you woke up with a restraining order and amnesia of the past month, what would be the most obvious story behind it?",
        "level": "medium",
        "category": "fun",
        "id": 333
    },
    {
        "question": "If someone gave you enough money to start a business with no strings attached, what kind of business would you start and why?",
        "level": "medium",
        "category": "worldview",
        "id": 334
    },
    {
        "question": "If you had to live with as few items as possible, what is one thing you'd keep that wasn't essential for living?",
        "level": "medium",
        "category": "worldview",
        "id": 335
    },
    {
        "question": "What ideas and lifestyles are you more or less tolerant about now than when you were younger?",
        "level": "medium",
        "category": "worldview",
        "id": 336
    },
    {
        "question": "Have you ever picked up a self-help book? If so, what have you tried that has worked for you, and what hasn't?",
        "level": "medium",
        "category": "worldview",
        "id": 337
    },
    {
        "question": "If you had to live your life in the most interesting and creative way possible, what's one thing you would do differently?",
        "level": "medium",
        "category": "worldview",
        "id": 338
    },
    {
        "question": "If you had to teach a class in university, what would it be about? How would taking your course help people?",
        "level": "medium",
        "category": "worldview",
        "id": 339
    },
    {
        "question": "Do you think you need to know your life's purpose when you're young? If not, do you believe you need to have a life's purpose at all?",
        "level": "medium",
        "category": "worldview",
        "id": 340
    },
    {
        "question": "What do you think are the best things to learn within school, and the things you can only learn outside of it?",
        "level": "medium",
        "category": "worldview",
        "id": 341
    },
    {
        "question": "Assume someone in the world right now is jealous of you. What is the most likely thing they're jealous of? Do you think their jealousy has merit?",
        "level": "medium",
        "category": "worldview",
        "id": 342
    },
    {
        "question": "What do you think is a bad way of defining success?",
        "level": "medium",
        "category": "worldview",
        "id": 343
    },
    {
        "question": "If you were a multi-billionaire like Bill Gates, how much money would you leave behind for your kids? Is there an optimal number for you?",
        "level": "medium",
        "category": "worldview",
        "id": 344
    },
    {
        "question": "What are you interested in that most people aren’t?",
        "level": "medium",
        "category": "worldview",
        "id": 345
    },
    {
        "question": "Which of your vices or bad habits would be the hardest to give up?",
        "level": "medium",
        "category": "worldview",
        "id": 346
    },
    {
        "question": "If you could design your own life like a video game, what rules would you program into it?",
        "level": "medium",
        "category": "worldview",
        "id": 347
    },
    {
        "question": "If you were to raise kids today, what would be your policy on mobile use and social media? ",
        "level": "medium",
        "category": "worldview",
        "id": 348
    },
    {
        "question": "If you were to design a school, what three subjects would you suggest as compulsory for all students to take?",
        "level": "medium",
        "category": "worldview",
        "id": 349
    },
    {
        "question": "If you were given a year to do whatever you wanted, what would you do after travelling all over the world?",
        "level": "medium",
        "category": "worldview",
        "id": 350
    },
    {
        "question": "When is 'being yourself' poor advice?",
        "level": "medium",
        "category": "worldview",
        "id": 351
    },
    {
        "question": "If you could implant an idea into every person's mind, what would you choose?",
        "level": "medium",
        "category": "worldview",
        "id": 352
    },
    {
        "question": "What's the worst advice you can give to a 16 year old?",
        "level": "medium",
        "category": "worldview",
        "id": 353
    },
    {
        "question": "Would you rather be unique or normal?",
        "level": "medium",
        "category": "worldview",
        "id": 354
    },
    {
        "question": "What would be the opening sentence of your autobiography?",
        "level": "medium",
        "category": "worldview",
        "id": 355
    },
    {
        "question": "Have you ever sacrificed something in your life to have more freedom?",
        "level": "medium",
        "category": "worldview",
        "id": 356
    },
    {
        "question": "What would your life be like if you could spend less time working?",
        "level": "medium",
        "category": "worldview",
        "id": 357
    },
    {
        "question": "If a businessman, a scientist, and a religious scholar gave you different advice about a problem you currently have, whose advice would you follow?",
        "level": "medium",
        "category": "worldview",
        "id": 358
    },
    {
        "question": "What type of art do you think you have to be the most creative to do?",
        "level": "medium",
        "category": "worldview",
        "id": 359
    }
]
export {questionList};

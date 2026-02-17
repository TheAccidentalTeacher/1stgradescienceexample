import { Lesson } from '../types';

export const unit7Lessons: Lesson[] = [
  {
    id: 'unit-7-lesson-1',
    unitId: '7',
    lessonNumber: 1,
    title: 'Our Amazing Five Senses',
    subtitle: 'How God designed us to explore His creation',
    estimatedTime: '45-60 minutes',
    icon: '👁️',
    heroImage: 'A happy child experiencing all five senses - touching, seeing, hearing, tasting, smelling',
    heroImageStyle: 'cartoon',
    scripture: {
      reference: 'Psalm 139:14',
      text: 'I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well.',
      version: 'ESV'
    },
    objectives: [
      'Identify the five senses: sight, hearing, touch, taste, and smell',
      'Understand that each sense has a special body part',
      'Learn that our senses help us learn about the world',
      'Recognize that God designed our senses perfectly'
    ],
    vocabulary: [
      { word: 'Senses', definition: 'The five ways our body learns about the world around us', emoji: '✨' },
      { word: 'Sight', definition: 'Using our eyes to see', emoji: '👁️' },
      { word: 'Hearing', definition: 'Using our ears to hear sounds', emoji: '👂' },
      { word: 'Touch', definition: 'Using our skin to feel things', emoji: '✋' },
      { word: 'Taste', definition: 'Using our tongue to taste flavors', emoji: '👅' },
      { word: 'Smell', definition: 'Using our nose to smell scents', emoji: '👃' }
    ],
    content: [
      {
        type: 'explanation',
        text: 'God gave you FIVE amazing senses to explore His creation! Your EYES let you see colors, shapes, and everything around you. Your EARS let you hear music, voices, and sounds. Your SKIN lets you feel if something is soft, hard, hot, or cold. Your TONGUE lets you taste yummy flavors. Your NOSE lets you smell flowers, cookies baking, and the world around you!'
      },
      {
        type: 'key-point',
        text: '✨ Big Truth: God designed each sense perfectly! Your eyes work like cameras. Your ears collect sound waves. Your skin has millions of tiny sensors. Your tongue has taste buds. Your nose can detect thousands of smells. You are "fearfully and wonderfully made"!'
      },
      {
        type: 'fun-fact',
        text: 'Your nose can remember about 50,000 different smells! Smell is the strongest sense for memory—certain smells can remind you of places and people from long ago. God designed smell to be connected to memories in your brain!'
      },
      {
        type: 'bible-connection',
        text: 'The Bible says we are "fearfully and wonderfully made" (Psalm 139:14). This means God created us with great care and amazing detail! Our five senses are evidence of God\'s wonderful design. He could have made us with no senses, but He gave us these gifts to enjoy His creation!'
      },
      {
        type: 'explanation',
        text: 'Each sense works with your brain! Your eyes see light and send signals to your brain. Your ears hear sound waves and send signals to your brain. Your skin feels temperature and texture and sends signals. Your tongue tastes flavors and sends signals. Your nose smells scents and sends signals. Your brain puts all this information together so you understand the world!'
      },
      {
        type: 'key-point',
        text: '🧠 Important: Your senses work TOGETHER! When you eat an apple, you SEE the red color, SMELL the fresh scent, FEEL the smooth skin, HEAR the crunch, and TASTE the sweet flavor. All five senses can work at once! This is God\'s amazing design.'
      }
    ],
    activities: [
      {
        title: 'Five Senses Scavenger Hunt',
        description: 'Use all five senses to explore and find something for each one!',
        materials: [
          'Paper divided into 5 sections (one for each sense)',
          'Pencil or crayons',
          'Your whole house or backyard to explore',
          'A grown-up to help you'
        ],
        safetyNotes: [
          'Only taste things you KNOW are safe to eat',
          'Don\'t smell anything dangerous (cleaners, chemicals)',
          'Don\'t touch anything too hot or sharp',
          'Ask before exploring any new areas'
        ],
        steps: [
          'Label each section of your paper: SEE, HEAR, TOUCH, TASTE, SMELL',
          'For SEE: Find something beautiful or colorful. Draw it!',
          'For HEAR: Be very quiet and listen. What do you hear? Bird? Clock? Draw it!',
          'For TOUCH: Find 3 things with different textures (soft, rough, smooth). Draw them!',
          'For TASTE: With permission, taste something sweet, sour, or salty. Draw it!',
          'For SMELL: Find something with a nice smell (flower, soap, cookie). Draw it!',
          'Share your findings with someone',
          'Tell them which sense you liked using the most and why',
          'Thank God for giving you all five senses!'
        ],
        whatYoullDiscover: 'You\'ll discover that you use your senses ALL THE TIME without even thinking about it! God designed them to work automatically. Every sense helps you learn and stay safe. Without senses, the world would be a very different place!',
        imagePrompt: 'A colorful five-section poster with drawings showing sight (rainbow), hearing (bell), touch (teddy bear), taste (apple), smell (flower)'
      },
      {
        title: 'Mystery Box Touch Game',
        description: 'Use only your sense of touch to guess what\'s in the box!',
        materials: [
          'Shoebox or bag',
          'Various safe objects with different textures:',
          '  • Cotton ball (soft)',
          '  • Sandpaper (rough)',
          '  • Ice cube (cold)',
          '  • Rock (hard)',
          '  • Feather (tickly)',
          '  • Toy car (smooth)',
          '  • Pinecone (prickly)',
          'Blindfold or ability to close eyes'
        ],
        safetyNotes: [
          'Only put SAFE objects in the box (nothing sharp or dangerous)',
          'Wash hands before and after',
          'Make sure the person isn\'t afraid of what you put in',
          'Have a grown-up check the objects first'
        ],
        steps: [
          'Have a grown-up put one object in the box',
          'Close your eyes or wear a blindfold',
          'Reach into the box and feel the object',
          'Notice: Is it soft or hard? Smooth or rough? Big or small? Heavy or light?',
          'Try to guess what it is using ONLY touch!',
          'Open your eyes and see if you were correct!',
          'Try all the different objects',
          'Switch roles—you put objects in and someone else guesses!',
          'Talk about: Which things were easy to identify? Which were hard?'
        ],
        whatYoullDiscover: 'You\'ll discover how much your sense of touch can tell you! Your fingertips have lots of nerve endings that send signals to your brain. Even without seeing, you can tell a lot about an object! God designed your skin as an amazing sensor.',
        imagePrompt: 'A child with closed eyes reaching into a decorated mystery box, smiling as they feel an object inside'
      },
      {
        title: 'Taste Test Science',
        description: 'Discover the different types of tastes your tongue can detect!',
        materials: [
          'Small samples of safe foods with different flavors:',
          '  • Sweet (honey, sugar, grape)',
          '  • Salty (pretzel, cracker)',
          '  • Sour (lemon juice—tiny drop!, pickle)',
          '  • Bitter (dark chocolate)',
          '  • Umami/Savory (cheese)',
          'Water to rinse between tastes',
          'Paper to record which you liked best'
        ],
        safetyNotes: [
          'Make sure you\'re not allergic to any test foods',
          'Only use TINY amounts—this isn\'t a meal!',
          'Spit out anything you don\'t like',
          'Wash hands before handling food',
          'Ask a grown-up to help choose and prepare foods'
        ],
        steps: [
          'Have a grown-up set up tiny samples of each flavor type',
          'Try the SWEET sample first. How does it taste?',
          'Draw a happy, medium, or sad face for how much you liked it',
          'Drink water to rinse',
          'Try the SALTY sample. Rate it with a face!',
          'Rinse and continue with SOUR, BITTER, and SAVORY',
          'Which flavor did you like best?',
          'Which did you like least?',
          'Notice: Different parts of your tongue taste different flavors!',
          'Thank God for the sense of taste that makes eating enjoyable!'
        ],
        whatYoullDiscover: 'You\'ll discover that your tongue has about 10,000 taste buds! Each one sends signals to your brain about flavors. God designed taste to help you enjoy food AND to warn you if something is bad to eat. Bitter and sour can mean "don\'t eat this!" Sweet usually means "this has energy!"',
        imagePrompt: 'Five small bowls with different flavored foods and a chart showing happy and sad faces for each taste type'
      }
    ],
    reviewQuestions: [
      {
        question: 'How many senses do we have?',
        options: [
          'Three',
          'Five',
          'Seven',
          'Ten'
        ],
        correctAnswer: 1,
        explanation: 'We have FIVE senses! They are sight (eyes), hearing (ears), touch (skin), taste (tongue), and smell (nose). God gave us five different ways to explore His creation!',
        emoji: '✋'
      },
      {
        question: 'Which body part do you use for the sense of hearing?',
        options: [
          'Eyes',
          'Nose',
          'Ears',
          'Hands'
        ],
        correctAnswer: 2,
        explanation: 'We use our EARS to hear! Our ears collect sound waves from the air and send signals to our brain. God designed ears perfectly to help us hear music, voices, warning sounds, and all the sounds around us.',
        emoji: '👂'
      },
      {
        question: 'About how many different smells can your nose remember?',
        options: [
          'About 100',
          'About 1,000',
          'About 10,000',
          'About 50,000'
        ],
        correctAnswer: 3,
        explanation: 'Your nose can remember about 50,000 different smells! That\'s amazing! Smell is also the strongest sense connected to memory. Certain smells can remind you of people and places. God designed our noses incredibly!',
        emoji: '👃'
      },
      {
        question: 'What does Psalm 139:14 say about how God made us?',
        options: [
          'Quickly and simply',
          'Fearfully and wonderfully',
          'Randomly',
          'Just okay'
        ],
        correctAnswer: 1,
        explanation: 'Psalm 139:14 says we are "fearfully and wonderfully made"! This means God made us with great care, thought, and amazing detail. Our five senses are proof of God\'s wonderful design and love for us!',
        emoji: '✨'
      }
    ],
    prayerPrompt: 'Dear God, thank You for creating me with five amazing senses! Thank You for eyes to see Your beautiful creation, ears to hear music and loved ones, skin to feel hugs, a tongue to taste good food, and a nose to smell flowers. You made me wonderfully! Help me use my senses to learn about You and enjoy the world You made. Amen. 🙏',
    oklahomaStandards: ['1-LS1-1', '1.CS.D.01']
  }
];

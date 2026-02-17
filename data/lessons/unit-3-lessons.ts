import { Lesson } from '../types';

export const unit3Lessons: Lesson[] = [
  {
    id: 'unit-3-lesson-1',
    unitId: '3',
    lessonNumber: 1,
    title: 'Push and Pull Power',
    subtitle: 'How things move when we push or pull them',
    estimatedTime: '45-60 minutes',
    icon: '🚜',
    heroImage: 'A bright yellow excavator and dump truck working together on a construction site',
    heroImageStyle: 'cartoon',
    scripture: {
      reference: 'Psalm 104:24',
      text: 'O LORD, how manifold are your works! In wisdom have you made them all; the earth is full of your creatures.',
      version: 'ESV'
    },
    objectives: [
      'Understand that forces are pushes and pulls that make things move',
      'Discover how heavy construction vehicles use pushing and pulling power',
      'Learn that God designed objects to move in different ways',
      'Recognize that we use pushes and pulls every single day'
    ],
    vocabulary: [
      { word: 'Force', definition: 'A push or a pull that makes something move', emoji: '💪' },
      { word: 'Push', definition: 'When you move something away from you', emoji: '👐' },
      { word: 'Pull', definition: 'When you move something toward you', emoji: '🪝' },
      { word: 'Motion', definition: 'When something moves from one place to another', emoji: '🏃' },
      { word: 'Direction', definition: 'The way something moves (up, down, left, right)', emoji: '➡️' }
    ],
    content: [
      {
        type: 'explanation',
        text: 'When you want to move something, you use a force! A force is just a push or a pull. When you open a door, you PULL it. When you close it, you PUSH it. When a truck moves dirt, it PUSHES the dirt with its blade. When an excavator picks up rocks, it PULLS them up with its bucket!'
      },
      {
        type: 'key-point',
        text: '🚜 Big Truth: Everything that moves needs a force to make it move. Nothing moves by itself! This is one of the rules God built into His creation.'
      },
      {
        type: 'fun-fact',
        text: 'The biggest dump trucks in the world can carry 400 TONS—that\'s as heavy as 100 elephants! They need huge engines to push all that weight up hills. God designed the rules of motion that engineers use to build these amazing machines!'
      },
      {
        type: 'bible-connection',
        text: 'God is the most powerful force in the universe! The Bible tells us that God spoke and the stars moved into place. He holds all things together by His power. Even the strongest bulldozer is nothing compared to God\'s mighty power!'
      },
      {
        type: 'explanation',
        text: 'Construction trucks are perfect examples of pushes and pulls! Bulldozers PUSH dirt and rocks. Excavators PULL dirt up with their buckets and then PUSH it into dump trucks. Dump trucks use gravity (another force God created) to let the dirt slide out the back. Every machine uses forces to do its job!'
      },
      {
        type: 'key-point',
        text: '⚡ Important: The bigger or heavier something is, the more force you need to move it. That\'s why construction trucks have such powerful engines—they need lots of force to push and pull heavy loads!'
      }
    ],
    activities: [
      {
        title: 'Push or Pull Hunt',
        description: 'Go on a hunt around your house to find things you push and things you pull!',
        materials: [
          'Paper and pencil',
          'Two colors of crayons (one for push, one for pull)',
          'A grown-up to walk with you',
          'Your observant eyes!'
        ],
        safetyNotes: [
          'Don\'t push or pull anything heavy without asking a grown-up first',
          'Be gentle when testing doors and drawers',
          'Stay away from hot stoves and dangerous areas'
        ],
        steps: [
          'Fold your paper in half to make two columns',
          'Write "PUSH" at the top of one side and "PULL" at the top of the other',
          'Walk around your house with a grown-up',
          'Look for things you push: doors, buttons, toy cars, light switches',
          'Draw or write those in the PUSH column',
          'Look for things you pull: drawer handles, wagon, door handles, zipper',
          'Draw or write those in the PULL column',
          'Count how many pushes and pulls you found!',
          'Try each one gently to make sure you got it right!'
        ],
        whatYoullDiscover: 'You\'ll discover that we use pushes and pulls ALL THE TIME! Almost everything you do involves forces. God designed our world so we can interact with it using these simple motions!',
        imagePrompt: 'A happy child with a clipboard checking items in a kitchen, drawing pictures of things that push and pull'
      },
      {
        title: 'Toy Truck Force Testing',
        description: 'Test how different surfaces change how hard you need to push toy vehicles!',
        materials: [
          'Toy trucks or cars (2-3 different sizes)',
          'Different surfaces to test: carpet, hardwood floor, grass outside, driveway, towel',
          'Measuring tape or ruler (optional)',
          'Paper to record results'
        ],
        safetyNotes: [
          'Play in safe areas away from stairs',
          'Don\'t throw the trucks',
          'Watch out for breakable things'
        ],
         steps: [
          'Pick your favorite toy truck',
          'Choose your first surface (start with something smooth like a hardwood floor)',
          'Give your truck a push and watch how far it goes',
          'Mark where it stopped or measure the distance',
          'Try the same push on a different surface (like carpet)',
          'Notice: Does it go farther or shorter?',
          'Try all your surfaces and see which one lets the truck go the farthest',
          'Test a bigger truck and a smaller truck—does size matter?',
          'Draw a chart showing which surface was fastest and slowest'
        ],
        whatYoullDiscover: 'You\'ll discover that smooth surfaces (like hardwood) let trucks roll farther with the same push! Rough surfaces (like carpet or grass) have more friction that slows things down. God designed different materials with different properties!',
        imagePrompt: 'A young boy pushing a yellow toy dump truck on different surfaces laid out side by side, comparing distances'
      },
      {
        title: 'Build a Push-Pull Machine',
        description: 'Create your own simple machine that uses pushes and pulls!',
        materials: [
          'Empty tissue box or small cardboard box',
          'String or yarn',
          'Tape',
          'Toy truck or small toy',
          'Markers to decorate'
        ],
        safetyNotes: [
          'Ask a grown-up to help with scissors if you need to cut anything',
          'Make sure string isn\'t long enough to be a tripping hazard'
        ],
        steps: [
          'Decorate your box to look like an elevator or crane',
          'Tape one end of the string inside the top of the box',
          'Tie your toy truck or toy to the other end of the string',
          'Now you have a crane! PULL the string to lift your toy up',
          'Let go gently to let gravity PULL the toy back down',
          'Try lifting heavier and lighter toys—which is easier?',
          'Experiment: Make the string longer or shorter—what changes?',
          'Can you pull your toy all the way to the top of the box?'
        ],
        whatYoullDiscover: 'You\'ll discover that you use a PULL force to lift things up against gravity! The heavier the object, the more force (harder pull) you need. Real construction cranes work the same way, just much bigger!',
        imagePrompt: 'A handmade cardboard crane with string pulling up a small toy truck, decorated with colorful markers'
      }
    ],
    reviewQuestions: [
      {
        question: 'What is a force?',
        options: [
          'A type of truck',
          'A push or a pull',
          'Something heavy',
          'A loud noise'
        ],
        correctAnswer: 1,
        explanation: 'A force is a push or a pull! Forces make things move. Every time you want to move something, you use a force.',
        emoji: '💪'
      },
      {
        question: 'When you open a door by the handle, are you using a push or a pull?',
        options: [
          'A push',
          'A pull',
          'Neither',
          'Both'
        ],
        correctAnswer: 1,
        explanation: 'When you open a door by pulling the handle toward you, you\'re using a PULL force! If you pushed the door open, that would be a push force.',
        emoji: '🚪'
      },
      {
        question: 'What does a bulldozer do to move dirt?',
        options: [
          'It pulls the dirt behind it',
          'It pushes the dirt with its blade',
          'It sucks up the dirt',
          'It throws the dirt'
        ],
        correctAnswer: 1,
        explanation: 'A bulldozer uses a big blade to PUSH dirt and rocks! The powerful engine gives it the force it needs to push heavy loads.',
        emoji: '🚜'
      },
      {
        question: 'Which surface would let a toy car roll the farthest with one push?',
        options: [
          'Thick carpet',
          'Grass',
          'Smooth tile floor',
          'Gravel'
        ],
        correctAnswer: 2,
        explanation: 'A smooth tile floor would let the car roll the farthest! Smooth surfaces have less friction (rubbing) that slows things down. Rough surfaces like carpet and grass slow things down more.',
        emoji: '🏎️'
      }
    ],
    prayerPrompt: 'Dear God, thank You for creating the rules that make things move! Thank You for pushes and pulls that help us open doors, move toys, and play. Thank You for giving people the ability to build amazing machines like trucks and excavators. Help us learn more about Your creation every day! Amen. 🙏',
    oklahomaStandards: ['1-PS2-1', '1-PS2-2', '1.CS.D.01']
  }
];

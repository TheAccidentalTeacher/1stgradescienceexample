import { Lesson } from '../types';

export const unit6Lessons: Lesson[] = [
  {
    id: 'unit-6-lesson-1',
    unitId: '6',
    lessonNumber: 1,
    title: 'Patterns in the Sky',
    subtitle: 'How the sun, moon, and stars follow God\'s perfect design',
    estimatedTime: '45-60 minutes',
    icon: '☀️',
    heroImage: 'A split scene showing bright sun during day and moon with stars at night over a landscape',
    heroImageStyle: 'cartoon',
    scripture: {
      reference: 'Genesis 1:14-15',
      text: 'And God said, "Let there be lights in the expanse of the heavens to separate the day from the night. And let them be for signs and for seasons, and for days and years, and let them be lights in the expanse of the heavens to give light upon the earth." And it was so.',
      version: 'ESV'
    },
    objectives: [
      'Understand that the sun gives us light during the day',
      'Learn that the moon and stars appear at night',
      'Discover that these patterns repeat every single day',
      'Recognize that God created the sun, moon, and stars for specific purposes'
    ],
    vocabulary: [
      { word: 'Pattern', definition: 'Something that repeats over and over in the same way', emoji: '🔄' },
      { word: 'Day', definition: 'The time when the sun is in the sky giving us light', emoji: '☀️' },
      { word: 'Night', definition: 'The time when the sun is gone and it\'s dark', emoji: '🌙' },
      { word: 'Season', definition: 'Times of year with different weather (spring, summer, fall, winter)', emoji: '🍂' },
      { word: 'Rotate', definition: 'To spin around like a top', emoji: '🌍' }
    ],
    content: [
      {
        type: 'explanation',
        text: 'Every morning, the sun appears in the sky to give us light and warmth. Every evening, it disappears and the moon and stars come out. This pattern happens every single day without fail! God created this pattern on Day 4 of Creation Week and it has been working perfectly ever since—for thousands of years!'
      },
      {
        type: 'key-point',
        text: '☀️ Big Truth: God made the sun, moon, and stars to be "for signs and for seasons, and for days and years." He gave them specific jobs! The sun marks our days, the moon helps us track months, and together they help us know when seasons change.'
      },
      {
        type: 'fun-fact',
        text: 'The sun is about 400 times bigger than the moon, but it\'s also about 400 times farther away! That\'s why they look almost the same size in our sky. What an amazing design! This perfect balance lets us have solar eclipses where the moon covers the sun exactly.'
      },
      {
        type: 'bible-connection',
        text: 'Psalm 136:7-9 says God "made the great lights, the sun to rule over the day... the moon and stars to rule over the night, for his steadfast love endures forever." God keeps the sun, moon, and stars in their patterns because He loves us and cares for us!'
      },
      {
        type: 'explanation',
        text: 'Why do we have day and night? God created the Earth to ROTATE (spin like a top). When your part of Earth faces the sun, you have DAY—it\'s bright and warm. When your part spins away from the sun, you have NIGHT—it\'s dark and cool. The Earth takes 24 hours (one full day) to make one complete spin!'
      },
      {
        type: 'key-point',
        text: '🌙 Important: The moon doesn\'t make its own light—it reflects the sun\'s light like a mirror! That\'s why the moon looks different throughout the month. We see more or less of the sunny side depending on where the moon is. God designed this beautiful pattern we call moon phases!'
      }
    ],
    activities: [
      {
        title: 'Sun Shadow Tracker',
        description: 'Watch shadows change throughout the day as the sun moves across the sky!',
        materials: [
          'A stick, toy, or your own body',
          'Driveway or sidewalk area (somewhere sunny)',
          'Sidewalk chalk',
          'Paper and pencil',
          'A sunny day!'
        ],
        safetyNotes: [
          'NEVER look directly at the sun—it can hurt your eyes!',
          'Wear sunscreen and a hat if you\'ll be outside a lot',
          'Drink water to stay hydrated',
          'Only use chalk on YOUR driveway or sidewalk'
        ],
        steps: [
          'In the morning (around 9am), put a stick in the ground or stand in one spot',
          'Look at the shadow the sun makes',
          'Use chalk to trace around the shadow',
          'Write the time next to the shadow',
          'Go back to the SAME spot at lunchtime (around noon)',
          'Trace the new shadow with a different color chalk',
          'Write the time',
          'Do it again in the afternoon (around 3pm)',
          'Compare the shadows: How did they change? Which is longest? Shortest?',
          'Notice which direction the shadows point—this shows where the sun is!'
        ],
        whatYoullDiscover: 'You\'ll discover that shadows change as the sun moves across the sky! Morning shadows are long and point one direction. Noon shadows are short. Afternoon shadows are long again but point the opposite direction! This pattern repeats every single day because of God\'s faithful design.',
        imagePrompt: 'Three chalk shadow tracings of a stick at different times of day showing how shadow length and direction changes'
      },
      {
        title: 'Day and Night Spinner',
        description: 'Make a model to show how Earth\'s rotation creates day and night!',
        materials: [
          'Paper plate',
          'Markers or crayons',
          'Pencil with eraser',
          'Brass fastener (paper brad)',
          'Flashlight'
        ],
        safetyNotes: [
          'Ask a grown-up to help poke the hole for the fastener',
          'Be careful with the pointy end of the fastener'
        ],
        steps: [
          'Use the marker to divide your plate in half with a line',
          'Color one half yellow/orange/bright for DAY—draw a sun',
          'Color the other half dark blue/black for NIGHT—draw moon and stars',
          'Draw a stick figure on the day side (this is you!)',
          'Draw the same stick figure on the night side (you again!)',
          'Poke a brass fastener through the center of the plate',
          'Attach to another paper or cardboard so it can spin',
          'Hold a flashlight to be the "sun"',
          'Spin the plate slowly and watch as the person on the plate goes from day to night!',
          'Point out: When your figure faces the light, it\'s DAY. When it faces away, it\'s NIGHT!'
        ],
        whatYoullDiscover: 'You\'ll discover how Earth\'s spinning creates day and night! The sun doesn\'t move around Earth—Earth rotates! When we face the sun, we have day. When we spin away, we have night. God designed this perfect pattern!',
        imagePrompt: 'A colorful paper plate divided into day and night with a stick figure on each side, with a flashlight shining on it'
      },
      {
        title: 'Moon Phase Observation Journal',
        description: 'Track the moon\'s changes over a month to see God\'s pattern!',
        materials: [
          'Notebook or paper',
          'Pencil or markers',
          'Calendar',
          'A view of the night sky',
          'Grown-up to go outside with you at night'
        ],
        safetyNotes: [
          'Only go outside at night with a grown-up',
          'Dress warmly if it\'s cold',
          'If you can\'t see the moon one night (clouds or rain), just note that!'
        ],
        steps: [
          'Every night for a month, go outside after dinner',
          'Look for the moon in the sky',
          'Draw what the moon looks like in your journal',
          'Label the date',
          'Is it a thin crescent? Half moon? Full moon? No moon visible?',
          'Notice: Where in the sky is it? What time is it?',
          'Do this every single night if you can',
          'After a month, look at all your drawings together',
          'See the pattern? New moon → crescent → half → gibbous → full → gibbous → half → crescent → new moon!',
          'This pattern repeats every 29.5 days—God designed it perfectly!'
        ],
        whatYoullDiscover: 'You\'ll discover that the moon follows a predictable pattern God designed! The moon goes through phases (different shapes) each month. This happens because we see different amounts of the sunny side as the moon orbits Earth. God\'s creation follows perfect patterns!',
        imagePrompt: 'A journal page showing eight moon phase drawings across a month with dates labeled and a happy child observing'
      }
    ],
    reviewQuestions: [
      {
        question: 'On which day of Creation did God make the sun, moon, and stars?',
        options: [
          'Day 1',
          'Day 3',
          'Day 4',
          'Day 7'
        ],
        correctAnswer: 2,
        explanation: 'God made the sun, moon, and stars on Day 4 of Creation Week! He had already created light on Day 1, but on Day 4 He put the lights in the sky to govern day and night, seasons, and years.',
        emoji: '4️⃣'
      },
      {
        question: 'Why do we have day and night?',
        options: [
          'The sun turns off and on',
          'The Earth rotates (spins)',
          'Clouds cover the sun',
          'The sun goes to sleep'
        ],
        correctAnswer: 1,
        explanation: 'We have day and night because Earth ROTATES (spins)! When our part of Earth faces the sun, it\'s daytime. When we spin away from the sun, it\'s nighttime. One full rotation takes 24 hours—that\'s one day!',
        emoji: '🌍'
      },
      {
        question: 'Does the moon make its own light?',
        options: [
          'Yes, the moon glows on its own',
          'No, it reflects the sun\'s light',
          'Yes, but only at night',
          'No, the stars light it up'
        ],
        correctAnswer: 1,
        explanation: 'The moon does NOT make its own light—it reflects the sun\'s light like a mirror! That\'s why we see different moon phases. We only see the parts of the moon that the sun is shining on. God designed this beautiful system!',
        emoji: '🌙'
      },
      {
        question: 'What did God say the sun, moon, and stars are for?',
        options: [
          'Just to look pretty',
          'To help aliens find Earth',
          'For signs, seasons, days, and years',
          'To give us something to study'
        ],
        correctAnswer: 2,
        explanation: 'Genesis 1:14 tells us God made the sun, moon, and stars "for signs and for seasons, and for days and years." They have important jobs! They help us track time, know when to plant crops, and navigate. God designed them with purpose!',
        emoji: '📅'
      }
    ],
    prayerPrompt: 'Dear God, thank You for creating the sun to give us warmth and light every day! Thank You for the moon and stars that shine at night. Thank You that these patterns never fail because You are faithful and keep Your creation working perfectly. Help us remember that You made everything with purpose and love. Amen. 🙏',
    oklahomaStandards: ['1-ESS1-1', '1-ESS1-2', '1.CS.D.01']
  }
];

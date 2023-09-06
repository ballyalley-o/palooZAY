import TextLaborate from '@components/TextLaborate'

const _types = {
  MAIN: {
    main: 'EASY',
    sub: 'AI',
    dub: 'PROMPTS',
  },
  HOME: {
    title: (title) => `EASY ${(<TextLaborate text={title} />)} PROMPTS`,
    description: 'AI powered Cues for faster queueing',
  },
  CREATE: {
    label: (type) => `${type} & ZAY IT!`,
    description: 'A New Prompt to share to the world, ZAY IT!',
    button: 'CREATE',
  },
  EDIT: {
    label: (type) => `${type} & ZAY IT!`,
    description: 'Edit your Prompt, ZAY IT AGAIN!',
    button: 'EDIT',
  },
  FEED: {
    search: 'What are you searching for?',
  },
  ACCOUNT: {
    description: 'Welcome to your Account',
  },
  PROMPT: {
    title: 'PROMPT FORM',
  },
  TAGS: {
    title: 'TAGS',
  },
  PAGES: {
    create: 'CREATE',
    edit: 'EDIT',
  },
}

export default _types

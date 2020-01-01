const getAll = async () => {
  return Promise.resolve([
    {
      likes: 13,
      author: 'Michael Night',
      url: 'http://the-speaking-car.com',
      title: 'The speaking car',
      user: {
        blogs: [],
        username: 'victor',
        name: 'Victor Molero',
        id: '5dfbfde7caf43d648638e5f1'
      },
      id: '5dfe30925e7bba29e581b07d'
    },
    {
      likes: 65,
      author: 'Sponge Bob',
      url: 'http://living-in-a-pinapple.com',
      title: 'Living in a pineapple',
      user: {
        blogs: [],
        username: 'victor',
        name: 'Victor Molero',
        id: '5dfbfde7caf43d648638e5f1'
      },
      id: '5dfe313f5e7bba29e581b07e'
    }
  ])
}

export default { getAll }

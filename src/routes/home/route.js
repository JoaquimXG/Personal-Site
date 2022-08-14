const experience = 'data/experience';
const project = 'data/project';

module.exports = {
  all: () => [{ slug: '/' }],
  permalink: '/',
  data: ({ data }) => {
    data.experience = experience;
    data.project = project;
    return data;
  },
};

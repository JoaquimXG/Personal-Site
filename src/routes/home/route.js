const experience = 'data/experience';
const project = 'data/project';

module.exports = {
  // the all function returns an array of all of the 'request' objects of a route. Since this is the homepage, there is only one.
  all: () => [{ slug: '/' }],
  // the permalink function takes a 'request' object and returns a relative permalink. In this case "/"
  permalink: '/',
  data: ({ data }) => {
    data.experience = experience;
    data.project = project;
    return data;
  },
};

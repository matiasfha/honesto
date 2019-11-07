const currentUser = {
  name: "Bart Sims",
  email: "bart.sims@example.com",
  id: "8705633T",
  picture: {
    large: "https://randomuser.me/api/portraits/men/62.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/62.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/62.jpg"
  }
};

const users = [
  {
    name: "Britney Sims",
    email: "britney.sims@example.com",
    id: "8705633T",
    picture: {
      large: "https://randomuser.me/api/portraits/women/62.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/62.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/62.jpg"
    }
  },
  {
    name: "Imogen Edwards",
    email: "imogen.edwards@example.com",
    id: "9705633T",
    picture: {
      large: "https://randomuser.me/api/portraits/men/95.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/95.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/95.jpg"
    }
  },
  {
    name: "Jed Simmons",
    email: "jed.simmmons@example.com",
    id: "6505520T",
    picture: {
      large: "https://randomuser.me/api/portraits/men/74.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/74.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/74.jpg"
    }
  },
  {
    name: "Jessica Torres",
    email: "jessica.torres@example.com",
    id: "JJ 12 06 08 V",
    picture: {
      large: "https://randomuser.me/api/portraits/women/63.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/63.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/63.jpg"
    }
  },
  {
    name: "Pat Berger",
    email: "pat.berger@example.com",
    id: "756.5443.6694.19",
    picture: {
      large: "https://randomuser.me/api/portraits/men/63.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/63.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/63.jpg"
    }
  }
];

export const getUsers = () => {
  return users;
};

export const getCurrentUser = () => {
  return currentUser;
};

export const getUser = id => {
  return users.find(user => user.id === id);
};

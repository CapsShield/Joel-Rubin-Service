const db = require('./index.js').sequelize

module.exports = {

}
const Test = db.define('Test', {
  info: {
    type: Sequelize.STRING
  }
})

const Game = db.define('Game', {
  id: {
    //fk in Photos, Reviews, GamesTags
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
  },
  gameHeaderImageUrl: {
    type: Sequelize.STRING,
  },
  gameSynopsis: {
    type: Sequelize.STRING,
  },
  releaseDate: {
    type: Sequelize.DATEONLY,
  },
  developer: {
    type: Sequelize.STRING,
  },
  publisher: {
    type: Sequelize.STRING,
  }
})


const Photos = db.define('Photos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  description: {
    type: Sequelize.STRING,
  },
  photoUrl: {
    type: Sequelize.STRING,
  },
  game_id: {
    type: Sequelize.INTEGER,
    required: true,
    allowNull: false
  }
})

const Reviews = db.define('Reviews', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  pos_neg {
  type: Sequelize.BOOLEAN,
},
  date: {
  type: Sequelize.DATEONLY,
}
  game_id: {
  type: Sequelize.INTEGER
}

})

const GamesTags = db.define('GamesTags', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  game_id: {
    type: Sequelize.INTEGER
  },
  tags_id: {
    type: Sequelize.INTEGER
  }
})

const UserTags = db.define('UserTags', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tag: {
    type: Sequelize.STRING
  }
})

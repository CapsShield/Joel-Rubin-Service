const Sequelize = require('sequelize')
const sequelize = new Sequelize('vapor', 'root', null, {
  host: 'localhost', dialect: 'mysql'
})


//associations
sequelize.sync({ force: true })
//photos



sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
});


const Games = sequelize.define('Games', {
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


const Photos = sequelize.define('Photos', {
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
  }
})

const Reviews = sequelize.define('Reviews', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  pos_neg: {
    type: Sequelize.BOOLEAN,
  },
  date: {
    type: Sequelize.DATEONLY,
  }

})

const GamesTags = sequelize.define('GamesTags', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
})

const UserTags = sequelize.define('UserTags', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tag: {
    type: Sequelize.STRING
  }
})

// Associations //

// Games.hasMany(Photos)
// Games.hasMany(Reviews)





module.exports = {
  // Test: Test,
  sequelize: sequelize
}
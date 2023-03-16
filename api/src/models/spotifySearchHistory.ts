import { DataTypes } from 'sequelize'
import { db } from '../database/db'

const SpotifySearchHistory = db.define('SpotifySearchHistory', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ip_address: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  artist_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  search_time: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  tableName: 'spotify_search_history',
  timestamps: false
})

export default SpotifySearchHistory
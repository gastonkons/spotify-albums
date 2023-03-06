import { Model, DataTypes } from 'sequelize';
import { db } from '../database/db';

// interface SpotifySearchHistoryAttributes {
//   id: number;
//   ip_address: string;
//   artist_name: string;
//   search_time: Date;
// }

// class SpotifySearchHistory extends Model<SpotifySearchHistoryAttributes>
//   implements SpotifySearchHistoryAttributes {
//   public id!: number;
//   public ip_address!: string;
//   public artist_name!: string;
//   public search_time!: Date;
// }

// SpotifySearchHistory.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     ip_address: {
//       type: DataTypes.STRING(15),
//       allowNull: false,
//     },
//     artist_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     search_time: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize: db,
//     tableName: 'spotify_search_history',
//     timestamps: false, // Configuración para desactivar las propiedades de fecha
//   }
// );

// export { SpotifySearchHistory };


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
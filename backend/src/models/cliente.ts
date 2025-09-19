import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection';

export class Cliente extends Model {
  public id!: number;
  public nombre!: string;
  public email!: string;
  public telefono!: string;
  public direccion!: string;
}

Cliente.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'clientes',
  }
);
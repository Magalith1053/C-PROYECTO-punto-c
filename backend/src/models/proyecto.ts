import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection';

export class Proyecto extends Model {
  public id!: number;
  public nombre!: string;
  public descripcion!: string;
  public fechaInicio!: Date;
  public fechaFin!: Date;
  public clienteId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Proyecto.init(
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
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fechaInicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fechaFin: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'proyectos',
  }
);
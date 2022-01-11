import { DataTypes } from 'sequelize';
import dbClient from '../index';

const places = dbClient.define('Place', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coordinates: {
        type: DataTypes.GEOMETRY('POINT', 4326),
        allowNull: false
    }
}, {
    timestamps: false
})

export default places;
// Local import
const { sequelize } = require('../db');
const { DataTypes } = require('sequelize');

//osb_infoscommercant model
const { STRING, INTEGER, BOOLEAN } = DataTypes;
const OsbInfosCommercant = sequelize.define('osb_infoscommercant', { // Connection sur la table osb_infoscommercant
    // ID existant par defaut, sauf si uuid ou autre
    numTahiti: {
        type: STRING(7),
        primaryKey: true,
        allowNull: false,
        notEmpty: true,
        unique: {
            args: true,
            msg: 'Ce Numero Tahiti existe déjà'
        },
        validate: {
            notNull: {
                msg: 'Saisissez Numero Tahiti'
            }
        }
    },
    raisonSociale: {
        type: STRING(150),
        allowNull: false,
        notEmpty: true,
        validate: {
            notNull: 'Saisissez la Raison Sociale',
        }
    },
    email: {
        type: STRING(150),
        allowNull: false,
        notEmpty: true,
        validate: {
            notNull: 'Saisissez un email',
        }
    },
    logo: {
        type: STRING(150),
        allowNull: false,
        validate: {
            notNull: 'Saisissez la Raison Sociale',
        }
    },
    idBoutiquePzn: {
        type: STRING(45),
        allowNull: false,
        notEmpty: true,
        validate: {
            notNull: 'Saisissez la Raison Sociale',
        }
    },
    certificat: {
        type: STRING(20),
        allowNull: false,
        notEmpty: true,
        validate: {
            notNull: 'Saisissez la Raison Sociale',
        }
    },
    libelleSMS: {
        type: STRING(15),
        allowNull: false,
        notEmpty: true,
        validate: {
            notNull: 'Saisissez le SOA',
        }
    },
    isMaFactureGene: {
        type: BOOLEAN,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = OsbInfosCommercant;
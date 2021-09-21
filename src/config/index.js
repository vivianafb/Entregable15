import dotenv from 'dotenv';
dotenv.config();

const venv = {
  PORT: process.env.PORT || 8080,
  MONGO_ATLAS_USER: process.env.MONGO_ATLAS_USER || 'admin',
  MONGO_ATLAS_PASSWORD: process.env.MONGO_ATLAS_PASSWORD || 'MfzrMGgPvRFiuyaB',
  MONGO_ATLAS_CLUSTER: process.env.MONGO_ATLAS_CLUSTER || 'cluster0.ixair.mongodb.net',
  MONGO_ATLAS_DBNAME: process.env.MONGO_ATLAS_DBNAME || 'miprimerDB',
  MONGO_LOCAL_DBNAME: process.env.MONGO_LOCAL_DBNAME || 'miprimerDB',
};

export default venv;
import colors from './src/defined-colors';
import ttcColorApi from './src/ansi';
import ttcModifiers from './src/basics';

export {
    colors, ttcColorApi, ttcModifiers
};

const ttc = {
    ...colors, ...ttcColorApi, ...ttcModifiers
};

export default ttc;

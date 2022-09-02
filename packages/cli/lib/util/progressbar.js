const progress = require('cli-progress');
const chalk = require('chalk');
const bar = new progress.SingleBar({}, {
    format: '[{bar}]({value}/{total}) {percentage}% | {eta}s',
    barCompleteChar: '=',
    barIncompleteChar: ' '
});

const createProgressBar = (limit) => {
    bar.start(limit, 0);
};

const updateProgressBar = (increment) => {
    bar.update(increment);
};

const stopProgressBar = () => {
    bar.stop();
};

module.exports = {
    create : (l) => {
        return createProgressBar(l);
    },
    update : (i) => {
        return updateProgressBar(i);
    },
    stop : () => {
        return stopProgressBar();
    }
};
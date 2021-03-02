module.exports = {
    require: [
        'tsconfig-paths/register',
        'ts-node/register',
        'esm',
    ],
    fullTrace: true,
    traceWarning: true,
    bail: true,
    slow: 0,
    timeout: 500,
    extension: [
        'ts',
    ],
}

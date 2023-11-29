module.exports = {
  extends: ['gitmoji'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'analytics',
        'build',
        'chore',
        'ci',
        'container',
        'docs',
        'feature',
        'fix',
        'i18n',
        'perf',
        'refactor',
        'revert',
        'security',
        'style',
        'test',
        'ui',
        'ux',
        'wip',
      ],
    ],
  }
};

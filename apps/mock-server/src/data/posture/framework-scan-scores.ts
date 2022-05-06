export const frameworkScanScores = {
  total: {
    value: 4,
    relation: 'eq'
  },
  response: [
    // {
    //   name: 'Posture',
    //   value: 85,
    //   totalControls: 41,
    //   failedControls: 15,
    // },
    {
      name: 'Mitre',
      value: 48,
      totalControls: 24,
      failedControls: 4,
    },
    {
      name: 'ARMO Best Practices',
      value: 37,
      totalControls: 17,
      failedControls: 11,
    },
    {
      name: 'NSA and CISA',
      value: 57,
      totalControls: 27,
      failedControls: 23,
    }
  ],
  cursor: ''
}

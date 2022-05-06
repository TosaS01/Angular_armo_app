export const vulnerabilities = [
  {
    severity: 'Critical',
    total: 60,
    totalRelevant: 20,
    fixedTotal: 32,
    fixedRelevant: 10
  },
  {
    severity: 'High',
    total: 80,
    totalRelevant: 33,
    fixedTotal: 54,
    fixedRelevant: 20
  },
  {
    severity: 'Medium',
    total: 70,
    totalRelevant: 30,
    fixedTotal: 24,
    fixedRelevant: 12
  },
  {
    severity: 'Low',
    total: 122,
    totalRelevant: 30,
    fixedTotal: 90,
    fixedRelevant: 10
  }
]

export const vulnerabilitiesOvertime = [
  {
    severity: 'Critical',
    cords: [
      {
        value: 79,
        timestamp: '2021-07-09T23:59:59.99999Z'
      },
      {
        value: 73,
        timestamp: '2021-07-16T23:59:59.99999Z'
      },
      {
        value: 58,
        timestamp: '2021-07-23T23:59:59.99999Z'
      },
      {
        value: 15,
        timestamp: '2021-07-30T23:59:59.99999Z'
      },
      {
        value: 54,
        timestamp: '2021-08-05T23:59:59.99999Z'
      },
      {
        value: 45,
        timestamp: '2021-08-12T23:59:59.99999Z'
      }
    ]    
  },
  {
    severity: 'High',
    cords: [
      {
        value: 43,
        timestamp: '2021-07-09T23:59:59.99999Z'
      },
      {
        value: 22,
        timestamp: '2021-07-16T23:59:59.99999Z'
      },
      {
        value: 14,
        timestamp: '2021-07-23T23:59:59.99999Z'
      },
      {
        value: 34,
        timestamp: '2021-07-30T23:59:59.99999Z'
      },
      {
        value: 44,
        timestamp: '2021-08-05T23:59:59.99999Z'
      },
      {
        value: 56,
        timestamp: '2021-08-12T23:59:59.99999Z'
      }
    ]
  },
  {
    severity: 'Medium',
    cords: [
      {
        value: 36,
        timestamp: '2021-07-09T23:59:59.99999Z'
      },
      {
        value: 47,
        timestamp: '2021-07-16T23:59:59.99999Z'
      },
      {
        value: 53,
        timestamp: '2021-07-23T23:59:59.99999Z'
      },
      {
        value: 74,
        timestamp: '2021-07-30T23:59:59.99999Z'
      },
      {
        value: 34,
        timestamp: '2021-08-05T23:59:59.99999Z'
      },
      {
        value: 26,
        timestamp: '2021-08-12T23:59:59.99999Z'
      }
    ]
  },
  {
    severity: 'Low',
    cords: [
      {
        value: 33,
        timestamp: '2021-07-09T23:59:59.99999Z'
      },
      {
        value: 67,
        timestamp: '2021-07-16T23:59:59.99999Z'
      },
      {
        value: 54,
        timestamp: '2021-07-23T23:59:59.99999Z'
      },
      {
        value: 14,
        timestamp: '2021-07-30T23:59:59.99999Z'
      },
      {
        value: 54,
        timestamp: '2021-08-05T23:59:59.99999Z'
      },
      {
        value: 36,
        timestamp: '2021-08-12T23:59:59.99999Z'
      }
    ]
  }      
]

export const vulnerabilitiesSumSummary = [
  {
    customerGUID: '1e3a88bf-92ce-44f8-914e-cbe71830d566',
    containersScanID: '58d3d675462fe91f59844e5d8aea8cff347b681dbd2e93d2e96c7a6d1fd4e28d',
    timestamp: 1627972156,
    wlid: 'wlid://cluster-DanielG/namespace-default/pod-nginx',
    imageTag: 'nginx',
    imageHash: '',
    cluster: 'DanielG',
    namespace: 'default',
    containerName: 'nginx',
    packages: [],
    severities: [
        'Low',
        'Medium',
        'High',
        'Critical',
        'Unknown'
    ],
    relevancies: [],
    fixes: [
        'Low',
        'Medium',
        'High',
        'Critical',
        'Unknown'
    ],
    listOfDangerousArtifcats: [
        'bin/dash',
        'bin/bash',
        'usr/bin/curl'
    ],
    severitiesSum: [
        {
            relevancy: 'Low',
            sum: 5
        },
        {
            relevancy: 'Medium',
            sum: 8
        },
        {
            relevancy: 'High',
            'sum': 9
        },
        {
            relevancy: 'Critical',
            sum: 1
        },
        {
            relevancy: 'Unknown',
            sum: 1
        }
    ],
    relevanciesSum: [],
    fixAvailbleSum: [
        {
            relevancy: 'Low',
            sum: 5
        },
        {
            relevancy: 'Medium',
            sum: 8
        },
        {
            relevancy: 'High',
            sum: 9
        },
        {
            relevancy: 'Critical',
            sum: 1
        },
        {
            relevancy: 'Unknown',
            sum: 1
        }
    ],
    status: 'Fail',
    registry: '',
    versionImage: 'nginx',
    numOfUnknownSeverity: 1,
    numOfNegligibleSeverity: 0,
    numOfLowSeverity: 5,
    numOfMeduiumSeverity: 8,
    numOfHighSeverity: 9,
    numOfCriticalSeverity: 1,
    numOfRelevantUnknownSeverity: 0,
    numOfRelevantNegligibleSeverity: 0,
    numOfRelevantLowSeverity: 0,
    numOfRelevantMediumSeverity: 0,
    numOfHighRelevantSeverity: 0,
    numOfRelevantCriticalSeverity: 0,
    numOfFixAvailableUnknownSeverity: 1,
    numOfFixAvailableNegligibleSeverity: 0,
    numOfFixAvailableLowSeverity: 5,
    numOfFixAvailableMediumSeverity: 8,
    numOfFixAvailableHighSeverity: 9,
    numOfFixAvailableCriticalSeverity: 1,
    numOfRelevantIssues: 0,
    numOfIrelevantIssues: 0,
    numOfUnknownIssues: 24,
    numOfLeakedSecrets: 0,
    version: '',
    history: [
        {
            containerScanID: '128cf372625455336ed6ad8df05d40b20301b665fcf2f6c07f63b8d679cd5741',
            timestamp: 1627969645
        }
    ],
    urgent: 1,
    neglected: 1,
    healthStatus: 'seen/unseen/read/unread/ignored/remediated'
  }
]
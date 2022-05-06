export const resources = {
  total: {
    value: 16,
    relation: 'eq'
  },
  response: [
    { name: 'test', numOfFailedControls: 2, remediation: 'Runtime Mitigated', frameworkName: 'mitre', resourceKind: 'POD' },
    { name: 'wlid://cluster-BenLtMinikube/namespace-hipster/deployment-adservice', numOfFailedControls: 5, remediation: 'Runtime Mitigated', frameworkName: 'armo best practices', resourceKind: 'Workload' },
    { name: 'test 2', numOfFailedControls: 1, remediation: 'Runtime Mitigated', frameworkName: 'armo best practices', resourceKind: 'POD' },
    { name: 'hellsing', numOfFailedControls: 0, remediation: 'Runtime Mitigated', frameworkName: 'armo best practices', resourceKind: 'Cluster' },
    { name: 'test 4', numOfFailedControls: 1, remediation: 'Runtime Mitigated', frameworkName: 'mitre', resourceKind: 'POD' },
    { name: 'test 5', numOfFailedControls: 6, remediation: 'Runtime Mitigated', frameworkName: 'mitre', resourceKind: 'Namespace' },
    { name: 'test 6', numOfFailedControls: 4, remediation: 'Runtime Mitigated', frameworkName: 'mitre', resourceKind: 'Namespace' },
    { name: 'test 8', numOfFailedControls: 2, remediation: 'Runtime Mitigated', frameworkName: 'armo best practices', resourceKind: 'POD' },
    { name: 'test 7', numOfFailedControls: 0, remediation: 'Runtime Mitigated', frameworkName: 'mitre', resourceKind: 'POD' },
    { name: 'wlid://cluster-BenLtMinikube/namespace-hipster/deployment-adservice', numOfFailedControls: 2, remediation: 'Runtime Mitigated', frameworkName: 'mitre', resourceKind: 'Workload' },
    { name: 'wlid://cluster-BenLtMinikube/namespace-hipster/deployment-adservice', numOfFailedControls: 1, remediation: 'Runtime Mitigated', frameworkName: 'armo best practices', resourceKind: 'Workload' },
    { name: 'pod 1', numOfFailedControls: 0, remediation: 'Runtime Mitigated', frameworkName: 'mitre', resourceKind: 'POD' },
    { name: 'wlid://cluster-BenLtMinikube/namespace-hipster/deployment-adservice', numOfFailedControls: 2, remediation: 'Runtime Mitigated', frameworkName: 'mitre', resourceKind: 'Workload' },
    { name: 'pod 2', numOfFailedControls: 4, remediation: 'Runtime Mitigated', frameworkName: 'mitre', resourceKind: 'POD' },
    { name: 'some space', numOfFailedControls: 1, remediation: 'Runtime Mitigated', frameworkName: 'armo best practices', resourceKind: 'Namespace' },
    { name: 'some test', numOfFailedControls: 2, remediation: 'Runtime Mitigated', frameworkName: 'NSA and CISA', resourceKind: 'Namespace' },
  ],
  cursor: ''
}

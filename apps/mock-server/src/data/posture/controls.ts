export const controls = {
  total: {
    value: 12,
    relation: 'eq'
  },
  response: [
    { status: 1, id: 'C0001', name: 'Run as non-root user', frameworkName: 'NSA and CISA', description: 'Use containers built to run applications as non-root users', remediation: 'Runtime Mitigated', affectedResourcesCount: 0, scoreImprove: -2, section: 'Initial Access' },
    { status: 3, id: 'C0002', name: 'Privileged containers', frameworkName: 'armo best practices', description: 'Preventing privileged containers', remediation: 'Runtime Mitigated', affectedResourcesCount: 1, scoreImprove: -5, section: 'Reconnaissance' },
    { status: 2, id: 'C0003', name: 'Use of host resources', frameworkName: 'mitre', description: 'Denying container features frequently exploited to breakout, such as hostPID, hostIPC, hostNetwork, allowedHostPath', remediation: 'Runtime Mitigated', affectedResourcesCount: 0, scoreImprove: -8, section: 'Execution' },
    { status: 1, id: 'C0011', name: 'Use of AppArmor/SELinux/seccomp', frameworkName: 'mitre', description: 'Hardening applications against exploitation using security services such as SELinux, AppArmor, and seccomp', remediation: 'Runtime Mitigated', affectedResourcesCount: 0, scoreImprove: -7, section: 'Execution' },
    { status: 2, id: 'C0007', name: 'Workloads which have access to the API server', frameworkName: 'mitre', description: 'Lock down access to control plane nodes using a firewall and role-based access control (RBAC)', remediation: 'Runtime Mitigated', affectedResourcesCount: 0, scoreImprove: -5, section: 'Reconnaissance' },
    { status: 2, id: 'C0008', name: 'Use of Network Policy ' , frameworkName: 'NSA and CISA', description: 'Set up network policies to isolate resources. Pods and services in different namespaces can still communicate with each other unless additional separation is enforced, such as network policies', remediation: 'Runtime Mitigated', affectedResourcesCount: 0, scoreImprove: -5, section: 'Persistence' },
    { status: 1, id: 'C0121', name: 'Secrets in env variable or configuration files', frameworkName: 'armo best practices', description: 'Place all credentials and sensitive information in Kubernetes Secrets rather than in configuration files. Encrypt Secrets using a strong encryption method', remediation: 'Runtime Mitigated', affectedResourcesCount: 0, scoreImprove: -9, section: 'Persistence' },
    { status: 1, id: 'C0072', name: 'Anonymous and unauthenticated login ', frameworkName: 'NSA and CISA', description: 'Disable anonymous login (enabled by default)', remediation: 'Runtime Mitigated', affectedResourcesCount: 0, scoreImprove: -5, section: 'Initial Access' },
    { status: 2, id: 'C0090', name: 'Cluster admins', frameworkName: 'mitre', description: 'Create RBAC policies to limit administrator, user, and service account activity', remediation: 'Runtime Mitigated', affectedResourcesCount: 0, scoreImprove: -1, section: 'Execution' },
    { status: 3, id: 'C0009', name: 'Audit log enabled', frameworkName: 'NSA and CISA', description: 'Enable audit logging (disabled by default)', remediation: 'Runtime Mitigated', affectedResourcesCount: 4, scoreImprove: -1, section: 'Persistence' },
    { status: 3, id: 'C0010', name: 'Vulnerabilities are not older than 1 month', frameworkName: 'NSA and CISA', description: 'Immediately apply security patches and updates', remediation: 'Runtime Mitigated', affectedResourcesCount: 1, scoreImprove: -2, section: 'Defense Evasion' },
    { status: 2, id: 'C0013', name: 'Scan for vulnerabilities every day', frameworkName: 'NSA and CISA', description: 'Perform periodic vulnerability scans and penetration tests', remediation: 'Runtime Mitigated', affectedResourcesCount: 0, scoreImprove: -3, section: 'Reconnaissance' }
  ],
  cursor: ''
}

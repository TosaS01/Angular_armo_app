export interface IFiltersDTO {
  namespace: { [name: string]: number };
  cluster: { [name: string]: number };
  project: { [name: string]: number };
  datacenter: { [name: string]: number };
}

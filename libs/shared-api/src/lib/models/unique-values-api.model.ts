export class UniqueValuesApi {
  fields: { [key: string]: string; };
  innerFilters: { [key: string]: string }[];

  constructor(data: Partial<UniqueValuesApi> = {}) {
    this.fields = data.fields ?? {};
    this.innerFilters = data.innerFilters ?? [];
  }
}

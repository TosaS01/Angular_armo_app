export interface ISideNavItem {
  readonly id: number;
  readonly parentId: number | null;
  readonly name: string;
  readonly url: string | null;
  readonly icon: string | null;
  isExpanded?: boolean;
}

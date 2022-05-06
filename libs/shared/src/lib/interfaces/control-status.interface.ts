import {
  ControlStatusColorEnum,
  ControlStatusIconEnum,
  ControlStatusTextEnum
} from '../enums';

export interface IControlStatus {
  name: ControlStatusTextEnum;
  icon: ControlStatusIconEnum;
  color: ControlStatusColorEnum;
}

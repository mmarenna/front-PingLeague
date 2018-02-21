import {JugadorDto} from './JugadorDto'
import {ScheduleDto} from './ScheduleDto'
export class PartidoDto {
  id: number;
  local: JugadorDto;
  visitor: JugadorDto;
  localPlayerResult: number;
  visitorPlayerResult: number;
  schedule: ScheduleDto;
}

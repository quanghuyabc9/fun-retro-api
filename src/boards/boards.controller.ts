import { Controller , Get} from '@nestjs/common';
import { Board } from './board.entity';
import { BoardsService } from './boards.service'

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService){}
    @Get()
    async findAll(): Promise<Board[]> {
       return this.boardsService.findAll();
    }
}

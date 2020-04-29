import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Observable } from 'rxjs';

interface Command {
  name: string;
  description: string;
  activated: boolean;
}

@Component({
  selector: 'app-commands-list',
  templateUrl: './commands-list.component.html',
  styleUrls: ['./commands-list.component.scss']
})
export class CommandsListComponent implements OnInit {

  commands: Observable<Command[]>;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.commands = this.httpService.get('commands');
  }

}

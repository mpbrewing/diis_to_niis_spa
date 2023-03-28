import {Component, OnInit} from '@angular/core';
import {MessageService, MessageType} from "../message.service";
import {DashboardService, SearchObject} from "./dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {

 diisRequestSelectOptions: string[] = ["Option 1", "Option 2", "Option 3"];
  constructor(private readonly messageService: MessageService,
              private readonly dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  postRequest(){
    const searchObjectBody: SearchObject = {
      id: '',
      name: ''
    };
    this.dashboardService.postRequest(searchObjectBody).subscribe(res => {
      const successMessage = res.message;
      if (successMessage) {
        this.messageService.prompt(`Post request was successful: ${successMessage}`, MessageType.Confirmation);
      }
    });
  }

  deleteRequest(){
    this.dashboardService.deleteRequest('id').subscribe(res => {
      if (res) {
        this.messageService.prompt('id was deleted', MessageType.Confirmation);
        // refresh table :
          //this.dashboardService.sendSearchObjectsUpdate();
      } else {
        this.messageService.prompt('id could not be deleted', MessageType.Error);
      }
    });
  }

}

/*
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'Lacking servers.';
  serverCount = 0;
  serverName = 'Test Server Name';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCount += 1;
    this.serverCreationStatus = 'Yass, server, yaaass. Server is called ' + this.serverName + ' .';
  }

  onBreakServer() {
    this.allowNewServer = false;
    // this.noClick.innerText = 'What did I just say';
    this.serverCreationStatus = "You're fired."
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //#region properti

  opened: boolean = true;
  modeSidebar: any = 'side';
  openedNavbar: boolean = false;
  sidenav: any = window.matchMedia("(max-width: 991.98px)");

  //#endregion

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

  }

  ngOnInit(): void {
    this.sidenavHide();
  }

  sidenavHide() {
    // Page Load Detect
    window.onload = (event) => {
      if (this.sidenav.matches) {
        this.opened = false;
        this.modeSidebar = 'push';
        this.openedNavbar = true;

      } else {
        this.modeSidebar = 'side';
        this.opened = true;
        this.openedNavbar = false;
      }
    };
    // Page resize browser detect
    window.onresize = (event) => {
      if (this.sidenav.matches) {
        this.opened = false;
        this.modeSidebar = 'push';
        this.openedNavbar = true;

      } else {
        this.modeSidebar = 'side';
        this.opened = true;
        this.openedNavbar = false;
      }
    };
  }

  onActivate(event: any) {
    // window.scroll(0,0);

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
  }

}

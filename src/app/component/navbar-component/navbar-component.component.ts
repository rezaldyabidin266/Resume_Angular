import { Component, Input, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface NavMenu {
  name: string;
  icon: string,
  navi: string,
  children?: NavMenu[];
}

const TREE_DATA: NavMenu[] = [
  //#region  navMenu
  {
    name: 'Home',
    icon: 'home',
    navi: 'home'
  },
  {
    name: 'About',
    icon: 'person',
    navi: 'about'
  },
  {
    name: 'Skills',
    icon: 'lan',
    navi: 'skill'
  },
  {
    name: 'Experience',
    icon: 'school',
    navi: 'pengalaman'
  },
  {
    name: 'Works',
    icon: 'work',
    navi: 'portofolio'
  },
  {
    name: 'Contact',
    icon: 'forum',
    navi: 'contact'
  },
  // {
  //   name: 'Udin',
  //   icon: 'a',
  //   children: [
  //     {
  //       name: 'Green',
  //       icon: '',
  //     }
  //   ],
  // },

  //#endregion
];

/** Flat node with expandable and level information */
interface navMenuNode {
  expandable: boolean;
  name: string;
  level: number;

}

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.scss']
})


export class NavbarComponentComponent implements OnInit {

  @Input() inputSideNav: any;

  private _transformer = (node: NavMenu, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  color: string = "";

  treeControl = new FlatTreeControl<navMenuNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  navMenuData = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  idNavigasi: string = "";

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) {

    this.navMenuData.data = TREE_DATA;

  }

  ngOnInit(): void {

  }

  hasChild = (_: number, node: navMenuNode) => node.expandable;

  navigasi(node: any, navMenuData: any) {
    this.color = "var(--warna-abu)";
    navMenuData.forEach((e: any) => {
      if (node.name == e.name) {
        this.idNavigasi = `#${e.navi}`;
        if (window.innerWidth <= 992) {
          this.inputSideNav.close();
        }
      }
    });
  }

  mobileSidenav(event: any) {
    if (event.target.innerWidth <= 599.98) {

    } else {

    }
  }


}
